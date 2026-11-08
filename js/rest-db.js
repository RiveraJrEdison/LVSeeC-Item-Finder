/* rest-db.js — lets app.js talk to connector.php.
 *
 * app.js was written against a small "cloud database" object with this shape:
 *     db.collection(name).doc(id).set(record)        save one record
 *     db.collection(name).doc(id).delete()           delete one record
 *     db.collection(name).onSnapshot(next, error)    be told about changes
 * This file gives it the same shape on top of fetch() + connector.php, so app.js needs almost no changes.
 *
 *   makeRestDB('connector.php')  ->  Promise of that object, or null when the backend is not reachable
 *                                    (opened from file://, PHP not running, setup.php not run yet).
 *   db.reauth()                  ->  call after a guard signs in or out so guard-only data is re-read now
 *   db.onStatus(fn)              ->  fn('ok' | 'local') when the connection comes back / drops
 *   db.onAuthLost(fn)            ->  fn() when the server says "sign in" to a save
 */
(function () {
  'use strict';

  var COLS = ['tickets', 'claims', 'chats', 'notifs', 'logs'];
  var POLL_MS = 3000;          // how often to look for changes made by other people
  var POLL_HIDDEN_MS = 15000;  // slower when the tab is in the background

  // JSON.stringify with sorted keys, so two copies of a record compare equal whatever their key order.
  function stable(v) {
    if (Array.isArray(v)) return '[' + v.map(stable).join(',') + ']';
    if (v && typeof v === 'object') {
      return '{' + Object.keys(v).sort().map(function (k) {
        return JSON.stringify(k) + ':' + stable(v[k]);
      }).join(',') + '}';
    }
    return JSON.stringify(v === undefined ? null : v);
  }

  function makeRestDB(base) {
    base = base || 'connector.php';
    if (typeof fetch !== 'function' || !/^https?:$/.test(location.protocol)) return Promise.resolve(null);

    var HDR = { 'X-Requested-With': 'lv' };
    var known = {};            // known[collection][id] = fingerprint of the copy the server last sent
    var subs = {};             // subs[collection] = { next, err, first }
    var pending = 0;           // saves/deletes still on their way to the server
    var chain = Promise.resolve();
    var polling = false, timer = null, online = true;
    var statusCb = null, authLostCb = null;
    COLS.forEach(function (c) { known[c] = {}; });

    function url(c, id) {
      return base + '?c=' + encodeURIComponent(c) + (id ? '&id=' + encodeURIComponent(id) : '');
    }
    function setOnline(v) {
      if (v !== online) { online = v; if (statusCb) statusCb(v ? 'ok' : 'local'); }
    }
    function httpError(r, body) {
      var e = new Error((body && body.error) || ('HTTP ' + r.status));
      e.status = r.status;
      return e;
    }

    // ---- writes: one at a time and in order (tickets before the claims that point at them) ----
    function enqueue(job) {
      pending++;
      var run = chain.then(job);
      chain = run.catch(function () {}).then(function () {
        pending--;
        if (!pending) schedule(50);          // look at the server right after our own saves
      });
      return run;
    }
    function send(method, c, id, body) {
      var headers = Object.assign({}, HDR);
      if (body !== undefined) headers['Content-Type'] = 'application/json';
      return fetch(url(c, method === 'DELETE' ? id : null), {
        method: method, headers: headers, credentials: 'same-origin', cache: 'no-store',
        body: body === undefined ? undefined : JSON.stringify(body)
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (!r.ok) {
            var e = httpError(r, j);
            if (r.status === 401 && authLostCb) authLostCb();
            throw e;
          }
          setOnline(true);
          return j;
        });
      }, function (e) { setOnline(false); throw e; });
    }

    // ---- reads: ask for each collection, turn the answer into "added / modified / removed" ----
    function emit(c, list, sub) {
      var seen = {}, changes = [];
      list.forEach(function (rec) {
        var fp = stable(rec);
        seen[rec.id] = 1;
        var prev = known[c][rec.id];
        if (prev === undefined) changes.push({ type: 'added', doc: mkDoc(rec.id, rec) });
        else if (prev !== fp) changes.push({ type: 'modified', doc: mkDoc(rec.id, rec) });
        known[c][rec.id] = fp;
      });
      Object.keys(known[c]).forEach(function (id) {
        if (!seen[id]) { delete known[c][id]; changes.push({ type: 'removed', doc: mkDoc(id, { id: id }) }); }
      });
      if (sub.first || changes.length) {
        sub.first = false;
        sub.next({ docChanges: function () { return changes; } });
      }
    }
    function mkDoc(id, rec) {
      return { id: id, data: function () { return JSON.parse(JSON.stringify(rec)); } };
    }

    function pollOnce() {
      if (polling || pending > 0) return Promise.resolve();
      polling = true;
      var names = COLS.filter(function (c) { return subs[c]; });
      var i = 0;
      function next() {
        if (i >= names.length) return Promise.resolve();
        var c = names[i++], sub = subs[c];
        return fetch(url(c), { headers: HDR, credentials: 'same-origin', cache: 'no-store' }).then(function (r) {
          if (r.status === 401 || r.status === 403) return [];            // guard-only data: a visitor simply sees none
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        }).then(function (list) {
          setOnline(true);
          if (pending > 0) return;                                        // a save started meanwhile: this answer may be stale
          emit(c, Array.isArray(list) ? list : [], sub);
        }, function (e) {
          setOnline(false);
          if (sub.err) sub.err(e);
        }).then(next);
      }
      return next().then(function () { polling = false; }, function () { polling = false; });
    }
    function schedule(ms) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        pollOnce().then(function () { schedule(document.hidden ? POLL_HIDDEN_MS : POLL_MS); });
      }, ms);
    }
    if (typeof document !== 'undefined' && document.addEventListener) {
      document.addEventListener('visibilitychange', function () { if (!document.hidden) schedule(0); });
    }

    var db = {
      kind: 'rest',
      collection: function (c) {
        return {
          doc: function (id) {
            return {
              set: function (rec) { return enqueue(function () { return send('POST', c, id, rec); }); },
              delete: function () { return enqueue(function () { return send('DELETE', c, id); }); }
            };
          },
          onSnapshot: function (next, err) {
            subs[c] = { next: next, err: err, first: true };
            schedule(0);
            return function () { delete subs[c]; };
          }
        };
      },
      reauth: function () { schedule(0); },
      onStatus: function (fn) { statusCb = fn; },
      onAuthLost: function (fn) { authLostCb = fn; }
    };

    // Is the backend really there? (connector.php answers JSON; setup.php has been run.)
    return fetch(url('tickets'), { headers: HDR, credentials: 'same-origin', cache: 'no-store' }).then(function (r) {
      var type = r.headers.get('Content-Type') || '';
      if (!r.ok || type.indexOf('json') < 0) return null;
      return r.json().then(function () { return db; });
    }).catch(function () { return null; });
  }

  window.makeRestDB = makeRestDB;
  window.__lvStable = stable;   // shared with app.js (same fingerprint rule)
})();

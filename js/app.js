const SEED = (() => {
    let tickets = [
        {
            id: 'SUR-3HN6V',
            who: 'Student',
            name: 'Angelica Navarro',
            email: 'a.navarro@student.laverdad.edu.ph',
            item: 'Cream Insulated Tumbler with Straw',
            cat: 'Accessories',
            where: 'Canteen, near the water station',
            when: '2026-11-02',
            time: '7:50 AM',
            more: 'Large cream tumbler with a handle and a straw lid. Slight scuff on the bottom.',
            photo: 'assets/images/item-photo-1.jpg',
            status: 'Stored',
            h: [['Pending Verification', 'Nov 2, 7:55 AM'], ['Verified', 'Nov 2, 8:10 AM'], ['Stored', 'Nov 2, 8:15 AM']]
        },
        {
            id: 'SUR-7RC2D',
            who: 'Faculty & Staff',
            name: 'Mr. D. Soriano',
            email: 'd.soriano@laverdad.edu.ph',
            item: 'Red, Blue & Black Racing Lanyard',
            cat: 'IDs & Cards',
            where: 'Room 212 hallway',
            when: '2026-11-01',
            time: '3:35 PM',
            more: 'Printed “Spirit of Racing” lanyard with a metal clip. No ID attached.',
            photo: 'assets/images/item-photo-2.jpg',
            status: 'Stored',
            h: [['Pending Verification', 'Nov 1, 3:40 PM'], ['Verified', 'Nov 1, 4:00 PM'], ['Stored', 'Nov 1, 4:05 PM']]
        },
        {
            id: 'SUR-9KB4T',
            who: 'Student',
            name: 'Jessa Villanueva',
            email: 'j.villanueva@student.laverdad.edu.ph',
            item: 'Olive Green Backpack',
            cat: 'Bags',
            where: 'Library, 1st floor reading area',
            when: '2026-10-31',
            time: '5:10 PM',
            more: 'Plain olive/khaki backpack with a front pocket and a side bottle pocket. Contents not checked.',
            photo: 'assets/images/item-photo-3.jpg',
            status: 'Stored',
            h: [['Pending Verification', 'Oct 31, 5:15 PM'], ['Verified', 'Oct 31, 5:30 PM'], ['Stored', 'Oct 31, 5:35 PM']]
        },
        {
            id: 'SUR-2MX8Q',
            who: 'Guest',
            name: 'Visitor (parent)',
            email: '',
            item: 'White Handkerchief with Lace Border',
            cat: 'Accessories',
            where: 'Gate 1 guard post',
            when: '2026-10-30',
            time: '11:25 AM',
            more: 'White linen handkerchief with an openwork border, folded. Slightly yellowed at one corner.',
            photo: 'assets/images/item-photo-4.jpg',
            status: 'Stored',
            h: [['Pending Verification', 'Oct 30, 11:30 AM'], ['Verified', 'Oct 30, 11:50 AM'], ['Stored', 'Oct 30, 11:55 AM']]
        },
        {
            id: 'SUR-5GW1L',
            who: 'Faculty & Staff',
            name: 'Prof. L. Cruz',
            email: 'l.cruz@laverdad.edu.ph',
            item: 'Black Wireless Earbuds with Case',
            cat: 'Gadgets',
            where: 'Room 105',
            when: '2026-11-02',
            time: '1:20 PM',
            more: 'Black ear-hook earbuds in an oval charging case with a braided cord attached.',
            photo: 'assets/images/item-photo-5.jpg',
            status: 'Stored',
            h: [['Pending Verification', 'Nov 2, 1:25 PM'], ['Verified', 'Nov 2, 1:45 PM'], ['Stored', 'Nov 2, 1:50 PM']]
        },
        {
            id: 'SUR-9XA3M',
            who: 'Faculty & Staff',
            name: 'Prof. R. Dizon',
            email: 'r.dizon@laverdad.edu.ph',
            item: 'Wireless Earbuds Case',
            cat: 'Gadgets',
            where: 'Canteen',
            when: '2026-10-29',
            time: '12:05 PM',
            more: 'White case, scratch on lid',
            status: 'Returned',
            h: [['Pending Verification', 'Oct 29, 12:10 PM'], ['Verified', 'Oct 29, 12:40 PM'], ['Stored', 'Oct 29, 1:00 PM'], ['Returned', 'Oct 29, 4:05 PM']]
        },
        {
            id: 'SUR-7LP0D',
            who: 'Guest',
            name: 'Anonymous visitor',
            email: '',
            item: 'Keys with Green Lanyard',
            cat: 'Accessories',
            where: 'Chapel',
            when: '2026-10-30',
            time: '9:30 AM',
            more: '3 keys',
            status: 'Pending Verification',
            h: [['Pending Verification', 'Oct 30, 9:35 AM']]
        },
        {
            id: 'SUR-2QW8N',
            who: 'Student',
            name: 'Paolo Reyes',
            email: 'p.reyes@student.laverdad.edu.ph',
            item: 'Gray Hoodie',
            cat: 'Clothing',
            where: 'Room 304',
            when: '2026-10-30',
            time: '4:40 PM',
            more: 'Size M',
            status: 'Pending Verification',
            h: [['Pending Verification', 'Oct 30, 4:45 PM']]
        },
        {
            id: 'SUR-1ZZ6B',
            who: 'Guest',
            name: 'Visitor',
            email: '',
            item: 'Unknown phone charger',
            cat: 'Others',
            where: 'Gate 1',
            when: '2026-10-27',
            time: '8:00 AM',
            more: 'No photo match',
            status: 'Rejected',
            h: [['Pending Verification', 'Oct 27, 8:05 AM'], ['Rejected', 'Oct 27, 8:30 AM']]
        }
    ];
    let claims = [
        {
            id: 'CLM-6BV4X',
            tid: 'SUR-9XA3M',
            who: 'Student',
            name: 'Jose Ramos',
            idno: '21-00410XYZ',
            email: 'j.ramos@student.laverdad.edu.ph',
            ev: 'Serial number matches my box photo.',
            status: 'Released',
            time: 'Oct 29, 4:05 PM'
        }
    ];
    let chats = [
        {
            id: 'SUP-A1B2C',
            name: 'Kim Garcia',
            email: 'k.garcia@student.laverdad.edu.ph',
            m: [['u', 'Hi, I lost a black umbrella near the gym. Is it listed?']]
        },
        {
            id: 'SUP-D3E4F',
            name: 'Leo Tan',
            email: 'l.tan@student.laverdad.edu.ph',
            m: [['u', 'Pwede po ba magtanong, may nakita po bang ID sa Gate 1?'], ['g', 'Hello Leo! Sige po, titingnan ko.']]
        }
    ];
    let notifs = [
        {
            k: 'surrender',
            ref: 'SUR-7LP0D',
            t: 'New surrender report: Keys with Green Lanyard',
            time: 'Oct 30, 9:35 AM',
            u: 1
        },
        {
            k: 'chat',
            ref: 'SUP-A1B2C',
            t: 'Chat inquiry from Kim Garcia',
            time: 'Oct 31, 8:02 AM',
            u: 1
        }
    ];
    return {
        tickets,
        claims,
        chats,
        notifs
    };
})();
let D = JSON.parse(JSON.stringify(SEED));
let dbRef = null;
try {
    const x = JSON.parse(localStorage.getItem('lvlf3') || 'null');
    if (x && x.tickets)
        D = x;
} catch (e) { }
{
    const gone = ['SUR-4F2KQ', 'SUR-5TT1Z', 'SUR-8WB2C'];
    const gc = ['CLM-3KD7P', 'CLM-8MQ2R'];
    D.tickets = D.tickets.filter(t => !gone.includes(t.id));
    D.claims = D.claims.filter(c => !gc.includes(c.id) && !gone.includes(c.tid));
    D.notifs = D.notifs.filter(n => !gc.includes(n.ref) && !gone.includes(n.ref));
}
SEED.tickets.filter(t => ['SUR-3HN6V', 'SUR-7RC2D', 'SUR-9KB4T', 'SUR-2MX8Q', 'SUR-5GW1L'].includes(t.id)).forEach(t => {
    if (!D.tickets.some(x => x.id === t.id))
        D.tickets.unshift(JSON.parse(JSON.stringify(t)));
});
const nowS = () => {
    return new Date().toLocaleString([], {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

function store() {
    try {
        localStorage.setItem('lvlf3', JSON.stringify(D));
    } catch (e) { }
}

const COLS = ['tickets', 'claims', 'chats', 'notifs', 'logs'];

const LAST = {
    tickets: {},
    claims: {},
    chats: {},
    notifs: {},
    logs: {}
};
let DBC = null;
let R = false;
let ready = 0;
let pt;
const sig = r => {
    const x = { ...r };
    delete x._u;
    return window.__lvStable ? window.__lvStable(x) : JSON.stringify(x);   // sorted keys: same record = same fingerprint
};

function norm() {
    D.logs = D.logs || [];
    D.claims.filter(c => c.status === 'Released').forEach(c => {
        const t = D.tickets.find(x => x.id === c.tid);
        if (t && t.status === 'Stored') {
            t.status = 'Returned';
            (t.h = t.h || []).push(['Returned', c.time || '']);
        }
    });
    D.logs.sort((a, b) => b.ts - a.ts);
    D.notifs.forEach((n, i) => {
        n.id = n.id || 'N-' + n.k + '-' + n.ref;
        n.ts = n.ts || 1000 - i;
    });
    D.notifs.sort((a, b) => b.ts - a.ts);
}

function persist() {
    D.ts = Date.now();
    store();
    if (!DBC || !R)
        return;
    const ops = [];
    COLS.forEach(c => {
        const cur = {};
        D[c].forEach(r => {
            cur[r.id] = 1;
            const g = sig(r);
            if (LAST[c][r.id] !== g) {
                r._u = Date.now();
                LAST[c][r.id] = g;
                ops.push(DBC[c].doc(r.id).set(JSON.parse(JSON.stringify(r))));
            }
        });
        Object.keys(LAST[c]).forEach(id => {
            if (!cur[id]) {
                delete LAST[c][id];
                ops.push(DBC[c].doc(id).delete());
            }
        });
    });
    if (ops.length) {
        pill('saving');
        Promise.all(ops).then(() => pill('ok')).catch(() => pill('local'));
    }
}

function listen() {
    COLS.forEach(c => {
        let first = true;
        DBC[c].onSnapshot(sn => {
            let ch = false;
            sn.docChanges().forEach(x => {
                const id = x.doc.id;
                const i = D[c].findIndex(q => q.id === id);
                if (x.type === 'removed') {
                    if (i >= 0) {
                        D[c].splice(i, 1);
                        ch = true;
                    }
                    delete LAST[c][id];
                    return;
                }
                const r = x.doc.data();
                if (i < 0) {
                    D[c].push(r);
                    ch = true;
                } else if ((r._u || 0) >= (D[c][i]._u || 0) && sig(r) !== sig(D[c][i])) {   // >= : after a guard signs in, the full record has the same stamp as the redacted one a visitor saw
                    if (c === 'notifs' && route() === 'guard' && !D.notifs[i].u && r.u)
                        gToast('New: ' + r.t);
                    D[c][i] = r;
                    ch = true;
                }
                if (i < 0 && c === 'notifs' && r.u && route() === 'guard')
                    gToast('New: ' + r.t);
                LAST[c][id] = sig(r);
            });
            if (first) {
                first = false;
                ready++;
            }
            if (ch) {
                norm();
                store();
                draw();
            }
            if (ready === 5 && !R) {
                R = true;
                persist();
                pill('ok');
            }
        }, () => pill('local'));
    });
}

function logA(act, ref) {
    D.logs.unshift({
        id: 'L' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
        ts: Date.now(),
        who: A.me || 'Guard',
        act,
        ref,
        time: nowS()
    });
}

function commit() {
    persist();
    draw();
}

function addN(k, ref, t) {
    D.notifs.unshift({
        id: 'N' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
        ts: Date.now(),
        k,
        ref,
        t,
        time: nowS(),
        u: 1
    });
}

async function exportCsv() {
    const q = v => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
    const T = id => D.tickets.find(t => t.id === id) || {};
    const rows = [['Type', 'Ticket', 'Item', 'Category', 'Reporter', 'Reporter type', 'Found at', 'Date found', 'Status', 'Claimant', 'ID number', 'Last handled by']];
    D.tickets.forEach(t => {
        const c = D.claims.find(c => c.tid === t.id && c.status !== 'Rejected');
        rows.push(['Surrender', t.id, t.item, t.cat, t.name, t.who, t.where, t.when, t.status, c ? c.name : '', c ? c.idno : '', ((t.h || []).slice(-1)[0] || [])[2] || '']);
    });
    D.claims.forEach(c => {
        return rows.push(['Claim', c.id, T(c.tid).item, '', '', '', '', '', c.status, c.name, c.idno, ((c.h || []).slice(-1)[0] || [])[2] || '']);
    });
    try {
        const dl = window.claude && await claude.use('downloads');
        if (!dl)
            throw 0;
        await dl.save({ filename: 'lv-lost-and-found-records.csv', data: rows.map(r => r.map(q).join(',')).join('\n') });
        logA('Exported records', 'Items');
        commit();
        gToast('Records exported');
    } catch (e) {
        gToast('Export isn’t available in this view');
    }
}

function shrink(src, cb) {
    const i = new Image();
    i.onload = () => {
        const s = Math.min(1, 360 / Math.max(i.width, i.height));
        const c = document.createElement('canvas');
        c.width = Math.round(i.width * s);
        c.height = Math.round(i.height * s);
        c.getContext('2d').drawImage(i, 0, 0, c.width, c.height);
        cb(c.toDataURL('image/jpeg', .6));
    };
    i.onerror = () => cb('');
    i.src = src;
}

function apply(x) {
    if (!x || !x.tickets || !x.ts || x.ts <= (D.ts || 0))
        return;
    if (route() === 'guard' && x.notifs.length > D.notifs.length)
        gToast('New: ' + x.notifs[0].t);
    D = x;
    store();
    draw();
}

const $ = s => document.querySelector(s);
const esc = t => {
    return String(t == null ? '' : t).replace(/[&<>"']/g, c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[c]));
};

const ESV = p => {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:1em;height:1em;vertical-align:-.12em">${p}</svg>`;
};

const E = {
    Bags: ESV('<path d="M7 8V6a5 5 0 0 1 10 0v2"/><rect x="4" y="8" width="16" height="13" rx="3"/><path d="M9 14h6"/>'),
    Gadgets: ESV('<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>'),
    'IDs & Cards': ESV('<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.5-1.8 5.5-1.8 6 0M14 10h4M14 13h3"/>'),
    Clothing: ESV('<path d="M8 4l-5 4 3 3 2-1v10h8V10l2 1 3-3-5-4a4 4 0 0 1-8 0z"/>'),
    Accessories: ESV('<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l2 2M13.5 9.5l2 2"/>'),
    Others: ESV('<path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7M12 11v10"/>')
};

const CATS = Object.keys(E);

const TS = ['Pending Verification', 'Verified', 'Stored', 'Returned', 'Rejected'];

const CS = ['Pending Review', 'Approved', 'Rejected', 'Released'];

const BD = {
    'Pending Verification': 'w',
    'Verified': 'i',
    'Stored': 'g',
    'Rejected': 'm2',
    'Pending Review': 'w',
    'Approved': 'i',
    'Released': 'g',
    'Returned': 'g'
};

const STR = {
    'Pending Verification': '#D4A21F',
    Verified: '#2F76BD',
    Stored: '#1E7B3A',
    Returned: '#1B5E35',
    Rejected: '#8a94a3'
};
const bd = (c, t) => `<span class="bd ${c}">${t}</span>`;
const sbd = s => bd(BD[s] || 'm2', esc(s));

const LOGO = "assets/logo.png";
const lgo = n => {
    return `<img class="lgo" src="${LOGO}" alt="La Verdad Christian College seal" style="width:${n}px;height:${n}px">`;
};

const SYN = {
    conn: 'Connecting',
    saving: 'Saving',
    ok: 'Synced',
    local: 'Local mode'
};

const S = {
    page: 'landing',
    plat: 'app',
    tab: 'home',
    view: null,
    me: null,
    role: null,
    cat: 'All',
    q: '',
    photo: {},
    ticket: null,
    tc: 0,
    tk: '',
    err: '',
    sync: 'conn',
    draft: {},
    sh: null,
    cid: null
};
try {
    S.cid = localStorage.getItem('lvchat');
} catch (e) { }

const A = {
    ok: false,
    me: '',
    page: 'dash',
    view: null,
    f: {
        q: '',
        st: '',
        who: '',
        cat: '',
        d: ''
    },
    cf: { q: '', st: '' },
    lq: '',
    lw: '',
    gq: '',
    vw: 'l',
    chat: null,
    chk: [0, 0, 0],
    cc: [0, 0],
    dd: false,
    err: ''
};

const GUARDS = [
    {
        u: 'guard.ramos',
        n: 'Guard Ramos',
        p: 'Ramos@LV2026'
    },
    {
        u: 'guard.bautista',
        n: 'Guard Bautista',
        p: 'Bautista@LV2026'
    }
];

const ROLES = ['Student', 'Faculty & Staff', 'Guest'];
const age = d => Math.max(0, Math.floor((Date.now() - new Date(d)) / 864e5));

const EM_STU = /^[a-z0-9]+([._-][a-z0-9]+)*@student\.laverdad\.edu\.ph$/i;

const EM_STF = /^[a-z0-9]+([._-][a-z0-9]+)*@laverdad\.edu\.ph$/i;
const emKind = e => {
    e = String(e || '').trim();
    return EM_STU.test(e) ? 'student' : EM_STF.test(e) ? 'staff' : null;
};
const lvOk = e => emKind(e) !== null;
const emOk = (r, e) => r === 0 ? emKind(e) === 'student' : r === 1 ? emKind(e) === 'staff' : false;
const emHint = r => {
    return r === 0 ? 'name@student.laverdad.edu.ph' : r === 1 ? 'name@laverdad.edu.ph' : 'name@student.laverdad.edu.ph or name@laverdad.edu.ph';
};
const emErr = r => {
    return r === 0 ? 'Students must use their official student email: name@student.laverdad.edu.ph.' : r === 1 ? 'Faculty & staff must use their official email: name@laverdad.edu.ph.' : 'Use your official LV email: name@student.laverdad.edu.ph (students) or name@laverdad.edu.ph (faculty & staff).';
};

const ID_STU = /^\d{2}-\d{5}[A-Z]{3}$/;

const ID_STF = /^\d{3}-\d{4}$/;
const idOk = (r, v) => r === 0 ? ID_STU.test(v) : r === 1 ? ID_STF.test(v) : false;
const idHint = r => r === 0 ? '01-23456ABC' : '123-4567';
const idFmt = r => r === 0 ? 'XX-XXXXXABC' : 'XXX-XXXX';
const idErr = r => {
    return r === 0 ? 'Student ID number must follow the format XX-XXXXXABC (e.g. 01-23456ABC).' : 'Faculty & staff ID number must follow the format XXX-XXXX (e.g. 123-4567).';
};
const cRole = () => S.crole === 0 || S.crole === 1 ? S.crole : null;
const route = () => S.plat === 'web' ? 'guard' : 'pub';

const T = id => D.tickets.find(t => t.id === id);

const C = id => D.claims.find(c => c.id === id);
const items = () => D.tickets.filter(t => t.status === 'Stored');
const held = t => D.claims.some(c => c.tid === t.id && c.status !== 'Rejected');
const ref = p => p + '-' + Math.random().toString(36).slice(2, 7).toUpperCase();

function gToast(t) {
    const d = document.createElement('div');
    d.className = 'toast';
    d.setAttribute('role', 'status');
    d.textContent = t;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 2400);
}

function pill(k) {
    S.sync = k;
    document.querySelectorAll('.cn,.sy').forEach(e => {
        e.textContent = SYN[k];
        e.classList.toggle('off', k === 'local');
    });
}
const keep = () => {
    return document.querySelectorAll('#app input[id],#app textarea[id],#app select[id]').forEach(i => {
        S.draft[i.id] = i.type === 'checkbox' ? i.checked : i.value;
    });
};
const dv = id => S.draft[id] === undefined || S.draft[id] === false ? '' : S.draft[id];
const dc = id => S.draft[id] ? 'checked' : '';
const opt = (a, v, all) => {
    return `<option value="">${all}</option>` + a.map(x => `<option ${v === x ? 'selected' : ''}>${x}</option>`).join('');
};

function render() {
    keep();
    const mb = $('.mb');
    const st = mb ? mb.scrollTop : 0;
    const pg = S.page === 'landing' ? landing() : S.page === 'login' ? wLogin() : (S.plat === 'app' ? mobile() : web());
    const sw = S.page !== 'landing' ? `<button class="swp" onclick="launch('${S.plat === 'app' ? 'web' : 'app'}')">${S.plat === 'app' ? 'Switch to Guard Portal' : 'Switch to mobile app'}</button>` : '';
    $('#app').innerHTML = pg + sw;
    const m2 = $('.mb');
    if (m2)
        m2.scrollTop = st;
    pill(S.sync);
}
const draw = render;

function launch(p) {
    keep();
    S.plat = p;
    S.view = null;
    A.view = null;
    S.err = '';
    A.err = '';
    S.sh = null;
    S.tab = 'home';
    S.page = p === 'app' ? 'app' : (A.ok ? 'app' : 'login');
    render();
    scrollTo(0, 0);
}
const jump = id => {
    const e = document.getElementById(id);
    e && e.scrollIntoView({ behavior: 'smooth' });
};
/* ===== landing ===== */

function landing() {
    const step = (n, t, d) => `<div class="stp"><span>${n}</span><div><h3>${t}</h3><p>${d}</p></div></div>`;
    const mock = [['Black Backpack', 'g', 'Available'], ['Earbuds Case', 'g', 'Available'], ['Calculator', 'w', 'Claim pending'], ['Gray Hoodie', 'g', 'Available']].map(r => `<div class="r"><span>${r[0]}</span>${bd(r[1], r[2])}</div>`).join('');
    return `<header class="nv"><div class="lg">${lgo(36)}<span>Lost &amp; Found<small class="lgs">La Verdad Christian College</small></span></div><nav><a onclick="jump('how')">How it works</a><a onclick="jump('who')">Who it’s for</a><a onclick="jump('priv')">Privacy</a></nav><div class="acts"><button class="b" onclick="launch('web')">Guard Portal</button><button class="b p" onclick="launch('app')">Open the app</button></div></header>
<section class="hr"><div><span class="pill">${lgo(26)}La Verdad Christian College · Apalit, Pampanga</span><h1>Check the cabinet from your phone</h1><p>See whether your lost item has been turned in, claim it online and skip the repeat trips. Guards keep one record from report to release.</p><div class="acts"><button class="b p big" onclick="launch('app')">Open the mobile app</button><button class="b big" onclick="launch('web')">Open the Guard Portal</button></div><div class="tr"><span>No repeat trips</span><span>Every item tracked</span><span>Claims verified by a guard</span></div></div>
<div class="ph"><div class="t">Check &amp; Claim</div>${mock}</div></section>
<section class="sc alt" id="how"><h2>How it works</h2><p class="sub">From the moment an item is found to the moment it is handed back.</p><div class="stps">${step(1, 'Surrender', 'Whoever finds an item fills in a short form with a photo and hands it to the guard.')}${step(2, 'Verify &amp; store', 'The guard checks the item against the ticket and stores it in the cabinet.')}${step(3, 'Check &amp; claim', 'Owners browse the list, tap Claim Now and give proof of ownership.')}${step(4, 'Release', 'The guard approves the claim and hands over the item. The ticket is marked Returned.')}</div></section>
<section class="sc" id="who"><h2>One system, three ways in</h2><p class="sub">Everyone uses the same records.</p><div class="cols"><div class="col"><h3>Students, faculty &amp; staff</h3><p>Check items, report found items, claim yours and track every ticket with your LV email.</p>${bd('g', 'Mobile app')}</div><div class="col"><h3>Guests</h3><p>Visitors can surrender a found item without an email address.</p>${bd('i', 'No email needed')}</div><div class="col"><h3>Security guards</h3><p>Verify tickets, review claims, answer chats and keep a record of every action.</p>${bd('w', 'Guard Portal')}</div></div></section>
<section class="sc alt" id="priv"><h2>Privacy</h2><p class="sub">Details are used only to manage lost and found reports. ID numbers are visible to guards only.</p></section>
<div class="foot">La Verdad Christian College · Lost &amp; Found</div>`;
}
/* ===== mobile app (students, faculty & staff, guests) ===== */

const SV = p => {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
};

const IC = {
    home: SV('<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>'),
    sur: SV('<path d="M12 3v10"/><path d="M8 9l4 4 4-4"/><path d="M4 14v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5"/>'),
    claim: SV('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/><path d="M8.5 11l2 2 3.5-4"/>'),
    track: SV('<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9z"/><path d="M9 12h6M9 16h4"/>'),
    chat: SV('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>'),
    cam: SV('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'),
    mail: SV('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
    bell: SV('<path d="M6 9a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7"/><path d="M10 20a2 2 0 0 0 4 0"/>'),
    box: SV('<path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7M12 11v10"/>')
};
S.av = 'all';
S.so = 'new';
const phone = h => `<div class="stg"><div class="phone">${h}</div></div>`;
const mhead = (title, back) => {
    return `<div class="mh">${back ? `<button class="bk" onclick="${back}" aria-label="Back">‹</button>` : lgo(28)}<b>${title}</b></div>`;
};
const goHome = () => {
    $('#app').innerHTML = '';
    S.tab = 'home';
    S.view = null;
    S.tc = 0;
    S.err = '';
    S.sh = null;
    S.mail = null;
    S.draft = {};
    S.photo = {};
    S.role = null;
    S.ticket = null;
    render();
    scrollTo(0, 0);
};
const setTab = k => {
    keep();
    S.tab = k;
    S.view = null;
    S.err = '';
    S.sh = null;
    S.mail = null;
    render();
    const m = $('.mb');
    if (m)
        m.scrollTop = 0;
};
const setView = (t, id) => {
    keep();
    S.view = t ? { t, id } : null;
    S.err = '';
    S.sh = null;
    S.mail = null;
    render();
    const m = $('.mb');
    if (m)
        m.scrollTop = 0;
};
const scr = (title, body, o = {}) => {
    return phone(`${mhead(title, o.back || 'goHome()')}<div class="mb">${body}</div>${o.foot ? `<div class="mact">${o.foot}</div>` : o.acts ? `<div class="mact rv">${o.acts}</div>` : ''}${S.sh ? confirmSheet() : ''}${S.mail ? mailModal() : ''}`);
};
const curRole = () => S.role !== null && S.role !== undefined ? S.role : (S.prof ? S.prof.r : null);
const errb = () => S.err ? `<div class="al d" role="alert">${S.err}</div>` : '';
const nowLocal = () => new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 16);
/* --- landing: choose Surrender or Check & Claim --- */
const tkTs = t => {
    const m = String(t.time || '').match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
    let h = m ? +m[1] : 0;
    if (m && m[3]) {
        h = h % 12 + (/pm/i.test(m[3]) ? 12 : 0);
    }
    const d = new Date((t.when || '') + 'T00:00:00');
    return isNaN(d) ? 0 : d.getTime() + (m ? h * 36e5 + (+m[2]) * 6e4 : 0);
};
const latestTk = () => D.tickets.filter(t => t.status !== 'Rejected').reduce((a, t) => !a || tkTs(t) > tkTs(a) ? t : a, null);
const fmtD = d => {
    const x = new Date((d || '') + 'T00:00:00');
    return isNaN(x) ? (d || '') : x.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
};

function mHome() {
    const n = items().length;
    const lt = latestTk();
    const app = (ic, col, t, sub, go) => {
        return `<button class="hmi" onclick="${go}"><span class="hic" style="background:${col}">${IC[ic]}</span><span>${t}<small>${sub}</small></span></button>`;
    };
    return phone(`<div class="mh">${lgo(28)}<b>Lost &amp; Found</b></div><div class="mb mhome"><div class="hm c"><div class="hmh"><h1>How can we help you today?</h1><p>La Verdad Christian College</p></div><div class="hgrid two">${app('sur', '#00A09D', 'Surrender', 'I found an item', "setView('sur')")}${app('claim', '#F06050', 'Check &amp; Claim', 'I lost something', "setTab('browse')")}</div></div>
<div class="sm3 sm2"><button onclick="setTab('browse')"><strong>${n}</strong><small>Items in the cabinet</small></button><button onclick="${lt && lt.status === 'Stored' ? `setView('item','${lt.id}')` : `setTab('browse')`}"><strong style="font-size:15px">${lt ? esc(lt.item) : 'None'}</strong><small>${lt ? 'Latest item · ' + fmtD(lt.when) : 'No items yet'}</small></button></div>
<div class="act"><button onclick="setTab('track')"><div class="ar"><b>Track a ticket</b><small>Check the status of a surrender or claim</small></div><span class="mt">›</span></button></div></div>`);
}
/* --- real-time camera capture --- */
const capBox = (k, l) => {
    return `<div class="pbx">${S.photo[k] ? `<img src="${S.photo[k]}" alt="Captured photo">` : `<div>${IC.cam}<p>${l}</p></div>`}</div><div class="capa"><button type="button" class="b ${S.photo[k] ? '' : 'p'}" onclick="openCam('${k}')">${S.photo[k] ? 'Retake photo' : 'Open camera'}</button>${S.photo[k] ? `<button type="button" class="b" onclick="S.photo['${k}']=null;render()">Remove</button>` : ''}</div><input id="f_${k}" type="file" accept="image/*" capture="environment" hidden onchange="pick('${k}',this)">`;
};

function pick(k, el) {
    const f = el.files[0];
    if (!f)
        return;
    const r = new FileReader();
    r.onload = () => shrink(r.result, u => {
        S.photo[k] = u;
        render();
    });
    r.readAsDataURL(f);
}

async function openCam(k) {
    const fb = () => {
        const i = document.getElementById('f_' + k);
        i && i.click();
    };
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
        return fb();
    let st;
    try {
        st = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false });
    } catch (e) {
        gToast('Camera unavailable. Opening your device camera');
        return fb();
    }
    const o = document.createElement('div');
    o.className = 'camov';
    o.innerHTML = '<video autoplay playsinline muted></video><div class="camb"><button class="b" id="cx">Cancel</button><button class="b p" id="cs">Capture</button></div>';
    (document.querySelector('.phone') || document.body).appendChild(o);
    const v = o.querySelector('video');
    v.srcObject = st;
    const stop = () => {
        st.getTracks().forEach(t => t.stop());
        o.remove();
    };
    o.querySelector('#cx').onclick = stop;
    o.querySelector('#cs').onclick = () => {
        if (!v.videoWidth)
            return;
        const c = document.createElement('canvas');
        c.width = v.videoWidth;
        c.height = v.videoHeight;
        c.getContext('2d').drawImage(v, 0, 0);
        const u = c.toDataURL('image/jpeg', .9);
        stop();
        shrink(u, x => {
            S.photo[k] = x;
            render();
        });
    };
}
/* --- surrender ticket form --- */

function mSur() {
    const p = S.prof || {};
    const r = curRole();
    return scr('Surrender an item', `<div class="al i">Fill in the ticket, then hand the item to the security guard.</div>${errb()}
<h3 class="grp">Reporter</h3><label>I am a</label><div class="seg">${[0, 1, 2].map(i => {
        return `<button aria-pressed="${r === i}" onclick="keep();S.role=${i};S.err='';render()">${ROLES[i]}</button>`;
    }).join('')}</div>
<div class="fgrid"><div><label for="s_name">Full name</label><input class="mi" id="s_name" value="${esc(dv('s_name') || p.name || '')}" placeholder="Juan Dela Cruz"></div>${r === 2 ? '<div class="note">Guests do not need an email.</div>' : r === null ? '<div class="note">Choose your reporter type first.</div>' : `<div><label for="s_email">${r === 0 ? 'Student email' : 'Faculty &amp; staff email'}</label><input class="mi" id="s_email" type="email" value="${esc(dv('s_email') || p.email || '')}" placeholder="${emHint(r)}"></div>`}</div>
<h3 class="grp">Item details</h3><div class="fgrid"><div><label for="s_cat">Type</label><select class="mi" id="s_cat">${CATS.map(c => `<option ${dv('s_cat') === c ? 'selected' : ''}>${c}</option>`).join('')}</select></div>
<div><label for="s_item">Item</label><input class="mi" id="s_item" value="${esc(dv('s_item'))}" placeholder="e.g. Red umbrella"></div>
<div><label for="s_where">Where did you find it?</label><input class="mi" id="s_where" value="${esc(dv('s_where'))}" placeholder="e.g. Canteen, near the stairs"></div>
<div><label for="s_when">When did you find it?</label><input class="mi" id="s_when" type="datetime-local" value="${esc(dv('s_when') || nowLocal())}"></div>
<div class="full"><label for="s_more">Other details</label><textarea class="mi" id="s_more" rows="3" placeholder="Color, marks, contents…">${esc(dv('s_more'))}</textarea></div></div>
<h3 class="grp">Photo of the item</h3>${capBox('s', 'Take a photo of the item')}
<h3 class="grp">Data privacy</h3><label class="ck"><input type="checkbox" id="s_dp" ${dc('s_dp')}><span><b>Data privacy.</b> I agree that the school may store these details to manage this report.</span></label>`, {
        sheet: 1,
        back: 'goHome()',
        acts: `<button class="b p" onclick="subSur()">Submit report</button><button class="b" onclick="goHome()">Cancel</button>`
    });
}

function subSur() {
    keep();
    const d = S.draft;
    const r = curRole();
    const nm = (d.s_name || '').trim();
    const em = (d.s_email || '').trim();
    const it = (d.s_item || '').trim();
    const w = (d.s_where || '').trim();
    const dt = d.s_when || '';
    let e = '';
    if (r === null)
        e = 'Choose whether you are a student, faculty & staff or a guest.';
    else if (!nm)
        e = 'Enter your full name.';
    else if (r !== 2 && !emOk(r, em))
        e = emErr(r);
    else if (!it || !w || !dt)
        e = 'Fill in the item, where and when you found it.';
    else if (!S.photo.s)
        e = 'Take a photo of the item.';
    else if (!d.s_dp)
        e = 'Please confirm the data privacy notice.';
    if (e) {
        S.err = e;
        render();
        return scrollTo(0, 0);
    }
    const id = ref('SUR');
    const mail = r === 2 ? '' : em;
    const cat = d.s_cat || CATS[0];
    D.tickets.unshift({
        id,
        who: ROLES[r],
        name: nm,
        email: mail,
        item: it,
        cat,
        where: w,
        when: dt.slice(0, 10),
        time: dt.slice(11),
        more: (d.s_more || '').trim(),
        photo: S.photo.s,
        status: 'Pending Verification',
        h: [['Pending Verification', nowS()]]
    });
    addN('surrender', id, 'New surrender report: ' + it);
    S.prof = {
        r,
        name: nm,
        email: mail
    };
    S.ticket = {
        id,
        title: 'Report submitted',
        sub: 'Hand the item to the security guard.',
        mail,
        rows: [['Reported by', nm + ' (' + ROLES[r] + ')'], ['Item', it + ' · ' + cat], ['Found at', w], ['Date found', dt.replace('T', ' ')]]
    };
    S.view = { t: 'done' };
    S.err = '';
    commit();
    scrollTo(0, 0);
}
/* --- ticket copy creation, then back to landing --- */

function mDone() {
    const t = S.ticket;
    if (!t)
        return mHome();
    return scr('Ticket created', `<div class="al i">${t.title}. ${t.sub}</div><div class="tkt"><small class="mt">Ticket number</small><b class="id">${t.id}</b>${t.rows.map(r => {
        return `<div class="mrow"><small>${r[0]}</small><b style="font-size:13px;text-align:right">${esc(r[1])}</b></div>`;
    }).join('')}</div>
<h3 class="grp">Get your ticket copy</h3><p class="mt" style="margin-top:0">Keep a copy of this ticket. You will return to the start when you are done.</p>
<div class="capa" style="flex-wrap:wrap"><button class="b p" ${t.mail ? '' : 'disabled'} onclick="tkDone('mail')">${t.mail ? 'Send copy to ' + esc(t.mail) : 'Email copy (LV email only)'}</button><button class="b" onclick="tkDone('copy')">Copy ticket details</button><button class="b" onclick="tkDone('done')">Done</button></div>${t.mail ? '' : '<p class="mt" style="font-size:12px">Guests have no email on file. Copy the details or take a screenshot.</p>'}`, { nt: 1 });
}

function tkDone(how) {
    const t = S.ticket;
    if (!t)
        return goHome();
    if (how === 'mail')
        gToast('Ticket copy sent to ' + t.mail);
    else if (how === 'copy') {
        const tx = t.id + '\n' + t.rows.map(r => r[0] + ': ' + r[1]).join('\n');
        try {
            navigator.clipboard.writeText(tx).catch(() => { });
        } catch (e) { }
        gToast('Ticket details copied');
    } else
        gToast('Thank you. Returning to the start');
    setTimeout(goHome, how === 'done' ? 500 : 1200);
}
/* --- Check & Claim: terms, homepage, claim --- */

function mTerms() {
    return scr('Check &amp; Claim', `<h3 style="margin-bottom:8px">Terms &amp; conditions</h3><div class="mc" style="cursor:default"><p style="margin-top:0">1. Only claim items that belong to you. False claims may be reported to Student Affairs.</p><p>2. Claims are open to students and faculty & staff. You will need proof of ownership and your ID number.</p><p>3. A claim is final only after a guard verifies it at the cabinet.</p><p style="margin-bottom:0">4. Unclaimed items are kept for a limited period set by the school.</p></div><label class="ck"><input type="checkbox" id="tcx" onchange="$('#tcb').disabled=!this.checked"><span>I have read and agree to the terms and conditions.</span></label><button id="tcb" class="b p big" disabled onclick="S.tc=1;render()">Continue</button>`, { sheet: 1, back: 'goHome()' });
}

function mBrowse() {
    const q = S.q.toLowerCase();
    let L = items().filter(t => {
        return (S.cat === 'All' || t.cat === S.cat) && (t.item + ' ' + t.more + ' ' + t.where + ' ' + t.cat).toLowerCase().includes(q) && (S.av !== 'avail' || !held(t));
    });
    L.sort((a, b) => S.so === 'old' ? (a.when > b.when ? 1 : -1) : (a.when < b.when ? 1 : -1));
    const card = t => {
        const h = held(t);
        return `<div class="pc"><button class="pcb" onclick="setView('item','${t.id}')"><div class="th2">${t.photo ? `<img src="${esc(t.photo)}" alt="">` : E[t.cat]}</div><div class="bb"><b>${esc(t.item)}</b><small>${esc(t.where)} · ${esc(t.when)}</small>${bd('m2', t.cat)} ${h ? bd('w', 'Claim pending') : bd('g', 'Available')}</div></button><div class="pcf"><button class="b p" ${h ? 'disabled' : ''} onclick="S.sh='${t.id}';render()">${h ? 'Claim pending' : 'Claim Now'}</button></div></div>`;
    };
    return scr('Found items', `<div class="flt2"><input class="mi" id="bq" style="flex:1;min-width:200px" value="${esc(S.q)}" placeholder="Search item, color, place…" oninput="S.q=this.value;const p=this.selectionStart;render();const n=$('#bq');n.focus();n.setSelectionRange(p,p)"><select class="mi" aria-label="Availability" onchange="S.av=this.value;render()"><option value="all" ${S.av === 'all' ? 'selected' : ''}>All items</option><option value="avail" ${S.av === 'avail' ? 'selected' : ''}>Available only</option></select><select class="mi" aria-label="Sort" onchange="S.so=this.value;render()"><option value="new" ${S.so === 'new' ? 'selected' : ''}>Newest first</option><option value="old" ${S.so === 'old' ? 'selected' : ''}>Oldest first</option></select></div>
<div class="chp">${['All', ...CATS].map(c => `<button aria-pressed="${S.cat === c}" onclick="S.cat='${c}';render()">${c}</button>`).join('')}</div><p class="mt" style="margin:0 0 8px">${L.length} item${L.length === 1 ? '' : 's'} in the cabinet</p>
<div class="pg">${L.map(card).join('') || '<div class="mc" style="grid-column:1/-1;cursor:default"><b>No items match</b><small>Clear the filters or ask the security desk. Your item may not be listed yet.</small></div>'}</div>
<button class="mc" style="margin-top:14px" onclick="setTab('chat')"><b>Can’t find your item?</b><small>Chat with a security guard to check items that are not listed here.</small></button>`);
}

function mItem(v) {
    const t = T(v.id);
    if (!t || t.status !== 'Stored') {
        S.view = null;
        return mBrowse();
    }
    const h = held(t);
    const d = age(t.when);
    return scr('Item details', `<div class="pc" style="max-width:420px;cursor:default;margin-bottom:12px"><div class="th2" style="height:220px">${t.photo ? `<img src="${esc(t.photo)}" alt="${esc(t.item)}">` : E[t.cat]}</div></div><h2 style="margin:0 0 4px">${esc(t.item)}</h2><p class="mt" style="margin:0 0 10px">${t.id} · ${esc(t.cat)} ${h ? bd('w', 'Claim pending') : bd('g', 'Available')}</p>
<div class="mc" style="cursor:default;max-width:520px"><div class="mrow"><small>Found at</small><b>${esc(t.where)}</b></div><div class="mrow"><small>Date found</small><b>${fmtD(t.when)}</b></div>${t.more ? `<div class="mrow"><small>Notes</small><b style="text-align:right">${esc(t.more)}</b></div>` : ''}<div class="mrow"><small>In the cabinet</small><b>${d === 0 ? 'Since today' : d + ' day' + (d === 1 ? '' : 's')}</b></div></div>`, { back: "setView(null)", acts: `<button class="b p" ${h ? 'disabled' : ''} onclick="S.sh='${t.id}';render()">${h ? 'Claim pending' : 'Claim Now'}</button><button class="b" onclick="setView(null)">Back to items</button>` });
}

function confirmSheet() {
    const t = T(S.sh);
    return `<div class="sh"><div style="text-align:center"><div class="shi">${t ? (t.photo ? `<img src="${esc(t.photo)}" alt="" style="width:96px;height:96px;object-fit:cover;border-radius:6px">` : E[t.cat]) : ''}</div><h2 style="margin:6px 0 4px">Is this your item?</h2><p class="mt" style="margin:0">${t ? esc(t.item) + ' · found at ' + esc(t.where) : ''}</p><div style="display:flex;gap:8px;margin-top:16px;justify-content:center"><button class="b" onclick="S.sh=null;render()">No, keep browsing</button><button class="b p" onclick="const i=S.sh;S.photo.c=null;S.crole=null;S.sh=null;S.view={t:'claim',id:i};S.err='';render();scrollTo(0,0)">Yes, it’s mine</button></div></div></div>`;
}

function mClaim(v) {
    const t = T(v.id);
    if (!t) {
        S.view = null;
        return mBrowse();
    }
    const p = S.prof || {};
    const r = cRole();
    return scr('Claim ticket', `<div class="al i"><b>${esc(t.item)}</b> · ${t.id} · found at ${esc(t.where)}</div>${errb()}
<h3 class="grp">Claimant details</h3><label>I am a</label><div class="seg">${[0, 1].map(i => {
        return `<button aria-pressed="${r === i}" onclick="keep();if(S.crole!==${i}){S.draft.c_id='';S.draft.c_email=''}S.crole=${i};S.err='';render()">${ROLES[i]}</button>`;
    }).join('')}</div>
<div class="fgrid"><div><label for="c_name">Full name</label><input class="mi" id="c_name" value="${esc(dv('c_name') || p.name || '')}"></div>${r === null ? '<div class="note">Choose whether you are a student or faculty &amp; staff to continue.</div>' : `<div><label for="c_id">${r === 0 ? 'Student' : 'Faculty &amp; staff'} ID number <span class="mt" style="font-weight:400">(${idFmt(r)})</span></label><input class="mi" id="c_id" value="${esc(dv('c_id'))}" placeholder="e.g. ${idHint(r)}" maxlength="${r === 0 ? 11 : 8}" autocapitalize="characters" oninput="this.value=this.value.toUpperCase()"></div>
<div class="full"><label for="c_email">${r === 0 ? 'Student' : 'Faculty &amp; staff'} email</label><input class="mi" id="c_email" type="email" value="${esc(dv('c_email') || (p.r === r ? p.email : '') || '')}" placeholder="${emHint(r)}"></div>`}</div>
<h3 class="grp">Proof of ownership</h3><label for="c_ev">What makes it yours?</label><textarea class="mi" id="c_ev" rows="3" placeholder="What is inside, marks on it, when and where you lost it">${esc(dv('c_ev'))}</textarea>
<label>Photo proof <span class="mt" style="font-weight:400">(optional)</span></label>${capBox('c', 'Take a photo as proof')}`, {
        sheet: 1,
        back: `setView('item','${t.id}')`,
        acts: `<button class="b p" onclick="subClaim('${t.id}')">Submit claim</button><button class="b" onclick="setView('item','${t.id}')">Cancel</button>`
    });
}

function subClaim(tid) {
    keep();
    const d = S.draft;
    const r = cRole();
    const n = (d.c_name || '').trim();
    const id = (d.c_id || '').trim().toUpperCase();
    const em = (d.c_email || '').trim();
    const ev = (d.c_ev || '').trim();
    let e = '';
    if (r === null)
        e = 'Choose whether you are a student or faculty & staff.';
    else if (!n || !id)
        e = 'Enter your full name and ID number.';
    else if (!idOk(r, id))
        e = idErr(r);
    else if (!emOk(r, em))
        e = emErr(r);
    else if (ev.length < 10)
        e = 'Describe what makes the item yours (at least 10 characters).';
    if (e) {
        S.err = e;
        render();
        return scrollTo(0, 0);
    }
    const t = T(tid);
    if (!t || t.status !== 'Stored' || held(t)) {
        S.draft = {};
        S.view = null;
        S.err = '';
        gToast('That item is no longer available to claim');
        return render();
    }
    const cid = ref('CLM');
    D.claims.unshift({
        id: cid,
        tid,
        who: ROLES[r],
        name: n,
        idno: id,
        email: em,
        ev,
        photo: S.photo.c || '',
        status: 'Pending Review',
        time: nowS(),
        h: [['Pending Review', nowS()]]
    });
    addN('claim', cid, 'New claim request for ' + t.item);
    S.prof = {
        r,
        name: n,
        email: em
    };
    S.ticket = {
        id: cid,
        title: 'Claim submitted',
        sub: 'Bring your ID to the cabinet so the guard can verify your claim.',
        mail: em,
        rows: [['Claimant', n + ' (' + ROLES[r] + ')'], ['ID number', id], ['Item', t.item + ' (' + t.id + ')'], ['Email', em]]
    };
    S.draft = {};
    S.view = { t: 'done' };
    S.err = '';
    commit();
    scrollTo(0, 0);
}

const TM = {
    'Pending Verification': 'Hand the item to the security guard so it can be verified.',
    Verified: 'The guard verified the item and will store it shortly.',
    Stored: 'Stored in the cabinet. Owners can now claim it under Check & Claim.',
    Returned: 'The item was returned to its owner.',
    Rejected: 'This report was not accepted. Visit the security desk for details.'
};

const CM = {
    'Pending Review': 'A guard will review your claim.',
    Approved: 'Approved. Bring your ID to the cabinet to pick up the item.',
    Released: 'Item handed over. This claim is complete.',
    Rejected: 'This claim was not approved. Visit the security desk for details.'
};

function mTrack() {
    const q = S.tk.trim().toUpperCase();
    const t = T(q);
    const c = C(q);
    let r = '';
    if (t) {
        const stp = t.status === 'Rejected' ? ['Pending Verification', 'Rejected'] : ['Pending Verification', 'Verified', 'Stored', 'Returned'];
        r = `<div class="sheet"><h3>${t.id} · Surrender</h3><p class="mt" style="margin-top:0">${esc(t.item)}</p>${sbar(stp, stp.indexOf(t.status))}<p class="mt">${TM[t.status] || ''}</p>${hist(t.h)}</div>`;
    } else if (c) {
        const ti = T(c.tid) || { item: 'item' };
        const stp = c.status === 'Rejected' ? ['Pending Review', 'Rejected'] : ['Pending Review', 'Approved', 'Released'];
        r = `<div class="sheet"><h3>${c.id} · Claim</h3><p class="mt" style="margin-top:0">${esc(ti.item)}</p>${sbar(stp, stp.indexOf(c.status))}<p class="mt">${CM[c.status] || ''}</p>${hist(c.h)}</div>`;
    } else if (q)
        r = '<div class="al d">No ticket found with that number.</div>';
    const p = S.prof;
    const own = x => {
        return p && (p.email ? (x.email || '').toLowerCase() === p.email.toLowerCase() : x.name.toLowerCase() === p.name.toLowerCase());
    };
    const mine = p ? [...D.tickets.filter(own).map(x => [x.id, x.item, x.status]), ...D.claims.filter(own).map(x => [x.id, (T(x.tid) || {}).item, x.status])] : [];
    return scr('Track a ticket', `<div class="osheet" style="margin-bottom:12px"><label for="tk" style="margin-top:0">Ticket number</label><div class="flt2" style="margin:0"><input class="mi" id="tk" style="flex:1" value="${esc(S.tk)}" placeholder="SUR-XXXXX or CLM-XXXXX" onkeydown="if(event.key==='Enter')trk()"><button class="b p" onclick="trk()">Check status</button></div></div>${r}${mine.length ? `<h3 class="sec2" style="margin-top:16px">My tickets</h3><div class="act">${mine.map(m => {
        return `<button onclick="S.tk='${m[0]}';render()"><div class="ar"><b>${esc(m[1])}</b><small>${m[0]}</small></div>${sbd(m[2])}</button>`;
    }).join('')}</div>` : ''}`, { back: 'goHome()' });
}
const trk = () => {
    S.tk = ($('#tk') || {}).value || '';
    render();
};
/* --- chat support --- */

function mChat() {
    const c = D.chats.find(x => x.id === S.cid);
    if (!c)
        return scr('Chat support', `<p class="mt" style="margin-top:0">Ask a security guard about an item that is not listed. We email you a copy of your support ticket so you can continue later.</p>${errb()}<div class="fgrid"><div><label for="h_name">Name</label><input class="mi" id="h_name" value="${esc(dv('h_name') || (S.prof || {}).name || '')}"></div><div><label for="h_email">LV email</label><input class="mi" id="h_email" type="email" value="${esc(dv('h_email') || (S.prof || {}).email || '')}" placeholder="${emHint()}"></div></div><div class="capa"><button class="b p" onclick="startChat()">Start chat</button><button class="b" onclick="openMail()">Open my emailed ticket</button></div>`, { sheet: 1, back: 'goHome()' });
    return scr('Security desk', `<div class="al i">Support ticket <b>${c.id}</b> · a copy was sent to ${esc(c.email)}, so you can return to this chat anytime.</div><div class="sheet"><div class="msgs">${c.m.map(m => `<div class="bub ${m[0] === 'u' ? 'me' : ''}">${esc(m[1])}</div>`).join('')}</div></div><div class="capa"><button class="b" onclick="S.mail=mailFor(D.chats.find(x=>x.id===S.cid));render()">View email copy</button><button class="b" onclick="S.cid=null;try{localStorage.removeItem('lvchat')}catch(e){};gToast('Chat closed. Open your emailed ticket to continue');render()">Leave chat</button></div>`, { back: 'goHome()', foot: `<input class="mi" id="msg" style="margin:0;flex:1" placeholder="Type a message…" onkeydown="if(event.key==='Enter')sendMsg()"><button class="b p" onclick="sendMsg()">Send</button>` });
}
const mailFor = c => {
    return {
        to: c.email,
        cid: c.id,
        subject: 'Your Lost & Found support ticket ' + c.id,
        body: 'Hi ' + esc(c.name) + ', here is your support ticket copy from the La Verdad security desk. Your ticket number is <b>' + c.id + '</b>. Use the button below to continue the conversation.'
    };
};

function mailModal() {
    const m = S.mail;
    return `<div class="sh" onclick="if(event.target===this){S.mail=null;render()}"><div class="mailm"><div class="mh2"><b>${esc(m.subject)}</b><small>From: Lost &amp; Found · La Verdad Christian College<br>To: ${esc(m.to)}</small></div><p>${m.body}</p><div style="display:flex;gap:8px"><button class="b p" onclick="resumeChat('${m.cid}')">Continue conversation</button><button class="b" onclick="S.mail=null;render()">Close</button></div></div></div>`;
}

function resumeChat(id) {
    S.cid = id;
    S.mail = null;
    S.tc = 1;
    S.tab = 'chat';
    S.view = null;
    try {
        localStorage.setItem('lvchat', id);
    } catch (e) { }
    render();
}

function openMail() {
    keep();
    const em = (S.draft.h_email || '').trim().toLowerCase();
    const c = D.chats.find(x => x.email.toLowerCase() === em);
    if (!c) {
        S.err = 'No support ticket found for that email. Start a chat instead.';
        return render();
    }
    S.err = '';
    S.mail = mailFor(c);
    render();
}

function startChat() {
    keep();
    const n = (S.draft.h_name || '').trim();
    const em = (S.draft.h_email || '').trim();
    if (!n) {
        S.err = 'Enter your name.';
        return render();
    }
    if (!lvOk(em)) {
        S.err = emErr();
        return render();
    }
    let c = D.chats.find(x => x.email.toLowerCase() === em.toLowerCase());
    if (!c) {
        c = {
            id: ref('SUP'),
            name: n,
            email: em,
            m: [['g', 'Hi ' + n + '! This is the security desk. What item are you looking for?']]
        };
        D.chats.push(c);
        addN('chat', c.id, 'Chat inquiry from ' + n);
    } else
        gToast('Welcome back. Conversation resumed');
    S.cid = c.id;
    S.err = '';
    S.prof = Object.assign({ r: 0 }, S.prof, { name: n, email: em });
    try {
        localStorage.setItem('lvchat', c.id);
    } catch (e) { }
    commit();
}

function sendMsg() {
    const t = ((document.getElementById('msg') || {}).value || '').trim();
    const c = D.chats.find(x => x.id === S.cid);
    if (!t || !c)
        return;
    c.m.push(['u', t]);
    addN('chat', c.id, 'New chat message from ' + c.name);
    commit();
    const m = document.getElementById('msg');
    m && m.focus();
}

function mobile() {
    const v = S.view;
    if (v)
        return {
            sur: mSur,
            done: mDone,
            item: mItem,
            claim: mClaim
        }[v.t](v);
    return {
        home: mHome,
        browse: S.tc ? mBrowse : mTerms,
        track: mTrack,
        chat: S.tc ? mChat : mTerms
    }[S.tab]();
}
/* ===== guard portal ===== */

const PT = [['dash', 'Dashboard'], ['tickets', 'Tickets'], ['items', 'Items'], ['claims', 'Claims'], ['chat', 'Chat'], ['log', 'Activity']];
const cnt = () => {
    return {
        sur: D.tickets.filter(t => t.status === 'Pending Verification').length,
        pc: D.claims.filter(c => c.status === 'Pending Review').length,
        rel: D.claims.filter(c => c.status === 'Approved').length,
        done: D.claims.filter(c => c.status === 'Released').length
    };
};
const sbar = (a, i) => {
    return `<div class="sb">${a.map((x, k) => {
        return `<span data-n="${k + 1}" class="${x === 'Rejected' ? 'rej' : k < i ? 'done' : k === i ? (k === a.length - 1 ? 'done' : 'on') : ''}">${x}</span>`;
    }).join('')}</div>`;
};
const tbl = (h, rows) => {
    return `<div class="wrap"><table><thead><tr>${h.map(x => `<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
};
const cp = (bc, acts = '') => {
    return `<div class="cp"><div class="bc">${bc.map(([l, f], i) => i < bc.length - 1 ? `<a onclick="${f}">${l}</a><span>/</span>` : `<b>${l}</b>`).join('')}</div><div class="acts">${acts}</div></div>`;
};
const gGo = p => {
    keep();
    A.page = p;
    A.view = null;
    A.dd = false;
    render();
    scrollTo(0, 0);
};
const oT = id => {
    A.chk = [0, 0, 0];
    A.view = { t: 'ticket', id };
    A.dd = false;
    render();
    scrollTo(0, 0);
};
const oC = id => {
    A.cc = [0, 0];
    A.view = { t: 'claim', id };
    A.dd = false;
    render();
    scrollTo(0, 0);
};

function web() {
    const v = A.view;
    const un = D.notifs.filter(n => n.u).length;
    const c = cnt();
    const body = v ? (v.t === 'ticket' ? wTicket(v.id) : wClaim(v.id)) : {
        dash: wDash,
        tickets: wTickets,
        items: wItems,
        claims: wClaims,
        chat: wChat,
        log: wLog
    }[A.page]();
    const cur = k => (v ? (v.t === 'ticket' ? 'tickets' : 'claims') === k : A.page === k) ? 'aria-current="page"' : '';
    return `<div class="nav"><div class="logo">${lgo(32)}<span>Lost &amp; Found</span></div>${PT.map(([k, l]) => {
        return `<button class="m" ${cur(k)} onclick="gGo('${k}')">${l}${k === 'tickets' && c.sur ? ` <span class="bd w">${c.sur}</span>` : ''}${k === 'claims' && c.pc ? ` <span class="bd w">${c.pc}</span>` : ''}</button>`;
    }).join('')}<div class="sp"></div><div class="u"><button class="tog" onclick="A.dd=!A.dd;render()" aria-label="Notifications">${IC.bell}${un ? ' ' + un : ''}</button><span class="tog sy"></span><span class="av">${esc(A.me.split(' ').pop()[0])}</span><span class="nm">${esc(A.me)}</span><button class="tog" onclick="wOut()">Log out</button></div></div>${A.dd ? `<div class="dd"><div onclick="D.notifs.forEach(n=>n.u=0);commit()" style="text-align:center;font-weight:700">Mark all as read</div>${D.notifs.slice(0, 15).map((n, i) => {
        return `<div class="${n.u ? 'un' : ''}" onclick="openN(${i})">${esc(n.t)}<br><small class="mt">${esc(n.time)}</small></div>`;
    }).join('')}</div>` : ''}${body}`;
}

function openN(i) {
    const n = D.notifs[i];
    n.u = 0;
    persist();
    A.dd = false;
    if (n.k === 'surrender') {
        A.page = 'tickets';
        oT(n.ref);
    } else if (n.k === 'claim') {
        A.page = 'claims';
        oC(n.ref);
    } else {
        A.page = 'chat';
        A.chat = n.ref;
        A.view = null;
        render();
    }
}

function demoFill(i) {
    const g = GUARDS[i];
    $('#gu').value = g.u;
    $('#gp').value = g.p;
    $('#gp').focus();
}

function wLogin() {
    const realLogin = window.LV && window.LV.mode === 'rest';
    return `<div class="lgn"><div class="box2"><div class="lg" style="flex-direction:column;gap:6px">${lgo(72)}Guard Portal</div><p style="text-align:center;color:var(--mute);margin:-10px 0 8px;font-size:13px">La Verdad Christian College · Lost &amp; Found</p>${A.err ? `<div class="al d" role="alert">${A.err}</div>` : ''}<label for="gu">Username or email</label><input id="gu" value="${esc(dv('gu'))}" autocomplete="username"><label for="gp">Password</label><input id="gp" type="password" onkeydown="if(event.key==='Enter')doLogin()"><button class="b p" style="width:100%;margin-top:16px;padding:9px" onclick="doLogin()">Log in</button>${realLogin ? '' : `<div class="demo"><h4>Demo credentials · click to fill</h4>${GUARDS.map((g, i) => {
        return `<button type="button" onclick="demoFill(${i})"><span class="dav">${esc(g.n.split(' ').pop()[0])}</span><span><b>${esc(g.n)}</b><small>${esc(g.u)} · ${esc(g.p)}</small></span></button>`;
    }).join('')}</div>`}<p style="text-align:center;margin:16px 0 0"><button class="b" onclick="S.page='landing';render()">‹ Back to home</button></p></div></div>`;
}

async function doLogin() {
    const u = ($('#gu').value || '').trim().toLowerCase();
    const p = $('#gp').value;
    if (window.LV && window.LV.mode === 'rest') {            // backend running: the server checks the password
        try {
            const r = await fetch('auth.php', {
                method: 'POST', credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'lv' },
                body: JSON.stringify({ action: 'login', username: u, password: p })
            });
            const j = await r.json().catch(() => ({}));
            if (r.ok && j.ok) {
                A.me = j.name;
                A.ok = true;
                A.err = '';
                A.page = 'dash';
                S.page = 'app';
                window.LV.db.reauth();                       // load notifications and the activity log now
                logA('Signed in', 'Guard Portal');
                persist();
                return render();
            }
            A.err = r.status === 429 ? 'Too many attempts. Wait a minute and try again.' : 'Invalid username or password.';
        } catch (e) {
            A.err = 'Cannot reach the server. Try again.';
        }
        keep();
        return render();
    }
    const g = GUARDS.find(x => (u === x.u || u === x.u + '@laverdad.edu.ph') && p === x.p);
    if (g) {
        A.me = g.n;
        A.ok = true;
        A.err = '';
        A.page = 'dash';
        S.page = 'app';
        logA('Signed in', 'Guard Portal');
        persist();
        render();
    } else {
        A.err = 'Invalid username or password.';
        keep();
        render();
    }
}

function wOut() {
    logA('Signed out', 'Guard Portal');
    persist();
    if (window.LV && window.LV.mode === 'rest') {
        // let the queued saves reach the server first, then end the session
        setTimeout(() => {
            fetch('auth.php', {
                method: 'POST', credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'lv' },
                body: JSON.stringify({ action: 'logout' })
            }).catch(() => { }).then(() => window.LV.db.reauth());
        }, 600);
    }
    A.ok = false;
    S.page = 'login';
    render();
}

const T6 = (t) => {
    return `<tr class="c" tabindex="0" onkeydown="if(event.key==='Enter')this.click()" onclick="oT('${t.id}')"><td><b>${t.id}</b></td><td>${E[t.cat]} ${esc(t.item)}</td><td>${esc(t.name)}<br><small class="mt">${esc(t.who)}</small></td><td>${esc(t.cat)}</td><td>${esc(t.when)}</td><td>${sbd(t.status)}</td></tr>`;
};

const TH = ['Ticket', 'Item', 'Reporter', 'Category', 'Date found', 'Status'];

const C6 = c => {
    return `<tr class="c" tabindex="0" onkeydown="if(event.key==='Enter')this.click()" onclick="oC('${c.id}')"><td><b>${c.id}</b></td><td>${esc((T(c.tid) || {}).item)}</td><td>${esc(c.name)}</td><td>${esc(c.idno)}</td><td>${esc(c.time)}</td><td>${sbd(c.status)}</td></tr>`;
};

const CH = ['Claim', 'Item', 'Claimant', 'ID number', 'Submitted', 'Status'];
const filt = () => {
    const f = A.f;
    const q = f.q.toLowerCase();
    return D.tickets.filter(t => {
        return (!q || (t.id + t.item + t.cat + t.name).toLowerCase().includes(q)) && (!f.st || t.status === f.st) && (!f.who || t.who === f.who) && (!f.cat || t.cat === f.cat) && (!f.d || t.when === f.d);
    });
};
const none = m => `<div class="empty">${m}</div>`;

function tList() {
    const L = filt();
    if (!L.length)
        return none('No tickets match your search or filters.');
    return A.vw === 'k' ? `<div class="kan">${L.map(t => {
        return `<div class="k" tabindex="0" style="cursor:pointer;border-left-color:${STR[t.status]}" onkeydown="if(event.key==='Enter')this.click()" onclick="oT('${t.id}')"><b>${E[t.cat]} ${esc(t.item)}</b><small>${t.id} · ${esc(t.who)}</small><small>${esc(t.where)}</small><div style="margin-top:6px">${sbd(t.status)}</div></div>`;
    }).join('')}</div>` : tbl(TH, L.map(T6));
}

function iList() {
    const L = D.tickets.filter(t => t.status === 'Stored').filter(t => {
        const f = A.f;
        const q = f.q.toLowerCase();
        return (!q || (t.id + t.item + t.cat + t.name).toLowerCase().includes(q)) && (!f.who || t.who === f.who) && (!f.cat || t.cat === f.cat) && (!f.d || t.when === f.d);
    });
    return L.length ? tbl(['Item', 'Ticket', 'Category', 'Found at', 'Date', 'Days stored', 'Listing'], L.map(t => {
        const c = D.claims.find(c => c.tid === t.id && c.status !== 'Rejected');
        const a = age(t.when);
        return `<tr class="c" tabindex="0" onclick="oT('${t.id}')"><td>${E[t.cat]} <b>${esc(t.item)}</b></td><td>${t.id}</td><td>${esc(t.cat)}</td><td>${esc(t.where)}</td><td>${esc(t.when)}</td><td>${a >= 7 ? bd('w', a + 'd · follow up') : a + 'd'}</td><td>${c ? sbd(c.status) : bd('g', 'Claimable in app')}</td></tr>`;
    })) : none('No stored items match.');
}

function cList() {
    const q = A.cf.q.toLowerCase();
    const L = D.claims.filter(c => {
        return (!q || (c.id + c.name + c.idno + (T(c.tid) || {}).item).toLowerCase().includes(q)) && (!A.cf.st || c.status === A.cf.st);
    });
    return L.length ? tbl(CH, L.map(C6)) : none('No claims found.');
}

function lList() {
    const q = A.lq.toLowerCase();
    const L = D.logs.filter(l => (!A.lw || l.who === A.lw) && (!q || (l.act + l.ref + l.who).toLowerCase().includes(q)));
    return L.length ? tbl(['When', 'Guard', 'Action', 'Record'], L.slice(0, 200).map(l => {
        return `<tr><td>${esc(l.time)}</td><td>${esc(l.who)}</td><td>${esc(l.act)}</td><td><b>${esc(l.ref)}</b></td></tr>`;
    })) : none('No activity yet.');
}

function gList() {
    const q = A.gq.toLowerCase();
    if (!q)
        return none('Type to search tickets and claims.');
    const a = D.tickets.filter(t => (t.id + t.item + t.cat + t.status + t.name).toLowerCase().includes(q)).map(t => {
        return `<tr class="c" onclick="oT('${t.id}')"><td><b>${t.id}</b></td><td>${esc(t.item)}</td><td>Surrender</td><td>${sbd(t.status)}</td></tr>`;
    });
    const b = D.claims.filter(c => (c.id + c.status + c.name + c.idno + (T(c.tid) || {}).item).toLowerCase().includes(q)).map(c => {
        return `<tr class="c" onclick="oC('${c.id}')"><td><b>${c.id}</b></td><td>${esc((T(c.tid) || {}).item)}</td><td>Claim</td><td>${sbd(c.status)}</td></tr>`;
    });
    return a.length + b.length ? tbl(['Record', 'Item', 'Type', 'Status'], [...a, ...b]) : none('No records found.');
}

function lst() {
    const l = $('#list');
    if (!l)
        return;
    l.innerHTML = A.view ? '' : {
        tickets: tList,
        items: iList,
        claims: cList,
        log: lList,
        dash: gList
    }[A.page]();
}

function fbar(st, noSt) {
    const f = A.f;
    return `<div class="fb"><input class="fi" type="search" placeholder="Search ticket no., item, category, name…" value="${esc(f.q)}" oninput="A.f.q=this.value;lst()">${noSt ? '' : `<select class="fi" onchange="A.f.st=this.value;lst()">${opt(st || TS, f.st, 'All statuses')}</select>`}<select class="fi" onchange="A.f.who=this.value;lst()">${opt(ROLES, f.who, 'All reporters')}</select><select class="fi" onchange="A.f.cat=this.value;lst()">${opt(CATS, f.cat, 'All categories')}</select><input class="fi" type="date" value="${f.d}" onchange="A.f.d=this.value;lst()"><button class="b" onclick="A.f={q:'',st:'',who:'',cat:'',d:''};render()">Clear</button></div>`;
}

function wDash() {
    const c = cnt();
    const k = (n, l, f) => {
        return `<div role="button" tabindex="0" onclick="${f}"><strong>${n}</strong><small>${l}</small></div>`;
    };
    const pend = D.tickets.filter(t => t.status === 'Pending Verification').slice(0, 5).map(T6);
    const pc = D.claims.filter(c => c.status === 'Pending Review' || c.status === 'Approved').slice(0, 5).map(C6);
    return cp([['Dashboard', '']]) + `<div class="main"><div class="kp">${k(c.sur, 'New surrender tickets', 'A.f.st=\'Pending Verification\';gGo(\'tickets\')')}${k(c.pc, 'Pending claims', 'A.cf.st=\'Pending Review\';gGo(\'claims\')')}${k(c.rel, 'Items for release', 'A.cf.st=\'Approved\';gGo(\'claims\')')}${k(c.done, 'Completed transactions', 'A.cf.st=\'Released\';gGo(\'claims\')')}</div>

<div class="sheet"><h3>Needs action</h3>${pend.length || pc.length ? (pend.length ? tbl(TH, pend) : '') + (pc.length ? `<div style="height:10px"></div>` + tbl(CH, pc) : '') : '<div class="empty">Nothing is waiting for action.</div>'}</div>
<div class="sheet"><h3>Search all records</h3><div class="fb"><input class="fi" id="gq" type="search" placeholder="Ticket number, item, name, ID number, status…" value="${esc(A.gq)}" oninput="A.gq=this.value;lst()"></div><div id="list">${gList()}</div></div></div>`;
}

function wTickets() {
    return cp([['Tickets', '']], `<button class="b ${A.vw !== 'k' ? 'p' : ''}" onclick="A.vw='l';render()">List</button><button class="b ${A.vw === 'k' ? 'p' : ''}" onclick="A.vw='k';render()">Kanban</button>`) + `<div class="main">${fbar()}<div id="list">${tList()}</div></div>`;
}

function wItems() {
    return cp([['Items', '']], `<button class="b" onclick="exportCsv()">Export CSV</button>`) + `<div class="main"><p class="mt" style="margin-top:0">Items currently listed in the app for claiming.</p>${fbar(0, 1)}<div id="list">${iList()}</div></div>`;
}

function wClaims() {
    return cp([['Claims', '']]) + `<div class="main"><div class="fb"><input class="fi" type="search" placeholder="Search claim no., item, claimant, ID number…" value="${esc(A.cf.q)}" oninput="A.cf.q=this.value;lst()"><select class="fi" onchange="A.cf.st=this.value;lst()">${opt(CS, A.cf.st, 'All statuses')}</select><button class="b" onclick="A.cf={q:'',st:''};render()">Clear</button></div><div id="list">${cList()}</div></div>`;
}

function wLog() {
    return cp([['Activity log', '']]) + `<div class="main"><p class="mt" style="margin-top:0">All guard actions are recorded here with the guard’s name.</p><div class="fb"><input class="fi" type="search" placeholder="Search activity…" value="${esc(A.lq)}" oninput="A.lq=this.value;lst()"><select class="fi" onchange="A.lw=this.value;lst()">${opt(GUARDS.map(g => g.n), A.lw, 'All guards')}</select></div><div id="list">${lList()}</div></div>`;
}
const fld = (l, v) => `<label>${l}</label><div>${v}</div>`;
const hist = h => {
    return (h || []).map(x => {
        return `<div class="mrow"><span>${sbd(x[0])}</span><small>${x[1]}${x[2] ? ' · ' + esc(x[2]) : ''}</small></div>`;
    }).join('') || '<span class="mt">No history yet.</span>';
};
const nz = v => v && v !== '\u2014' ? esc(v) : 'None';

function wTicket(id) {
    const t = T(id);
    if (!t)
        return cp([['Tickets', "gGo('tickets')"], ['Not found', '']]) + '<div class="main"><div class="empty">Ticket not found.</div></div>';
    const pv = t.status === 'Pending Verification';
    const vv = t.status === 'Verified';
    const cl = D.claims.filter(c => c.tid === id);
    const stp = t.status === 'Rejected' ? ['Pending Verification', 'Rejected'] : ['Pending Verification', 'Verified', 'Stored', 'Returned'];
    const acts = (pv ? `<button class="b p" id="vb" onclick="setStatus('${id}','Verified')" ${A.chk.every(Boolean) ? '' : 'disabled'}>Mark verified</button>` : '') + (vv ? `<button class="b p" onclick="setStatus('${id}','Stored')">Log into storage</button>` : '') + ((pv || vv) ? `<button class="b" onclick="if(confirm('Reject this ticket?'))setStatus('${id}','Rejected')">Reject</button>` : '');
    return cp([['Tickets', "gGo('tickets')"], [esc(t.id), '']]) + `<div class="main">${sbar(stp, stp.indexOf(t.status))}<div class="smart"><div><strong>${t.status === 'Stored' ? age(t.when) + 'd' : 'N/A'}</strong><small>Days stored</small></div><div><strong>${t.who === 'Faculty & Staff' ? 'Staff' : t.who}</strong><small>Reporter</small></div><div><strong>${cl.length}</strong><small>Claims</small></div></div>
<div class="sheet"><h3>Item</h3><div class="dsp"><div>${t.photo ? `<img src="${esc(t.photo)}" alt="Photo of ${esc(t.item)}"><small class="mt">Photo from the reporter</small>` : `<div class="ph0"><span>${E[t.cat]}<br>No photo on file</span></div>`}</div><div class="f">${fld('Item', esc(t.item))}${fld('Type', t.cat)}${fld('Found at', esc(t.where))}${fld('Date found', fmtD(t.when) + ', ' + esc(t.time))}${fld('Notes', nz(t.more))}</div></div></div>
<div class="sheet"><h3>Reporter</h3><div class="f">${fld('Name', esc(t.name))}${fld('Type', t.who)}${fld('Email', t.email ? esc(t.email) : 'None (guest)')}</div></div>
${pv ? `<div class="sheet"><h3>Check the physical item</h3>${['Matches the submitted photo', 'Matches the description', 'Matches the reported location and time'].map((x, i) => {
        return `<label class="ckl"><input type="checkbox" ${A.chk[i] ? 'checked' : ''} onchange="A.chk[${i}]=this.checked?1:0;$('#vb').disabled=!A.chk.every(Boolean)"> ${x}</label>`;
    }).join('')}<div class="acts acts-end">${acts}</div></div>` : acts ? `<div class="sheet"><h3>Next step</h3><div class="acts acts-end">${acts}</div></div>` : ''}
${cl.length ? `<div class="sheet"><h3>Claims on this item</h3>${tbl(CH, cl.map(C6))}</div>` : ''}
<div class="sheet"><h3>History</h3>${hist(t.h)}</div></div>`;
}

function wClaim(id) {
    const c = C(id);
    if (!c)
        return cp([['Claims', "gGo('claims')"], ['Not found', '']]) + '<div class="main"><div class="empty">Claim not found.</div></div>';
    const t = T(c.tid) || {
        item: 'Item removed',
        cat: 'Others',
        where: 'None',
        more: '',
        when: '',
        time: ''
    };
    const rv = c.status === 'Pending Review';
    const ap = c.status === 'Approved';
    const stp = c.status === 'Rejected' ? ['Pending Review', 'Rejected'] : ['Pending Review', 'Approved', 'Released'];
    const a = rv ? `<button class="b p" id="cb" ${A.cc[0] ? '' : 'disabled'} onclick="setC('${id}','Approved')">Approve claim</button><button class="b" onclick="if(confirm('Reject this claim?'))setC('${id}','Rejected')">Reject</button>` : ap ? `<button class="b p" id="cb" ${A.cc[1] ? '' : 'disabled'} onclick="setC('${id}','Released')">Confirm handover</button>` : '';
    const chk = rv ? `<div class="sheet"><h3>Review</h3><label class="ckl"><input type="checkbox" ${A.cc[0] ? 'checked' : ''} onchange="A.cc[0]=this.checked?1:0;$('#cb').disabled=!A.cc[0]"> The proof matches the item on record</label><div class="acts acts-end">${a}</div></div>` : ap ? `<div class="sheet"><h3>Handover</h3><label class="ckl"><input type="checkbox" ${A.cc[1] ? 'checked' : ''} onchange="A.cc[1]=this.checked?1:0;$('#cb').disabled=!A.cc[1]"> Claimant showed a valid ID matching ${esc(c.idno)}</label><div class="acts acts-end">${a}</div></div>` : '';
    return cp([['Claims', "gGo('claims')"], [esc(id), '']]) + `<div class="main">${sbar(stp, stp.indexOf(c.status))}
<div class="sheet"><h3>Claimant</h3><div class="f">${fld('Name', esc(c.name))}${fld('Type', c.who || 'Not recorded')}${fld('ID number', esc(c.idno))}${fld('Email', esc(c.email))}${fld('Submitted', c.time)}</div></div>
<div class="two2"><div class="sheet"><h3>Claimant’s proof</h3><p style="margin-top:0">${esc(c.ev)}</p>${c.photo ? `<img class="pimg" src="${esc(c.photo)}" alt="Proof photo" style="max-width:260px">` : '<span class="mt">No proof photo attached.</span>'}</div>
<div class="sheet"><h3>Item on record</h3>${t.photo ? `<img class="pimg" src="${esc(t.photo)}" alt="${esc(t.item)}" style="max-width:260px;margin-bottom:10px">` : ''}<div class="f">${fld('Item', esc(t.item))}${fld('Ticket', esc(c.tid))}${fld('Found at', esc(t.where))}${fld('Notes', nz(t.more))}</div>${T(c.tid) ? `<button class="b" onclick="oT('${c.tid}')">Open surrender ticket</button>` : ''}</div></div>
${chk}<div class="sheet"><h3>History</h3>${hist(c.h)}</div></div>`;
}

function setStatus(id, s) {
    const t = T(id);
    t.status = s;
    t.h.push([s, nowS(), A.me]);
    logA(({
        Verified: 'Verified item',
        Stored: 'Logged item into storage',
        Rejected: 'Rejected ticket'
    })[s] || s, id);
    commit();
    gToast(id + ' marked ' + s);
}

function setC(id, s) {
    const c = C(id);
    c.status = s;
    (c.h = c.h || []).push([s, nowS(), A.me]);
    logA(({
        Approved: 'Approved claim',
        Rejected: 'Rejected claim',
        Released: 'Released item to claimant'
    })[s] || s, id);
    if (s === 'Released') {
        const t = T(c.tid);
        if (t && t.status === 'Stored') {
            t.status = 'Returned';
            t.h.push(['Returned', nowS(), A.me]);
        }
    }
    A.cc = [0, 0];
    commit();
    gToast(id + ' marked ' + (s === 'Released' ? 'Released' : s));
}

function wChat() {
    const c = D.chats.find(x => x.id === A.chat) || D.chats[0];
    return cp([['Chat support', '']]) + `<div class="main"><div class="cht"><div class="sheet" style="padding:0;margin:0">${D.chats.map(x => {
        return `<div class="th ${c && x.id === c.id ? 'on' : ''}" onclick="A.chat='${x.id}';render()"><b>${esc(x.name)}</b><br><small class="mt">${esc(x.email)}</small></div>`;
    }).join('') || '<div style="padding:14px" class="mt">No chats yet.</div>'}</div><div class="sheet" style="margin:0">${c ? `<div class="msgs">${c.m.map(m => `<div class="bub ${m[0] === 'g' ? 'me' : ''}">${esc(m[1])}</div>`).join('')}</div><div class="rep"><input class="fi" id="cm" placeholder="Reply to ${esc(c.name)}…" onkeydown="if(event.key==='Enter')sendChat()"><button class="b p" onclick="sendChat()">Send</button></div>` : '<p class="mt">Select a chat.</p>'}</div></div></div>`;
}

function sendChat() {
    const c = D.chats.find(x => x.id === A.chat) || D.chats[0];
    const i = $('#cm');
    const v = i && i.value.trim();
    if (!c || !v)
        return;
    c.m.push(['g', v]);
    logA('Replied in chat', c.id);
    A.chat = c.id;
    commit();
    const n = $('#cm');
    n && n.focus();
}
/* ===== demo simulation ===== */

const SIM = {
    open: false,
    live: null,
    auto: null,
    t: null,
    cap: '',
    step: 0,
    total: 0,
    delay: 4200,
    log: []
};

const PEOPLE = {
    Student: [['Jessa Villanueva', 'j.villanueva@student.laverdad.edu.ph'], ['Mark Tolentino', 'm.tolentino@student.laverdad.edu.ph'], ['Bea Manalo', 'b.manalo@student.laverdad.edu.ph'], ['Renz Aquino', 'r.aquino@student.laverdad.edu.ph']],
    'Faculty & Staff': [['Prof. L. Cruz', 'l.cruz@laverdad.edu.ph'], ['Ms. H. Pineda', 'h.pineda@laverdad.edu.ph'], ['Mr. D. Soriano', 'd.soriano@laverdad.edu.ph']],
    Guest: [['Visitor (parent)', ''], ['Alumni visitor', ''], ['Delivery rider', '']]
};

const SITEMS = [['Bags', 'Navy Blue Tote Bag', 'Library lobby', 'Canvas, pin badge on the strap'], ['Bags', 'Maroon Backpack', 'Room 212', 'Torn zipper pull, math notebook inside'], ['Gadgets', 'Samsung Galaxy Earbuds', 'Room 105', 'Black case, cracked hinge'], ['Gadgets', 'Power Bank 10,000 mAh', 'Canteen', 'White, “RM” written on the side'], ['IDs & Cards', 'Student ID on Blue Lanyard', 'Registrar queue', 'Photo ID, lanyard has a keychain'], ['IDs & Cards', 'ATM Card Holder', 'Gate 2', 'Leather, two cards inside'], ['Clothing', 'Black Windbreaker', 'Gym', 'Size L, school logo on the sleeve'], ['Clothing', 'PE Uniform Shirt', 'Locker area', 'Name tag stitched inside'], ['Accessories', 'Silver Wristwatch', 'Chapel', 'Analog, brown leather strap'], ['Accessories', 'Tumbler with Stickers', 'Room 304', 'Green, sticker of a cat'], ['Others', 'Orange Umbrella', 'Gate 1', 'Folding, wooden handle'], ['Others', 'Scientific Calculator', 'Room 210', 'Casio fx-570, initials on the back']];

const SCOL = {
    Bags: '#2A5C94',
    Gadgets: '#00A09D',
    'IDs & Cards': '#875A7B',
    Clothing: '#F06050',
    Accessories: '#D4A21F',
    Others: '#5F6B7A'
};

const SMSG = ['Hello po, may nakita po bang itim na payong?', 'Good day! Did anyone turn in a blue lanyard with an ID?', 'Can you check the cabinet for a white power bank?', 'Pwede po bang magtanong about my claim ticket?', 'I lost my calculator in Room 210 yesterday. Is it listed?'];
const rnd = a => a[Math.floor(Math.random() * a.length)];
const stoday = () => new Date().toISOString().slice(0, 10);
const stime = () => new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
const simPhoto = (cat, label) => {
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="360" height="260"><rect width="360" height="260" fill="${SCOL[cat] || '#2A5C94'}"/><text x="180" y="132" font-family="sans-serif" font-size="24" font-weight="700" fill="#fff" text-anchor="middle">${label.replace(/&/g, 'and')}</text><text x="180" y="162" font-family="sans-serif" font-size="13" fill="#ffffffcc" text-anchor="middle">Sample photo</text></svg>`);
};
const typing = () => {
    const e = document.activeElement;
    return !!e && /INPUT|TEXTAREA|SELECT/.test(e.tagName) && $('#app') && $('#app').contains(e);
};

const G = () => GUARDS[0].n;

function simLogA(act, ref) {
    D.logs.unshift({
        id: 'L' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
        ts: Date.now() + D.logs.length,
        who: G(),
        act,
        ref,
        time: nowS()
    });
}

function simCommit(msg, notify) {
    persist();
    if (notify && S.plat === 'web' && A.ok && S.page === 'app')
        gToast(notify);
    SIM.log.unshift(msg + ' · ' + stime());
    SIM.log = SIM.log.slice(0, 4);
    if (!typing())
        draw();
    simPanel();
}

function simSur(who) {
    who = who || rnd(['Student', 'Student', 'Faculty & Staff', 'Guest']);
    const [nm, em] = rnd(PEOPLE[who]);
    const [cat, item, where, more] = rnd(SITEMS);
    const id = ref('SUR');
    D.tickets.unshift({
        id,
        who,
        name: nm,
        email: em,
        item,
        cat,
        where,
        when: stoday(),
        time: stime(),
        more,
        photo: simPhoto(cat, item),
        status: 'Pending Verification',
        h: [['Pending Verification', nowS()]]
    });
    addN('surrender', id, 'New surrender report: ' + item);
    simCommit('New surrender: ' + item + ' (' + who + ')', 'New surrender report: ' + item);
    return id;
}

function simVerify(id) {
    const t = id ? T(id) : [...D.tickets].reverse().find(x => x.status === 'Pending Verification');
    if (!t || t.status !== 'Pending Verification')
        return null;
    t.status = 'Stored';
    t.h.push(['Verified', nowS(), G()], ['Stored', nowS(), G()]);
    simLogA('Verified item', t.id);
    simLogA('Logged item into storage', t.id);
    simCommit('Guard verified & stored ' + t.item);
    return t.id;
}

function simClaim(tid) {
    const t = tid ? T(tid) : rnd(items().filter(x => !held(x)) || []);
    if (!t || held(t))
        return null;
    const [nm, em] = rnd(PEOPLE.Student);
    const id = ref('CLM');
    D.claims.unshift({
        id,
        tid: t.id,
        who: 'Student',
        name: nm,
        idno: String(Math.floor(Math.random() * 90) + 10) + '-' + String(Math.floor(Math.random() * 90000) + 10000) + rnd(['ABC', 'XYZ', 'DEF', 'MNP']),
        email: em,
        ev: 'This is mine. ' + t.more + '. I can describe what is inside and show a photo from my phone.',
        photo: '',
        status: 'Pending Review',
        time: nowS(),
        h: [['Pending Review', nowS()]]
    });
    addN('claim', id, 'New claim request for ' + t.item);
    simCommit('New claim for ' + t.item, 'New claim request for ' + t.item);
    return id;
}

function simApprove(id) {
    const c = id ? C(id) : [...D.claims].reverse().find(x => x.status === 'Pending Review');
    if (!c || c.status !== 'Pending Review')
        return null;
    c.status = 'Approved';
    (c.h = c.h || []).push(['Approved', nowS(), G()]);
    simLogA('Approved claim', c.id);
    simCommit('Guard approved ' + c.id);
    return c.id;
}

function simRelease(id) {
    const c = id ? C(id) : [...D.claims].reverse().find(x => x.status === 'Approved');
    if (!c || c.status !== 'Approved')
        return null;
    c.status = 'Released';
    (c.h = c.h || []).push(['Released', nowS(), G()]);
    const rt = T(c.tid);
    if (rt && rt.status === 'Stored') {
        rt.status = 'Returned';
        rt.h.push(['Returned', nowS(), G()]);
    }
    simLogA('Released item to claimant', c.id);
    simCommit('Item released · ' + c.id);
    return c.id;
}

function simChat() {
    const ex = D.chats.filter(c => c.m.length && c.m[c.m.length - 1][0] === 'g');
    const msg = rnd(SMSG);
    if (ex.length && Math.random() < .5) {
        const c = rnd(ex);
        c.m.push(['u', msg]);
        addN('chat', c.id, 'New chat message from ' + c.name);
        simCommit('Chat message from ' + c.name, 'New chat message from ' + c.name);
        return c.id;
    }
    const [nm, em] = rnd(PEOPLE.Student);
    let c = D.chats.find(x => x.email === em);
    if (c) {
        c.m.push(['u', msg]);
        addN('chat', c.id, 'New chat message from ' + nm);
    } else {
        c = {
            id: ref('SUP'),
            name: nm,
            email: em,
            m: [['u', msg]]
        };
        D.chats.push(c);
        addN('chat', c.id, 'Chat inquiry from ' + nm);
    }
    simCommit('Chat inquiry from ' + nm, 'Chat inquiry from ' + nm);
    return c.id;
}

function simFire(k) {
    const r = {
        sur: () => simSur(),
        ver: () => simVerify(),
        clm: () => simClaim(),
        app: () => simApprove(),
        rel: () => simRelease(),
        chat: () => simChat()
    }[k]();
    if (!r)
        gToast({
            ver: 'No ticket is waiting for verification',
            clm: 'No claimable items. Verify a ticket first',
            app: 'No claim is waiting for review',
            rel: 'No approved claim is waiting for release'
        }[k] || 'Nothing to do');
}

function simLive(on) {
    clearInterval(SIM.live);
    SIM.live = null;
    if (on) {
        SIM.live = setInterval(() => {
            if (SIM.auto)
                return;
            const k = rnd(['sur', 'sur', 'sur', 'clm', 'clm', 'chat', 'chat', 'ver', 'ver', 'app', 'rel']);
            const r = {
                sur: simSur,
                ver: simVerify,
                clm: simClaim,
                app: simApprove,
                rel: simRelease,
                chat: simChat
            }[k]();
            if (!r)
                simSur();
        }, 9000);
    }
    simPanel();
}

function simShow(v) {
    if (v === 'web') {
        if (!A.ok) {
            A.me = G();
            logA('Signed in', 'Guard Portal');
        }
        A.me = G();
        A.ok = true;
        A.err = '';
        A.dd = false;
        S.plat = 'web';
    } else {
        S.plat = 'app';
    }
    S.page = 'app';
}
const simTk = t => {
    return {
        id: t.id,
        title: 'Report submitted',
        sub: 'Hand the item to the security guard.',
        mail: t.email,
        rows: [['Reported by', t.name + ' (' + t.who + ')'], ['Item', t.item + ' · ' + t.cat], ['Found at', t.where]]
    };
};
const simCk = (c, t) => {
    return {
        id: c.id,
        title: 'Claim submitted',
        sub: 'Bring your ID to the cabinet. The guard will verify your claim.',
        mail: c.email,
        rows: [['Claimant', c.name], ['ID number', c.idno], ['Item', t.item + ' (' + t.id + ')'], ['LV email', c.email]]
    };
};

function simStop(msg) {
    clearTimeout(SIM.t);
    SIM.auto = null;
    SIM.cap = msg || 'Walkthrough stopped.';
    simPanel();
}

function simTour() {
    if (SIM.auto)
        return simStop();
    simLive(false);
    const st = {};
    const steps = [
        ['1 · A student finds an item and files a surrender ticket in the mobile app.', () => {
                simShow('app');
                st.id = simSur('Student');
                S.ticket = simTk(T(st.id));
                S.view = { t: 'done' };
                render();
            }],
        ['2 · The guard is alerted on the dashboard and opens the new ticket.', () => {
                simShow('web');
                A.page = 'tickets';
                oT(st.id);
                gToast('New surrender report: ' + T(st.id).item);
            }],
        ['3 · The guard checks the physical item, marks it Verified, then logs it into storage.', () => {
                simVerify(st.id);
            }],
        ['4 · Stored items appear in Check & Claim with a Claim Now button.', () => {
                simShow('app');
                S.tc = 1;
                S.tab = 'browse';
                S.view = { t: 'item', id: st.id };
                S.ticket = null;
                render();
            }],
        ['5 · The owner confirms the item and submits a claim ticket with proof.', () => {
                st.cid = simClaim(st.id);
                S.ticket = simCk(C(st.cid), T(st.id));
                S.view = { t: 'done' };
                render();
            }],
        ['6 · The guard opens the claim and reviews the evidence and ID number.', () => {
                simShow('web');
                A.page = 'claims';
                oC(st.cid);
                gToast('New claim request for ' + T(st.id).item);
            }],
        ['7 · The guard approves the claim. It moves to Items for release.', () => {
                simApprove(st.cid);
            }],
        ['8 · The guard hands over the item and the ticket is marked Returned.', () => {
                simRelease(st.cid);
                A.page = 'dash';
                A.view = null;
                render();
            }]
    ];
    SIM.total = steps.length;
    SIM.auto = true;
    const run = i => {
        if (!SIM.auto)
            return;
        if (i >= steps.length) {
            SIM.auto = null;
            SIM.cap = 'Walkthrough complete. Every step updated the tickets, counters and activity log.';
            SIM.step = steps.length;
            simPanel();
            return;
        }
        SIM.step = i + 1;
        SIM.cap = steps[i][0];
        steps[i][0] && steps[i][1]();
        simPanel();
        SIM.t = setTimeout(() => run(i + 1), SIM.delay);
    };
    run(0);
}

function simReset() {
    simStop('');
    simLive(false);
    const L = D.logs;
    D = JSON.parse(JSON.stringify(SEED));
    D.logs = L;
    norm();
    simLogA('Reset demo data', 'Demo tools');
    persist();
    SIM.log = [];
    SIM.cap = '';
    SIM.step = 0;
    if (S.plat === 'app')
        goHome();
    else {
        A.view = null;
        render();
    }
    simPanel();
    gToast('Demo data reset');
}

function simPanel() {
    const e = document.getElementById('demo');
    if (!e)
        return;
    if (!SIM.open) {
        e.innerHTML = `<button class="dmb" onclick="SIM.open=true;simPanel()" aria-label="Open demo tools">Demo tools${SIM.auto || SIM.live ? ' <i class="dmo"></i>' : ''}</button>`;
        return;
    }
    const ev = [['sur', 'New surrender'], ['ver', 'Verify & store next'], ['clm', 'New claim request'], ['app', 'Approve next claim'], ['rel', 'Release next item'], ['chat', 'Chat message']];
    e.innerHTML = `<div class="dmp"><div class="dmh"><b>Demo simulation</b><button class="dmx" onclick="SIM.open=false;simPanel()" aria-label="Close">×</button></div>
<div class="dms"><h4>Guided walkthrough</h4><p>Plays the full flow, switching between the mobile app and the Guard Portal.</p><button class="b p" style="width:100%" onclick="simTour()">${SIM.auto ? 'Stop walkthrough' : 'Start walkthrough'}</button>${SIM.cap ? `<div class="dmc">${SIM.total && SIM.auto ? `<div class="pb"><div style="width:${SIM.step / SIM.total * 100}%"></div></div>` : ''}${esc(SIM.cap)}</div>` : ''}</div>
<div class="dms"><h4>Live traffic</h4><label class="ckl"><input type="checkbox" ${SIM.live ? 'checked' : ''} onchange="simLive(this.checked)"> Random activity every few seconds</label></div>
<div class="dms"><h4>Trigger an event</h4><div class="dmg">${ev.map(([k, l]) => `<button class="b" onclick="simFire('${k}')">${l}</button>`).join('')}</div></div>
${SIM.log.length ? `<div class="dms"><h4>Recent events</h4><ul>${SIM.log.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
<div class="dms"><button class="b" style="width:100%" onclick="if(confirm('Reset all demo data?'))simReset()">Reset demo data</button></div></div>`;
}

function simInit() {
    const d = document.createElement('div');
    d.id = 'demo';
    document.body.appendChild(d);
    simPanel();
    addEventListener('storage', e => {
        if (e.key !== 'lvlf3' || !e.newValue)
            return;
        try {
            const x = JSON.parse(e.newValue);
            if (x && x.tickets) {
                D = x;
                norm();
                if (!typing())
                    draw();
            }
        } catch (err) { }
    });
}
addEventListener('hashchange', () => {
    if (location.hash === '#guard')
        launch('web');
});
norm();
if (location.hash === '#guard')
    launch('web');
else
    render();
pill('conn');
simInit();
(async () => {
    try {
        let db = null;
        let mode = 'local';
        if (window.makeRestDB) {                              // 1. our own backend: connector.php + SQLite
            db = await makeRestDB('connector.php');
            if (db) mode = 'rest';
        }
        if (!db && window.claude) {                           // 2. the Claude artifact runtime (original behaviour)
            db = await claude.use('db');
            if (db) mode = 'claude';
        }
        if (!db) {                                            // 3. no backend: everything stays in this browser
            pill('local');
            return;
        }
        window.LV = { mode, db };
        if (mode === 'rest') {
            db.onStatus(s => pill(s === 'ok' ? 'ok' : 'local'));
            db.onAuthLost(() => {
                if (A.ok) {
                    A.ok = false;
                    A.err = 'Your session expired. Please sign in again.';
                    S.page = 'login';
                    render();
                }
            });
            // the demo panel rewrites data on purpose; keep it out of a real deployment (add ?demo=1 to the address to show it)
            const demo = document.getElementById('demo');
            if (demo && !/[?&]demo=1\b/.test(location.search)) demo.remove();
        }
        DBC = {};
        COLS.forEach(c => DBC[c] = db.collection(c));
        listen();
    } catch (e) {
        pill('local');
    }
})();

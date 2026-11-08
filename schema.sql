-- La Verdad Lost & Found: database schema (SQLite).  Run through:  php setup.php
-- Every "collection" table (tickets, claims, chats, notifications, log) ends with:
--   upd        server timestamp in ms; the app uses it to decide which copy of a record is newer
--   extra      JSON for fields the app keeps that have no column of their own (history list, chat messages)
--   created_at filled in automatically

CREATE TABLE IF NOT EXISTS users (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    username     TEXT NOT NULL UNIQUE,
    display_name TEXT NOT NULL,
    password     TEXT NOT NULL,                       -- password_hash() output, never plain text
    role         TEXT NOT NULL DEFAULT 'SecurityGuard' CHECK (role IN ('SecurityGuard', 'Admin')),
    created_at   DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS categories (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    category_name TEXT NOT NULL UNIQUE
);

-- A surrender ticket is the item itself: when its status is 'Stored' it is listed on Check & Claim.
CREATE TABLE IF NOT EXISTS surrender_tickets (
    id             TEXT PRIMARY KEY,                  -- e.g. SUR-3HN6V
    reporter_type  TEXT CHECK (reporter_type IN ('Student', 'Faculty & Staff', 'Guest')),
    reporter_name  TEXT,
    reporter_email TEXT,
    item_name      TEXT NOT NULL,
    category       TEXT REFERENCES categories (category_name) ON UPDATE CASCADE,
    location_found TEXT,
    date_found     TEXT,
    time_found     TEXT,
    other_info     TEXT,
    photo_path     TEXT,
    status         TEXT NOT NULL DEFAULT 'Pending Verification'
                   CHECK (status IN ('Pending Verification', 'Verified', 'Stored', 'Returned', 'Rejected')),
    upd            INTEGER,
    extra          TEXT NOT NULL DEFAULT '{}',
    created_at     DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_tickets_status ON surrender_tickets (status);

CREATE TABLE IF NOT EXISTS claim_requests (
    id                 TEXT PRIMARY KEY,              -- e.g. CLM-8MQ2R
    ticket_id          TEXT NOT NULL REFERENCES surrender_tickets (id) ON DELETE CASCADE,
    claimant_type      TEXT,
    claimant_name      TEXT,
    claimant_id_number TEXT,
    lv_email           TEXT,
    evidence_details   TEXT,
    proof_photo_path   TEXT,
    claim_status       TEXT NOT NULL DEFAULT 'Pending Review'
                       CHECK (claim_status IN ('Pending Review', 'Approved', 'Rejected', 'Released')),
    time_label         TEXT,
    upd                INTEGER,
    extra              TEXT NOT NULL DEFAULT '{}',
    created_at         DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_claims_ticket ON claim_requests (ticket_id);

-- Support chat: one conversation per email address; the message list lives in extra.m
CREATE TABLE IF NOT EXISTS chats (
    id         TEXT PRIMARY KEY,                      -- e.g. SUP-A1B2C
    name       TEXT,
    email      TEXT,
    upd        INTEGER,
    extra      TEXT NOT NULL DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS notifications (
    id         TEXT PRIMARY KEY,
    kind       TEXT,                                  -- surrender | claim | chat
    ref        TEXT,                                  -- id of the ticket / claim / chat it is about
    message    TEXT,
    time_label TEXT,
    unread     INTEGER DEFAULT 1,
    ts         INTEGER,
    upd        INTEGER,
    extra      TEXT NOT NULL DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_notifications_ts ON notifications (ts);

CREATE TABLE IF NOT EXISTS activity_log (
    id         TEXT PRIMARY KEY,
    ts         INTEGER,
    who        TEXT,                                  -- guard display name
    act        TEXT,
    ref        TEXT,
    time_label TEXT,
    upd        INTEGER,
    extra      TEXT NOT NULL DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_log_ts ON activity_log (ts);

INSERT OR IGNORE INTO categories (category_name) VALUES
    ('Bags'), ('Gadgets'), ('IDs & Cards'), ('Clothing'), ('Accessories'), ('Others');

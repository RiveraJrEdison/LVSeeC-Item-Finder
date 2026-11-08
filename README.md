# LVSeeC: Item Finder

## Project Description

LVSeeC: Item Finder is the Lost & Found System of La Verdad Christian College. Students, guests, faculty, and staff can report items they have found on campus and browse items that have been turned in. Registered users can log in to claim their lost belongings safely.

**Main features**

- **Surrender an item:** the finder fills in a short form with a photo and gets a ticket number.
- **Check & Claim:** owners browse stored items and submit a claim with their ID number and proof.
- **Track a ticket:** users can follow the status of their ticket or claim.
- **Guard Portal:** verify tickets, log items into storage, approve or reject claims, and confirm handover.
- **Chat and activity log:** a chat between visitors and guards, and a record of every guard action.

**Technologies:** HTML, CSS, vanilla JavaScript (front end) · PHP 8.1+ with PDO (back end) · SQLite (database)

## Group Members

**Front-End Developers**
- Mary Therese Guevarra
- Jianna Raiza Serrano

**Back-End Developer**
- Ehrnell Dela Cruz

**Full Stack Developer**
- Edion Rivera Jr.

**Database**
- Elaine Viloria
- Arianne Andril

## How to Run the Project

### Requirements

- **PHP 8.1 or newer** with the `pdo_sqlite` extension enabled (XAMPP already includes both).

The SQLite database file (`data/la_verdad_found.db`) is already included with sample data, so the project can run without any extra setup.

### Option A: XAMPP (Apache)

1. Open the XAMPP Control Panel and start **Apache**.
2. Copy the `LV-lost-and-found-system` folder into `C:\xampp\htdocs\`.
3. Open your browser and go to:
   - Student / mobile app: <http://localhost/LV-lost-and-found-system/>
   - Guard Portal: <http://localhost/LV-lost-and-found-system/#guard>

### Option B: PHP built-in server

Open a terminal in the project folder and run:

```bash
cd LV-lost-and-found-system
php -S 127.0.0.1:8000 router.php
```

Then open:

- Student / mobile app: <http://127.0.0.1:8000>
- Guard Portal: <http://127.0.0.1:8000/#guard>

### Guard login (demo accounts)

| Username | Password |
|---|---|
| `guard.ramos` | `Ramos@LV2026` |
| `guard.bautista` | `Bautista@LV2026` |

These demo passwords are for class use only.

### Starting with a fresh database (optional)

To rebuild the database from scratch, delete `data/la_verdad_found.db` and run:

```bash
php setup.php --demo
```

To add or reset a guard account:

```bash
php adduser.php guard.santos "Guard Santos" "a-long-password"
```

### Notes

- The `data/` and `uploads/` folders must be writable by the web server.
- The status label in the Guard Portal's top bar shows **Synced** when the PHP back end and database are working. If it shows **Local mode**, the app was opened directly from the file (or Apache is not running) and data is only kept in the browser.
- Add `?demo=1` to the address (for example `http://localhost/LV-lost-and-found-system/?demo=1`) to show the Demo tools panel, which can simulate the full flow for presentations.

## Project Structure

| Path | Description |
|---|---|
| `index.html`, `css/`, `js/` | Front end (pages, styling, app logic) |
| `connector.php` | Back-end API: validation, permissions, database queries (PDO) |
| `auth.php` | Guard sign-in and sign-out |
| `database.php` | Opens the SQLite database through PDO |
| `schema.sql`, `seed.sql`, `setup.php`, `adduser.php` | Create tables, sample data and guard accounts |
| `data/` | SQLite database file |
| `uploads/` | Photos uploaded in the app |
| `docs/` | Database schema notes, flowcharts and ERD |
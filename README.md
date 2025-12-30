# baird-telehealth-site

A fast, accessible static site (no build step) designed for GitHub Pages or Cloudflare Pages.

## Pages included
- `index.html` — main site
- `links.html` — “link in bio” / quick links
- `for-employers.html` — hiring manager snapshot
- `labs.html` — research / AI ethics / systems work
- `privacy.html` — simple privacy notes
- `404.html` — not found page

## Quick start (local preview)
Open `index.html` in a browser.

Optional (recommended): run a tiny local server

- Python: `python -m http.server 5173`
- Then open: http://localhost:5173/

## Deploy to GitHub Pages (free)
1. Create a new GitHub repo (example: `baird-telehealth-site`)
2. Upload these files to the repo root (or push via git)
3. GitHub → **Settings** → **Pages**
4. Under “Build and deployment” → Source: **Deploy from a branch**
5. Branch: `main` and folder: `/ (root)`
6. Save → your site publishes at `https://<username>.github.io/<repo>/`

## Deploy to Cloudflare Pages (free)
1. Cloudflare Dashboard → Workers & Pages → Create application → Pages
2. Import an existing Git repository (connect GitHub)
3. Build settings: **None** (static) and output directory: `/`
4. Deploy → you’ll get a `pages.dev` URL
5. Add a custom domain when ready

## Where to edit
- `index.html` — copy + sections
- `assets/css/styles.css` — theme + layout + motion
- `assets/js/main.js` — theme toggle + footer year
- `assets/img/og.svg` — share preview image
- `sitemap.xml` — update the `https://example.com/` base URL once you have a real domain

## Clinical website note
Avoid collecting PHI through a generic form. Prefer a secure client portal link for scheduling/intake.


## SimplePractice scheduling
- Edit `schedule.html`
- Paste your SimplePractice appointment request widget code where indicated.
- Replace the two `#` placeholder links with your:
  - appointment request link, and/or
  - Client Portal login link.

In SimplePractice, widget code is available under **Settings → Scheduling and inquiries → Widgets**.

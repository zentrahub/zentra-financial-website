# Deployment

This is a runbook, not something already done — every step below needs you
directly (GitHub/hosting account, GoDaddy login). Nothing here has been
executed.

Rules from `00_Project_Docs/DEPLOYMENT.md` this must follow:

- Keep GoDaddy as the registrar. Don't transfer the domain.
- Preserve Google Workspace DNS (MX records, etc.) — touch only the
  records needed to point the site at its host.
- Connect hosting through A/CNAME records only.
- HTTPS enabled.

## Recommended host: Vercel

REOS (`04_Reference/reos`) already deploys on Vercel, and Next.js is built
by the same team, so it's the path of least friction — zero config beyond
env vars.

1. **Push this repo to GitHub.** From `02_Website`:
   ```bash
   git remote add origin <your-new-github-repo-url>
   git branch -M main
   git push -u origin main
   ```
   (A local git repo already exists here with an initial commit — you just
   need to create the empty GitHub repo and point it there.)

2. **Import the repo in Vercel** (vercel.com → Add New → Project). It will
   auto-detect Next.js; no build settings need changing.

3. **Set environment variables** in the Vercel project settings (same
   names as `.env.example`):
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`

4. **Add the custom domain** in Vercel: Project → Settings → Domains →
   add `www.zentrafinancial.com` (and `zentrafinancial.com` redirecting to
   it, if you want the bare domain to work too). Vercel will show you the
   exact DNS record(s) to add — typically a `CNAME` for `www` pointing at
   `cname.vercel-dns.com`, and either an `A` record or `ALIAS`/`ANAME` for
   the bare domain.

5. **Add those records in GoDaddy DNS** — only the ones Vercel gives you
   in step 4. Do not touch the existing MX / Google Workspace records.

6. **Wait for DNS propagation** (usually minutes, can take longer) — Vercel
   marks the domain "Valid" once it sees the records, and issues an SSL
   certificate automatically (HTTPS requirement satisfied).

## What I can't do for you

I don't have — and shouldn't be given — your GoDaddy login or a way to
create a Vercel account on your behalf, so steps 1, 2, 4 (the "add domain"
click), and 5 are yours. I can walk through any of them with you, or make
further code changes if Vercel's build surfaces something to fix.

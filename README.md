# Orbyx Media Website

Orbyx Media is a full-service growth and marketing agency specializing in brand strategy, creative, creators, and performance marketing.

---

## Deploying to Vercel

This project is completely configured for seamless, zero-configuration deployment on **Vercel**.

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new) and log in with your GitHub account.
2. Under **Import Git Repository**, select `orbyx0007/Orbyx-Media-Website-`.
3. In the project setup screen:
   - **Framework Preset**: `Other` *(automatically detected)*
   - **Root Directory**: `./` *(leave default)*
   - **Build and Output Settings**: Leave empty / default (no build command needed for pure static HTML/CSS/JS).
4. Click **Deploy**.
5. Your website will be live across Vercel's global edge network in ~10 seconds. Every subsequent push to `main` will automatically trigger a new production deployment.

### Option 2: Deploy via Vercel CLI

If you prefer deploying directly from your terminal:
```bash
# 1. Install or run Vercel CLI
npx vercel

# 2. Deploy to production
npx vercel --prod
```

---

### Pre-Configured Vercel Features (`vercel.json`)

- **Clean URLs (`cleanUrls: true`)**: Automatically routes extensionless URLs like `/creators` to `creators.html` while redirecting `.html` paths for clean SEO URLs.
- **Custom 404 Page (`404.html`)**: Automatically served with a `404 Not Found` HTTP status for any unmatched path.
- **Aggressive Edge Caching**:
  - `31536000s (1 year) immutable` cache for assets in `/assets/` and the 240 canvas sequence frames in `/NEW TEMPLATE/`.
  - `86400s (24 hours)` cache for CSS, JavaScript, and Web Manifest.
  - `604800s (7 days)` cache for favicons.
- **Security Headers**:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **SEO & PWA**:
  - `site.webmanifest` served with proper `application/manifest+json; charset=utf-8` MIME type.
  - `sitemap.xml` and `robots.txt` served with optimal MIME types and indexing directives.

---

## Local Development

Run the local HTTP server in PowerShell:
```powershell
./serve.ps1
```
Visit `http://localhost:8080/` in your browser.

# Orbyx Media Website

Orbyx Media is a full-service growth and marketing agency specializing in brand strategy, creative, creators, and performance marketing.

## Deploying to Cloudflare Pages

This project is structured as a zero-configuration static site ready for instant deployment on **Cloudflare Pages**:

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select the repository: `orbyx0007/Orbyx-Media-Website-`.
3. In the deployment configuration settings:
   - **Framework preset**: `None`
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` *(root)*
4. Click **Save and Deploy**.

### Pre-Configured Cloudflare Features
- **Custom Headers (`_headers`)**: Automatically configures high-performance caching for static assets, canvas scroll frames, CSS, JS, and web manifest, along with standard HTTP security headers.
- **Custom 404 (`404.html`)**: Automatically served by Cloudflare Pages for any unmatched route with a 404 status.
- **SEO & PWA**: Includes `sitemap.xml`, `robots.txt`, `site.webmanifest`, and favicon icon suite.

## Local Development
Run the local HTTP server in PowerShell:
```powershell
./serve.ps1
```
Visit `http://localhost:8080/` in your browser.

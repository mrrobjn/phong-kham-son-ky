# GitHub Actions Deployment Setup

## Overview
This GitHub Actions workflow automatically deploys your website to GitHub Pages whenever you push to the `main` or `master` branch.

## What it does:
1. ✅ Checks out your code
2. ✅ Updates `config.js` with production URLs
3. ✅ Uploads files to GitHub Pages
4. ✅ Deploys automatically

## Setup Instructions:

### 1. Enable GitHub Pages
- Go to your repository **Settings** → **Pages**
- Under "Build and deployment":
  - Source: **Deploy from a branch**
  - Branch: **gh-pages** (GitHub Actions creates this automatically)

### 2. First Deployment
After enabling GitHub Actions, just push to `main`:
```bash
git add .
git commit -m "Enable GitHub Actions deployment"
git push origin main
```

### 3. Monitor Deployments
- Go to your repository → **Actions** tab
- You'll see the workflow running
- Once complete, your site is live at: `https://mrrobjn.github.io/phong-kham-son-ky`

## Configuration

To change the deployment URL, edit `.github/workflows/deploy.yml` and update:
```javascript
const CONFIG = {
  WEBSITE_URL: 'https://your-custom-domain.com',
  WEBSITE_NAME: 'Phòng khám Sơn Kỳ'
};
```

## Troubleshooting

**Site not updating after push?**
- Check the Actions tab for errors
- Ensure the `gh-pages` branch exists in your repository

**Want to use a custom domain?**
- Update `WEBSITE_URL` in the workflow file
- Add CNAME file to your repository root with your domain

## Local Testing

To test the site locally before pushing:
```bash
# Serve files locally
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

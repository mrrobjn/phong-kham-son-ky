# phong-kham-son-ky

Phòng khám Sơn Kỳ - Static landing page

## 📦 Overview

- Pure HTML/CSS/JS site
- Local image assets in `assets/images`
- SEO-friendly metadata in `index.html`
- No backend required

## ▶️ Run locally

```bash
git clone <repo-url>
cd phongkhamsonky-site
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## 🌐 Deployment

This site can be deployed to GitHub Pages as a static site:
1. Push code to `main` branch.
2. Set repository **Pages** source to **main / root**.
3. Access at `https://<your-username>.github.io/<repo>`.

## 📁 Project structure

```
.
├── index.html
├── styles.css
├── script.js
└── assets/
    └── images/
```

## 🛠️ Asset notes

- Logo and banner: `./assets/images/logo.png`, `./assets/images/banner.png`
- Social preview image: `./assets/images/og-image.png`
- About/Testimonials images in `about/` and `testimonials/`

## 💡 Customize

Update source paths and metadata directly in `index.html`:
- `title`, `description`, `keywords`
- Open Graph / Twitter meta tags
- Local image paths

## ✅ Goals

- Fully local resource load (no external image CDN)
- Lightweight and fast rendering
- Easy manual deployment or CI via GitHub Pages


# phong-kham-son-ky

Phòng khám Sơn Kỳ - Website

## 🚀 Deployment

This site uses **GitHub Actions** for automatic deployment to GitHub Pages.

### Setup
1. Enable GitHub Pages in repository settings (Source: Deploy from branch → gh-pages)
2. Just push to `main` branch - deployment happens automatically
3. Site will be live at: `https://mrrobjn.github.io/phong-kham-son-ky`

See [.github/DEPLOYMENT.md](.github/DEPLOYMENT.md) for detailed instructions.

## 📝 Configuration

Update website URL in `config.js`:
```javascript
const CONFIG = {
  WEBSITE_URL: 'https://yourdomain.com',
  WEBSITE_NAME: 'Phòng khám Sơn Kỳ'
};
```

## 📂 Project Structure

```
.
├── index.html          # Main website
├── styles.css          # Styling
├── script.js           # JavaScript
├── config.js           # Configuration (auto-updated by CI/CD)
├── assets/
│   └── images/         # All website images (local)
└── .github/
    └── workflows/      # GitHub Actions automation
```

## ✅ Features

- ✨ Responsive design
- 🖼️ All images self-hosted (no external dependencies)
- 🔍 SEO optimized with meta tags
- 📱 Mobile-friendly
- ⚡ Fast loading
- 🔄 Automatic CI/CD deployment

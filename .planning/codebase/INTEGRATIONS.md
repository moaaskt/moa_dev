# Integrations & Deployment Map: moa-portfolio

This document maps all external integrations, CDN systems, build configurations, asset paths, and deployment processes that power **moa-portfolio**.

---

## 🌐 External CDN & API Integrations

The project balances local asset bundling with selected external integrations to optimize distribution speed and real-time developer activity presentation.

### 1. Typography (Google Fonts CDN)
Configured via `<link>` tags in [index.html](file:///home/moa-dev/projetos/moa_dev/index.html):
- **CDN Hostnames**: `https://fonts.googleapis.com` & `https://fonts.gstatic.com` (with `crossorigin` attribute).
- **Loaded Families**:
  - `Syne` (weights 700, 800) for Display headers.
  - `DM Sans` (weights 300, 400, 500) for UI controls and body text.
  - `JetBrains Mono` (weight 400) for technical tags, console logs, and badges.

### 2. Tech Brand Badges (Devicons CDN)
- **CDN URL**: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css`
- **Purpose**: Dynamically serves custom technology brand icon font classes (e.g. PHP, Python, Docker, PostgreSQL) used within `src/data/skills.js` and `src/components/sections/Skills.jsx`.

### 3. GitHub REST API Integration (`src/components/sections/GithubProjects.jsx`)
- **Endpoints Used**:
  - `https://api.github.com/users/moaaskt/repos?sort=updated&per_page=6`: Fetches the 6 most recently updated public repositories.
  - `https://api.github.com/repos/moaaskt/{repoName}/commits?author=moaaskt&per_page=1`: Computes commit counts via GitHub `Link` pagination header (`rel="last"`).
- **Rate Limit Safeguards**:
  - Sequential requests with a 180ms delay (`delay(180)`) between repository commit fetches.
  - Graceful fallback UI linking directly to `https://github.com/moaaskt` if rate limits (HTTP 403) or network errors occur.

---

## 🌌 Particle & Background Visual Effects

The visual experience relies on high-performance animations:

### 1. Native HTML5 Canvas 2D Particles (`Hero.jsx`)
- Implemented in `src/components/sections/Hero.jsx` using `requestAnimationFrame`.
- Creates interactive lime green particle nodes with coordinate velocity wrapping and mouse attraction/interaction.
- **Teardown Safeguard**: Clears animation frame handles (`cancelAnimationFrame`) and removes resize listeners on unmount.

### 2. Vanta.js Lifecycle Management Hook (`src/hooks/useVanta.js`)
- Provided as a structured hook to initialize WebGL background effects when configured.
- Implements a retry initialization loop checking for `window.VANTA` and executes `.destroy()` upon component unmount to prevent GPU memory leaks.

---

## ⚙️ Build Script Configuration & Asset Paths

The project uses [vite.config.js](file:///home/moa-dev/projetos/moa_dev/vite.config.js) to configure the compiler, assets, plugins, and deployment paths.

### 1. Critical Base Asset Pathing
The repository is hosted on **GitHub Pages** under a subpath: `https://moaaskt.github.io/moa_dev/`.

> [!IMPORTANT]
> The setting `base: '/moa_dev/'` in `vite.config.js` is the single most critical asset routing configuration.

- **The Problem**: Default absolute paths (e.g. `<script src="/assets/index-xxx.js">`) resolve to root domain (`https://moaaskt.github.io/assets/...`) resulting in **404 Resource Not Found** errors.
- **The Solution**: Setting `base: '/moa_dev/'` guarantees all asset references in `index.html` are prefixed with `/moa_dev/`.

### 2. Vite Config Blueprint
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/moa_dev/',
})
```

---

## 🚀 GitHub Pages Deployment Pipeline

Automated deployment is fully orchestrated using npm scripts and the `gh-pages` dependency package.

### 1. Deployment Scripts in `package.json`
- **Homepage Declaration**: `"homepage": "https://moaaskt.github.io/moa_dev/"`
- **Build & Deploy Pipeline**:
  - `predeploy`: `"npm run build"` -> Compiles resources, bundles Javascript chunks, minifies styles into `dist/`.
  - `deploy`: `"gh-pages -d dist"` -> Pushes `dist/` directory directly onto the repository's `gh-pages` branch on GitHub.

### 2. Deployment Execution
To build and publish live updates:
```bash
npm run deploy
```

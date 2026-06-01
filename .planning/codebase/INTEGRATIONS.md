# Integrations & Deployment Map: moa-portfolio

This document maps all external integrations, CDN systems, build configurations, asset paths, and deployment processes that power **moa-portfolio**.

---

## 🌐 External CDN Integrations

To keep the bundle size small and load resources dynamically, the project links to external Content Delivery Networks (CDNs) directly in [index.html](file:///home/moadev/projetos/moa-portfolio/index.html).

### 1. Typography (Google Fonts CDN)
Direct integrations establish preconnections for optimized handshakes:
- **CDN Hostnames**: `https://fonts.googleapis.com` & `https://fonts.gstatic.com` (with `crossorigin` attribute).
- **Loaded Families**:
  - `Syne` (weights 700, 800) for Display headers.
  - `DM Sans` (weights 300, 400, 500) for UI controls and body text.
  - `JetBrains Mono` (weight 400) for technical tags, console logs, and badges.

### 2. Tech Brand Badges (Devicons CDN)
- **CDN URL**: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css`
- **Purpose**: Dynamically serves custom technology brand icons (e.g. PHP, Python, Docker, PostgreSQL) without bloating the SVG assets folder inside the source directory.

---

## 🌌 Vanta.js Dots Background Integration

The project has architectural requirements for **Vanta.js DOTS**, a WebGL-powered 3D animated particle background system.

### 1. The Component Lifecycle Hook (`useVanta.js`)
Because Vanta.js binds a canvas context directly into the DOM and initializes active WebGL loops, memory leaks will happen if hot reloading occurs or a component unmounts without proper teardown. 

The custom [useVanta.js](file:///home/moadev/projetos/moa-portfolio/src/hooks/useVanta.js) hook manages this gracefully:
- **Polling Loop**: Vanta relies on global script objects. The hook attempts initialization up to 10 times in intervals of 100ms, checking for `window.VANTA`.
- **Teardown Safeguard**: Calls `.destroy()` on the active instance on component unmount, preventing GPU memory bloat.

### 2. Target WebGL Configuration
When Vanta.js initializes, it binds to the DOM using this design system configuration:
```javascript
VANTA.DOTS({
  el: "#hero-vanta",        // Targets the container element ID
  mouseControls: true,      // Dot interactive distortion following mouse pointer
  touchControls: true,      // Interactive support for mobile drag inputs
  gyroControls: false,     // Disabled to prevent accelerometer drain on mobile
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xb8f73c,          // Lime green accent dot color (var(--accent))
  color2: 0x888888,         // Slate grey background dots (var(--text-secondary))
  backgroundColor: 0x080808, // Main dark slate tone (var(--bg-primary))
  size: 2.5,
  spacing: 35.0,
  showLines: false          // Renders only clean particle orbits
})
```

### 3. Lightweight Fallback / Canvas Alternative
In [Hero.jsx](file:///home/moadev/projetos/moa-portfolio/src/components/sections/Hero.jsx#L43-L91), an active HTML5 Canvas context is utilized as a native high-performance fallback/alternative particle system. It creates `120` lime green accent dots with mild velocity vector coordinates (`dx`, `dy`), moving them dynamically and wrapping bounds in response to window sizes. 

This guarantees a premium aesthetic experience even if WebGL is disabled or scripts are blocked by network policies.

---

## ⚙️ Build Script Configuration & Asset Paths

The project uses [vite.config.js](file:///home/moadev/projetos/moa-portfolio/vite.config.js) to configure the compiler, assets, plugins, and deployment paths.

### 1. Critical Base Asset Pathing
The repository serves the site on **GitHub Pages**, which maps page directories under a custom subdirectory path: `https://moaaskt.github.io/moa_dev/`.

> [!IMPORTANT]
> The setting `base: '/moa_dev/'` in `vite.config.js` is the single most critical asset routing configuration.

- **The Problem**: By default, Vite bundles assets using absolute paths (e.g. `<script src="/assets/index-xxx.js">`). On GitHub Pages, absolute root paths point to `https://moaaskt.github.io/assets/...`, resulting in immediate **404 Resource Not Found** errors.
- **The Solution**: Setting `base: '/moa_dev/'` instructs the compiler to prefix every compiled tag link with `/moa_dev/` (e.g. `/moa_dev/assets/index-xxx.js`), ensuring resources resolve flawlessly relative to the hosting context.

### 2. Vite Config Blueprint
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/moa_dev/',   // Critical relative base subpath for GitHub Pages routing
  build: {
    outDir: 'dist',     // Target build output folder name
    assetsDir: 'assets', // Target subdirectory for compiled JS/CSS resources
  },
})
```

---

## 🚀 GitHub Pages Deployment Pipeline

Automated deployment is fully orchestrated using the local dev script suite and the `gh-pages` npm dependency package.

### 1. Deployment Variables in `package.json`
- **Homepage Declarator**: `"homepage": "https://moaaskt.github.io/moa_dev/"` tells standard deployment plugins where the final live distribution is mapped.
- **Scripts Pipeline**:
  - `predeploy`: `"npm run build"` -> Compiles resources, bundles Javascript chunks, minifies CSS styles, and output static files inside the `/dist` directory.
  - `deploy`: `"gh-pages -d dist"` -> Automates uploading `/dist` directory directly onto the repository's host branch.

### 2. Behind the Scenes of `gh-pages`
When `npm run deploy` is executed, the following actions happen:
1. **Local Compilation**: Vite outputs static resources in `dist/`.
2. **Local Commit**: The `gh-pages` CLI creates a local temporary Git branch (typically named `gh-pages`).
3. **Asset Insertion**: It copies all files from `/dist` directly into the root level of this branch.
4. **Remote Push**: It pushes the branch to your GitHub remote (`origin/gh-pages`), replacing old builds cleanly.

### 3. GitHub Pages Setup Requirements
To ensure the live link loads correctly, verify these remote repository options:
1. Navigate to the GitHub repository on the web.
2. Select **Settings** > **Pages** from the sidebar.
3. Under the **Build and deployment** section, select **Deploy from a branch** under Source.
4. Under Branch, select **`gh-pages`** and keep the root path `/ (root)`. Click **Save**.
5. The GitHub Action runner will activate and update the production environment under `https://moaaskt.github.io/moa_dev/`.

# Codebase Concerns, Limitations, Risks, and Technical Debt (`CONCERNS.md`)

This document aggregates critical engineering concerns, operational risks, performance constraints, and architectural guidelines for the `moa-portfolio` codebase. Reviewing this document is mandatory before implementing new features, refactoring components, or deploying updates.

---

## 1. Build Base Path Configuration Risk (`base: '/moa_dev/'`)

### Context
The portfolio is deployed to GitHub Pages at the URL `https://moaaskt.github.io/moa_dev/`. Because the site is served from a nested path (`/moa_dev/`) rather than the domain root, all build asset references must be explicitly prefixed with this base path.

### Critical Risk
If the base path configuration is removed, corrupted, or set to `/`, the compiled HTML will point to absolute root-level assets (e.g., `/assets/index.js`), which will result in **404 Asset Loading Errors** on GitHub Pages. The page will render entirely blank (white screen).

### Configuration Source of Truth
*   **Vite Configuration ([vite.config.js](file:///home/moa-dev/projetos/moa_dev/vite.config.js)):**
    ```javascript
    export default defineConfig({
      plugins: [react(), tailwindcss()],
      base: '/moa_dev/', // CRITICAL: Mandatory base prefix for GitHub Pages assets
    })
    ```
*   **Deployment Configuration ([package.json](file:///home/moa-dev/projetos/moa_dev/package.json)):**
    ```json
    "homepage": "https://moaaskt.github.io/moa_dev/",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

### Prevention & Guardrails
1.  **Strict Vite Config Preservation:** Never change `base` to `'/'` or omit it.
2.  **Asset Import Check:** All local images, SVGs, or media files must be loaded via relative ES imports (e.g., `import profileImg from '../../assets/moacir-profile.png'`).

---

## 2. Canvas & Animation Teardown (Memory Leak Prevention)

### Context
The application uses interactive background canvas particle simulations and custom mouse follower animations (`requestAnimationFrame`, window resize/scroll listeners).

### The Leak Risk
If an animation loop or canvas is initialized inside a React component and is **not explicitly destroyed on component unmount**, it will continue running in the background, consuming CPU/GPU cycles and accumulating dangling event listeners.

### Prevention Guidelines
*   **Canvas Teardown in `Hero.jsx`:** Always cancel animation frame handles (`cancelAnimationFrame`) and remove window resize listeners in the `useEffect` cleanup return.
*   **Vanta Hook in `useVanta.js`:** Ensure `.destroy()` is called on unmount.
*   **Custom Cursor in `CustomCursor.jsx`:** Ensure mousemove listeners and rAF loops are properly unmounted.

---

## 3. GitHub API Rate Limiting (`GithubProjects.jsx`)

### Context
The `GithubProjects.jsx` component queries the GitHub REST API (`https://api.github.com/users/moaaskt/repos` and commits endpoints) directly from the client browser without an API key.

### Constraints & Mitigation
*   **Rate Limits:** Unauthenticated GitHub API requests are limited to 60 requests/hour per IP address.
*   **Mitigation in Place:**
    1. Requests are limited to 6 repositories (`per_page=6`).
    2. Commit fetching introduces a sequential delay (`delay(180)`).
    3. If an error or HTTP 403 occurs, a graceful fallback UI renders with a direct link to the user's GitHub profile.

---

## 4. Mobile & Touch Screen Optimization (< 768px)

### Constraints
*   **Custom Cursor:** The mouse follower circle (`CustomCursor.jsx`) must be hidden on mobile/touch screens via CSS media queries (`display: none`).
*   **Responsive Grids:** Project cards and GitHub cards must collapse to single columns (`grid-template-columns: 1fr`) on mobile devices.
*   **Mobile Drawer:** The mobile navigation drawer must trap scroll appropriately and provide clean closing triggers (Escape key, overlay backdrop click, link navigation).

---

## 5. Zero Third-Party UI Library Constraint

### Context
The design of `moa-portfolio` is entirely customized. Commercial component kits (e.g., Material UI, Chakra UI, shadcn/ui) are intentionally excluded.

### Benefits & Rules
*   **Zero Bloat:** Minimal JS bundle and rapid loading.
*   **Design Consistency:** All UI components use centralized variables declared in `src/styles/globals.css`.

---

## 6. Accessibility (a11y) Requirements

*   **WCAG AA Contrast:** Body text must maintain at least a `4.5:1` contrast ratio against dark backgrounds.
*   **Interactive Icon Labels:** Icon-only elements must include descriptive `aria-label` attributes.
*   **Keyboard Navigation:** Interactive links and buttons must display clear `:focus-visible` styling.
*   **Reduced Motion:** Respect `prefers-reduced-motion` settings for sensitive users.

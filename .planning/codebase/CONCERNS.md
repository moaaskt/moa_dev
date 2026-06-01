# Codebase Concerns, Limitations, Risks, and Technical Debt (`CONCERNS.md`)

This document aggregates critical engineering concerns, operational risks, performance constraints, and architectural guidelines for the `moa-portfolio` codebase. Reviewing this document is mandatory before implementing new features, refactoring components, or deploying updates.

---

## 1. Build Base Path Configuration Risk (`base: '/moa_dev/'`)

### Context
The portfolio is deployed to GitHub Pages at the URL `https://moaaskt.github.io/moa_dev/`. Because the site is served from a nested path (`/moa_dev/`) rather than the domain root, all build asset references must be explicitly prefixed with this base path.

### Critical Risk
If the base path configuration is removed, corrupted, or set to `/`, the compiled HTML will point to absolute root-level assets (e.g., `/assets/index.js`), which will result in **404 Asset Loading Errors** on GitHub Pages. The page will render entirely blank (white screen), and the console will be filled with failed resource requests.

### Configuration Source of Truth
*   **Vite Configuration ([vite.config.js](file:///home/moadev/projetos/moa-portfolio/vite.config.js)):**
    ```javascript
    export default defineConfig({
      plugins: [react(), tailwindcss()],
      base: '/moa_dev/', // CRITICAL: Mandatory base prefix for GitHub Pages assets
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
      },
    })
    ```
*   **Deployment Configuration ([package.json](file:///home/moadev/projetos/moa-portfolio/package.json)):**
    ```json
    "homepage": "https://moaaskt.github.io/moa_dev/",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

### Prevention & Guardrails
1.  **Strict Vite Config Preservation:** Never change `base` to `'/'` or omit it. If a local test for root-level deployment is required, do not commit the modified `base` configuration.
2.  **Asset Import Check:** All local images, SVGs, or media files must be loaded via relative ES imports (e.g., `import profileImg from '../../assets/images/profile.jpg'`) or referenced using standard React paths, allowing Vite to resolve and prefix them correctly during bundling.

---

## 2. Vanta.js & Custom Canvas Memory Leaks

### Context
The application uses dynamic background canvas simulations to impress recruiters. These backgrounds rely on heavy math, WebGL contexts, high-frequency render loops (`requestAnimationFrame`), and window resize listeners.

### The Leak Risk
If a canvas particle simulation or Vanta.js effect is initialized inside a React component (e.g., the `Hero` section) and is **not explicitly destroyed on component unmount**, it will continue running in the background. Each time the user visits or navigates (if routing is added), new render loops and event listeners accumulate. This leads to:
*   Continuous, runaway CPU and GPU usage.
*   Accumulation of dangling canvas elements in memory.
*   Drastic reduction in frame rate (FPS drop) and eventual browser tab crash.

### Implementation Audit
*   **Vanta Hook ([useVanta.js](file:///home/moadev/projetos/moa-portfolio/src/hooks/useVanta.js)):** This hook features a proper cleanup listener using the `.destroy()` API exposed by Vanta.js:
    ```javascript
    return () => {
      if (vantaInstance.current) {
        vantaInstance.current.destroy();
        vantaInstance.current = null;
      }
    };
    ```
*   **Manual Particles ([Hero.jsx](file:///home/moadev/projetos/moa-portfolio/src/components/sections/Hero.jsx)):** The custom canvas-based particle generator must implement robust memory disposal upon unmounting.
    ```javascript
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animId); // Crucial to stop the requestAnimationFrame loop
      window.removeEventListener('resize', resize); // Stop window pollution
    };
    ```

### Prevention Guidelines
*   **Always Cleanup Hooks:** Every custom animation hook or `useEffect` containing event listeners or `requestAnimationFrame` must return a cleanup function.
*   **WebGL Verification:** When integrating interactive three.js/WebGL effects, ensure WebGL contexts are properly disposed of to prevent the GPU context from exhausting.

---

## 3. Vanta.js & Animation Performance on Mobile (< 480px)

### Context
Dynamic canvases (Vanta, particle grids, SVG animations) have high resource consumption. Mid-range and entry-level mobile devices struggle with simultaneous scroll operations and complex physics math, causing jagged scrolling and severe battery drain.

### Constraints
*   **Performance Cap:** Dynamic animations, custom canvas calculations, and interactive cursors **must be deactivated or bypassed completely on viewports smaller than 480px**.
*   **Mobile Experience:** The fallback style must render a clean, high-performance static visual (like a simple solid dark CSS background or a CSS-only subtle radial gradient).

### Implementation Checklist
1.  **Width Conditional Checks:** Within custom canvas hooks or `useEffect` wrappers, conditionally check the window width:
    ```javascript
    useEffect(() => {
      if (window.innerWidth < 480) return; // Completely skip WebGL/Canvas init on mobile
      // ... initialization code
    }, []);
    ```
2.  **CSS Media Query Fallbacks:** Use responsive Tailwind utility classes or raw CSS variables to ensure appropriate typography, spacing, and layout scaling are adjusted without requiring heavy Javascript-calculated heights.

---

## 4. State Management and Props Drilling Limits

### Architectural Decision
To keep the bundle size small and avoid over-engineering, the codebase operates under a **Zero External State Manager** rule. There is **no** Redux, Zustand, Recoil, or MobX.

### Constraints
1.  **Prop Drilling Limit:** A maximum of **2 levels of prop drilling** is permitted (e.g., Parent → Child → Subchild).
2.  **Escape Hatches:** If state needs to traverse deeper or be shared globally:
    *   **Component Composition:** Pass fully formed child components as props rather than passing data down (e.g., using `children`).
    *   **Simple React Context:** If composition is insufficient, instantiate a highly atomic and single-purpose `React.createContext()` instance. Do not store massive, highly active states in a single global context to avoid unnecessary re-renders.

### Code Smell Safeguard
Avoid nesting data structures. Keep component structures local, flat, and simple. Let UI components drive their state independently whenever possible.

---

## 5. Zero Third-Party UI Library Constraint

### Context
The design of `moa-portfolio` is entirely customized to create an immersive, premium personal brand. Ready-made UI frameworks (e.g., Material UI, Chakra UI, shadcn/ui) are strictly prohibited.

### Architectural Risks & Challenges
*   **Wheel Reinvention:** Custom buttons, badges, scrollbars, cursors, drawers, and grid layouts must be designed and built from scratch using Tailwind CSS and standard React.
*   **Utility & Consistency:** Developers must follow the Design System defined in the UI design skill (`SKILL-portfolio-ui-design.md`) strictly, referencing global CSS variables (`--bg-primary`, `--accent`, etc.) to prevent style divergence.
*   **Layout Safety:** Custom interactive components (like custom drawers or dropdowns) must be thoroughly checked against browser compatibility bugs, particularly Safari on iOS which commonly exhibits flex and backdrop-filter glitches.

### Benefits
*   **Zero CSS/JS Bloat:** Immediate PageSpeed optimization.
*   **Brand Integrity:** The visual aesthetic remains completely customized, preventing the generic look typical of templates.

---

## 6. Responsive and Mobile-First Guidelines

### Breakpoints Definition
The grid and layout configurations must align with the standard mobile-first Tailwind thresholds:
*   `sm`: `480px` (mobile viewport boundary)
*   `md`: `768px` (tablets / projects grid columns limit)
*   `lg`: `1024px` (laptops)
*   `xl`: `1280px` (desktop monitors)

### Critical Rules
*   **Projects Grid:** Must collapse to exactly 1 column on screens below `768px` to guarantee legibility of project details.
*   **Navigation Menu:** Must transform into a sliding drawer sidebar (`Navbar` hamburger component) on devices smaller than `768px`.
*   **Custom Cursor:** The custom cursor circle (`CustomCursor.jsx`) must be hidden entirely on mobile devices since hover is nonexistent on touch interfaces.

---

## 7. Accessibility (a11y) Requirements

To present a professional, production-ready portfolio to prospective recruiters, accessibility compliance is paramount.

### Core Safeguards
1.  **Contrast Standards (WCAG AA):**
    *   Body text must maintain at least a `4.5:1` contrast ratio.
    *   Headers and large text must maintain at least a `3:1` contrast ratio.
    *   The signature color, electric lime (`--accent: #b8f73c`), provides an excellent contrast ratio (12.2:1) when rendered over `--bg-primary` (`#080808`). However, it must never be used over light backgrounds.
2.  **Keyboard Navigability:**
    *   All interactive elements must be focusable via `Tab`.
    *   Custom buttons and links must use logical tab index ordering and maintain high-visibility focus borders (`focus-visible`).
3.  **Screen Readers & Interactive Elements:**
    *   Ensure all project cards, icons, and dynamic widgets contain clear `aria-label` text describing their function (especially raw SVG social media buttons in `Footer.jsx` and `Hero.jsx`).
    *   Image assets must include description-specific `alt` attributes.
4.  **Reduced Motion Support:**
    *   Ensure animations respect the user's operating system preferences. Disable entry transitions and panning backgrounds if the user has requested reduced motion (`prefers-reduced-motion`).
    ```css
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-delay: 0s !important;
        animation-duration: 0s !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0s !important;
        scroll-behavior: auto !important;
      }
    }
    ```

---

## 8. Technical Debt & Code Smell Checklist

Before merging any code, verify it does not introduce technical debt:
*   [ ] **The Newspaper Metaphor:** High-level details are at the top, low-level component logic at the bottom.
*   [ ] **Function Limits:** Ensure React components are smaller than `150` lines of code. Break down large files into atomic visual/logic chunks.
*   [ ] **State Cleanliness:** No `null` is returned or passed blindly to components without fallback rendering.
*   [ ] **Clean Imports:** Ensure imports follow the structured hierarchy (React → Third-party library → Internal UI elements → CSS styles).

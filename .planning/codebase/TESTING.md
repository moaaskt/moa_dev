# Testing and Quality Verification Guide

This document provides a comprehensive overview of the quality assurance, static analysis, automated end-to-end (E2E) testing framework, and manual validation checklists for `moa-portfolio`.

---

## 🔍 Static Analysis & Linting

We use **ESLint v9** with flat configurations for static analysis of the React codebase to maintain syntax hygiene and prevent structural bugs.

### 1. ESLint Configuration File
The static rule definitions are defined in [eslint.config.js](file:///home/moadev/projetos/moa-portfolio/eslint.config.js):

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

### 2. Custom Lint Rules Explained
*   **Vite Dev Server Ignores:** The build output folder `dist/` is globally ignored.
*   **React Hooks Enforcement:** Extends `eslint-plugin-react-hooks/recommended` to guarantee proper state ordering and complete hook dependency arrays.
*   **Hot Module Replacement (HMR):** Extends `eslint-plugin-react-refresh/vite` to ensure simple exports and reliable rendering.
*   **Capitals in Unused Variables (`no-unused-vars`):** We enforce code clean-up on unused items but ignore items matching `^[A-Z_]`. This allows us to define capital letters variables, hooks, or sub-components inside template layers without triggering premature compile-time errors during active prototyping.

### 3. Execution Commands
To lint the entire workspace code base:
```bash
npm run lint
```

---

## 🎭 Playwright End-to-End (E2E) Testing

Playwright is configured under `@playwright/test` for E2E integration and user-flow validation, ensuring that all components render correctly in actual headless and headed browsers.

### 1. Test Setup Strategy
For a modern React portfolio, automated integration tests focus on visual regression, link accessibility, routing, interactive sections, and local state validation.
Test specs are organized under a `/tests/` directory at the workspace root:

```
moa-portfolio/
├── tests/
│   ├── hero.spec.js           # Hero rendering and Vanta canvas validation
│   ├── projects.spec.js       # Filtering logic, card interactions, and hover effects
│   ├── accessibility.spec.js  # Color contrast, focus outline navigation, and alt text checks
│   └── loader.spec.js         # Session storage loader behavior
```

### 2. Recommended `playwright.config.js`
Create or configure the Playwright runner at the workspace root to automate local server spinups and run parallel cross-browser runs:

```javascript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173/moa_dev/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173/moa_dev/',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
});
```

### 3. Example E2E Test Suite (`tests/loader.spec.js`)
Here is a baseline spec confirming the custom page loader flow and session storage integration:

```javascript
import { test, expect } from '@playwright/test';

test.describe('First-time Visitor Loader Flow', () => {
  test('should show loader on first visit and skip on reload', async ({ page }) => {
    // 1. Visit the home page
    await page.goto('/');

    // 2. The loader should be visible initially
    const loader = page.locator('text=moa(dev)');
    await expect(loader).toBeVisible();

    // 3. Wait for the loader to fade out (takes ~1.5s)
    await page.waitForTimeout(2000);
    await expect(loader).not.toBeVisible();

    // 4. Reload the page
    await page.reload();

    // 5. The loader should be skipped instantly using Session Storage flags
    const fastLoader = page.locator('text=moa(dev)');
    await expect(fastLoader).not.toBeVisible();
  });
});
```

### 4. Playwright Execution Commands
Run the E2E testing operations via the command line:

```bash
# Run all tests headlessly across configured engines (Chrome, Firefox, Safari)
npx playwright test

# Launch the interactive UI Mode (highly recommended for live debugging)
npx playwright test --ui

# Run tests on a specific browser engine
npx playwright test --project=chromium

# Debug a specific spec file in headed window
npx playwright test tests/projects.spec.js --debug

# View HTML summary report after completion
npx playwright show-report
```

---

## 🛠️ Complete Workspace Command Line Directory

Below are the primary commands required for local development, production compiling, static checks, and deployments:

| Task | Command | Description |
|---|---|---|
| **Development** | `npm run dev` | Spins up the local Vite hot-reload server at `http://localhost:5173/moa_dev/` |
| **Linting** | `npm run lint` | Runs ESLint across all `.js` and `.jsx` files inside [src/](file:///home/moadev/projetos/moa-portfolio/src) |
| **Static Build** | `npm run build` | Bundles static production assets under [dist/](file:///home/moadev/projetos/moa-portfolio/dist) (runs predeploy hook) |
| **Build Preview** | `npm run preview` | Spins up a local web server to preview static files compiled in the dist directory |
| **Deploy** | `npm run deploy` | Bundles production build and pushes direct to remote `gh-pages` deployment branch |
| **E2E Testing** | `npx playwright test` | Executes E2E tests across Chromium, Firefox, WebKit, and mobile viewport simulations |

---

## 📋 Manual Verification & Quality Gates Checklist

Before submitting code reviews, tagging releases, or merging changes to main branches, developers must execute this multi-pillar manual check.

### 🏛️ Pillar 1: Visual Layout & Micro-interactions
- [ ] **Custom Cursor:** Circle element is active on desktop screens, matches lime `--accent` variables, tracks mouse coordinates smoothly without lag, and scales up on hover elements.
- [ ] **Scroll Progress:** Linear indicator element at the screen header matches `--accent` and correctly represents page scroll progress percentages.
- [ ] **Hero Vanta Background:** DOTS simulation starts instantly. Verify that spacing, colors, and mouse interaction match the design specification.
- [ ] **Vanta.js Memory Leak Prevention:** Open developer tools, mount/unmount the Hero component (or navigate between sub-components), and verify that Vanta.js does not leak canvas elements or cause memory overhead.
- [ ] **Project Cards Hover:** Border switches from standard `--border` to `--border-accent`, shadows trigger `--accent-glow`, and inner images transition to `scale(1.03)` with `overflow: hidden` bounding.
- [ ] **CTA Hover Transitions:** Buttons slide smoothly or fill transitions execute on mouse hovers under standard `transition: all 0.25s ease`.

### 📱 Pillar 2: Responsive Adaptability
- [ ] **Desktop Grid (1024px+):** Featured project cards span two columns horizontally, standard cards fit three/two columns depending on grid limits.
- [ ] **Mobile Grid (< 768px):** All grids collapse down into single columns. Font sizes clamp fluidly without wrapping errors.
- [ ] **Mobile Navigation Menu:** Desktop menu elements disappear. Responsive hamburger trigger shows up, opening a smooth sliding right-to-left drawer menu containing page anchor links.
- [ ] **Mobile Vanta Suppression:** Ensure Vanta canvas effects are suppressed on small screen widths (< 480px) to maximize mobile processor rendering capacity.
- [ ] **No Custom Cursor on Mobile:** Mouse cursors are suppressed or fallback to system taps on touch screens (< 768px).

### ♿ Pillar 3: Accessibility & Standards Compliance
- [ ] **Screen Contrast:** Run browser testing tools (e.g. Lighthouse, Axe) and verify contrast satisfies minimum 4.5:1 WCAG AA standards.
- [ ] **Descriptive Alt text:** All image tags are labeled with proper text content describing projects or graphics.
- [ ] **Interactive Aria Labels:** External links that only output SVGs (such as target links for GitHub and Live URL buttons) include readable `aria-label` tags.
- [ ] **Keyboard Focus Indicators:** Tab through the entire site using only the keyboard. Confirm a visible outline matches `--accent` and offset spacing.
- [ ] **Reduced Motion Sensitivity:** Enable system settings for reduced motion and confirm that entry animations, transitions, and marquees execute instantly or at 0ms.

### 📂 Pillar 4: Setup & Configurations
- [ ] **First-Time Loader:** Open a clean incognito window. The loading animation must run for exactly 1.5 seconds. Re-loading the page or shifting tabs must bypass the loader through the active session storage flag.
- [ ] **SEO Meta Tags:** Confirm the title matches Moacir Neto's requirements. Check that OpenGraph tags, SVG favicon (`public/favicon.svg`), and base metadata resolve correctly.
- [ ] **Vite Asset Deployment:** Check that `base: '/moa_dev/'` in `vite.config.js` is correct. Assets should compile inside the distribution build directory pointing to appropriate relative folder tracks.

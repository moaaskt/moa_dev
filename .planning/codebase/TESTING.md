# Testing and Quality Verification Guide

This document provides a comprehensive overview of the quality assurance, static analysis, automated end-to-end (E2E) testing framework, and manual validation checklists for `moa-portfolio`.

---

## 🔍 Static Analysis & Linting

We use **ESLint v9** with flat configurations for static analysis of the React codebase to maintain syntax hygiene and prevent structural bugs.

### 1. ESLint Configuration File
The static rule definitions are defined in [eslint.config.js](file:///home/moa-dev/projetos/moa_dev/eslint.config.js):

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
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^(motion|[A-Z_].*)$',
          argsIgnorePattern: '^Icon$'
        }
      ],
    },
  },
])
```

### 2. Execution Commands
To lint the entire workspace code base:
```bash
npm run lint
```

---

## 🎭 Playwright End-to-End (E2E) Testing

Playwright is configured under `@playwright/test` for E2E integration and user-flow validation, ensuring that all components render correctly in actual headless and headed browsers.

### 1. Test Setup Strategy
Integration tests focus on visual regression, link accessibility, navigation routing, interactive sections, GitHub repo card rendering, and local state validation.

### 2. Playwright Runner Blueprint
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
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
```

### 3. Execution Commands
```bash
# Run all tests headlessly
npx playwright test

# Launch the interactive UI Mode
npx playwright test --ui
```

---

## 🛠️ Complete Workspace Command Line Directory

Below are the primary commands for local development, production compiling, static checks, and deployments:

| Task | Command | Description |
|---|---|---|
| **Development** | `npm run dev` | Spins up the local Vite hot-reload server at `http://localhost:5173/moa_dev/` |
| **Linting** | `npm run lint` | Runs ESLint across all `.js` and `.jsx` files inside `src/` |
| **Static Build** | `npm run build` | Bundles static production assets under `dist/` |
| **Build Preview** | `npm run preview` | Spins up a local web server to preview static files compiled in `dist/` |
| **Deploy** | `npm run deploy` | Bundles production build (`predeploy`) and pushes to `gh-pages` branch |
| **E2E Testing** | `npx playwright test` | Executes Playwright E2E test suites |

---

## 📋 Manual Verification & Quality Gates Checklist

Before submitting code reviews, tagging releases, or merging changes:

### 🏛️ Pillar 1: Visual Layout & Micro-interactions
- [ ] **Custom Cursor:** Smooth tracking on desktop, disabled on touch devices (< 768px).
- [ ] **Scroll Progress:** Linear bar at header matches `--accent` and tracks page scroll percentage.
- [ ] **Hero Particles:** Canvas 2D simulation renders smoothly and disposes event listeners on unmount.
- [ ] **Project Cards Hover:** Border switches to `--accent`, subtle shadow glow, and clean transition.

### 📱 Pillar 2: Responsive Adaptability
- [ ] **Desktop Grid (1024px+):** Multi-column project and GitHub grid.
- [ ] **Mobile Viewport (< 768px):** Grids collapse to single columns; mobile drawer menu functions via hamburger button and closes on link click or Escape key.

### ♿ Pillar 3: Accessibility & Standards Compliance
- [ ] **Screen Contrast:** Satisfies WCAG AA minimum 4.5:1.
- [ ] **Descriptive Alt text:** All images have explicit `alt` tags.
- [ ] **Interactive Aria Labels:** Icon-only buttons and links have `aria-label`.
- [ ] **Keyboard Focus Indicators:** Tab navigation shows clear `:focus-visible` outline.

### 📂 Pillar 4: Setup & Deployment
- [ ] **First-Time Loader:** App loader shows for 1.5s on first visit, bypassed on subsequent page navigations via `sessionStorage`.
- [ ] **Vite Asset Deployment:** `base: '/moa_dev/'` in `vite.config.js` properly configured for GitHub Pages hosting.

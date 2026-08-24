# Coding Conventions and Style Guidelines

This document defines the coding standards, patterns, and design system rules for `moa-portfolio`. All developers and AI assistants must strictly adhere to these guidelines to ensure consistency, accessibility, and high performance.

---

## 📂 Project Architecture Overview

The project structure is organized as follows. All paths are relative to the workspace root:

*   [src/components/layout/](file:///home/moa-dev/projetos/moa_dev/src/components/layout) — Core layout elements (`Navbar.jsx`, `Footer.jsx`)
*   [src/components/sections/](file:///home/moa-dev/projetos/moa_dev/src/components/sections) — Main page sections (`Hero.jsx`, `About.jsx`, `Projects.jsx`, `Skills.jsx`, `Experience.jsx`, `GithubProjects.jsx`, `Contact.jsx`)
*   [src/components/ui/](file:///home/moa-dev/projetos/moa_dev/src/components/ui) — Atom-level reusable UI components (`CustomCursor.jsx`, `ScrollProgress.jsx`, `SectionHeader.jsx`, `SkillBadge.jsx`, `TechIcon.jsx`, `TechMarquee.jsx`, `AboutPortrait.jsx`, `ProjectCard.jsx`)
*   [src/data/](file:///home/moa-dev/projetos/moa_dev/src/data) — Single source of truth for portfolio contents (`projects.js`, `skills.js`, `experience.js`, `contacts.js`, `techIcons.js`)
*   [src/hooks/](file:///home/moa-dev/projetos/moa_dev/src/hooks) — Custom React hooks for effects and interactions (`useScrollAnimation.js`, `useVanta.js`)
*   [src/styles/](file:///home/moa-dev/projetos/moa_dev/src/styles) — Design system stylesheets (`globals.css`, `animations.css`, `about-portrait.css`)
*   [src/utils/](file:///home/moa-dev/projetos/moa_dev/src/utils) — Reusable utility methods (`cn.js`)

---

## ⚛️ React & JavaScript Coding Standards

### 1. Functional Components
All components must be written as modern functional components using React hooks.
*   **One Component Per File:** Each source file in `src/components/` must export exactly one component.
*   **Destructured Props:** Destructure props directly in the function signature for clarity:
    ```javascript
    function ProjectCard({ project, priority }) { ... }
    ```

### 2. State & Hooks Guidelines
*   **Local State Management:** Use the `useState` hook for local component state.
*   **Effect Cleanups:** Always return a cleanup function in `useEffect` to prevent memory leaks (event listeners, intervals, animation frames).
*   **Zero Heavy State Libraries:** Do not install Redux, Zustand, or complex global stores; the application remains lightweight and localized.
*   **Custom Hooks:** Extract side-effects and browser APIs into custom hooks under [src/hooks/](file:///home/moa-dev/projetos/moa_dev/src/hooks).

---

## 🔀 Mandatory Import Ordering

To ensure import block readability and prevent merge conflicts, all JavaScript/React files must structure imports in a **strict five-step order** with single blank lines separating each block:

```javascript
// 1. React, Core Hooks, and Native Packages
import { useState, useEffect, useRef } from 'react';

// 2. Third-Party Libraries (Framer Motion, Lucide Icons, React Icons)
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

// 3. Reusable UI Components & Layout Elements
import ProjectCard from '../ui/ProjectCard';
import SectionHeader from '../ui/SectionHeader';

// 4. Data Layer, Configuration, and Custom Hooks / Utilities
import { projects } from '../../data/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cn } from '../../utils/cn';

// 5. CSS Stylesheets and Module CSS
import '../../styles/animations.css';
```

---

## 🎨 Design System & CSS Variable Guidelines

Styling is achieved using **Tailwind CSS v4** combined with custom CSS custom properties (variables) defined in [src/styles/globals.css](file:///home/moa-dev/projetos/moa_dev/src/styles/globals.css).

### 1. Color Palette Tokens
All colors are strictly managed through CSS variables. **Do not hardcode arbitrary hex colors in JSX.**

*   `--bg-primary: #080808;` — Primary background (almost pure black)
*   `--bg-secondary: #0f0f0f;` — Cards background, alternating sections
*   `--bg-elevated: #161616;` — Hover states, modal popups, active cursor elements
*   `--accent: #b8f73c;` — Electric lime green accent for active items, hover states, interactive cursors, and main calls to action (CTAs)
*   `--accent-dim: #8ab82a;` — Darker green for hover states on buttons
*   `--accent-glow: rgba(184, 247, 60, 0.15);` — Transparent green shadow backdrop
*   `--text-primary: #f0f0f0;` — Body headings and readable text
*   `--text-secondary: #888888;` — Muted supporting labels and paragraphs
*   `--text-muted: #444444;` — Form borders and dividers
*   `--border: rgba(255, 255, 255, 0.06);` — Standard light boundary
*   `--border-accent: rgba(184, 247, 60, 0.3);` — Highlighted state border

> [!IMPORTANT]
> **The 90/10 Rule:** Maintain a strict color distribution of 90% dark neutrals (`--bg-primary`, `--bg-secondary`) and only 10% electric accent (`--accent`).

### 2. Typography Scale
Custom Google Fonts are preloaded in [index.html](file:///home/moa-dev/projetos/moa_dev/index.html) and specified as follows:
*   **Hero / Display Titles:** `'Syne', sans-serif` (font weights 700, 800)
*   **Body & Navigation UI:** `'DM Sans', sans-serif` (font weights 300, 400, 500)
*   **Coding/Tech Tags:** `'JetBrains Mono', monospace` (font weight 400)

---

## ♿ Accessibility (a11y) Practices

1.  **Strict Contrast Ratios:** Satisfy WCAG AA standards (minimum contrast ratio of 4.5:1 for body copy and 3.0:1 for large headers).
2.  **Alt Text on Visuals:** Every `<img>` tag must include descriptive `alt` attributes.
3.  **Screen Reader Context:** Interactive icon-only buttons must contain explicit `aria-label` attributes.
4.  **Custom Focus Outlines:** Interactive controls must render visible focus rings on keyboard navigation (`:focus-visible`).
5.  **Reduced Motion Standard:** Support `@media (prefers-reduced-motion: reduce)` to disable high-frequency animations for sensitive users.

---

## ✅ Delivery Code Checklist

Before committing any component file, review and verify:

- [ ] Does it compile and pass linting (`npm run lint`) without errors?
- [ ] Does the production build succeed (`npm run build`)?
- [ ] Are all color declarations linked to `--bg-primary`, `--bg-secondary`, `--bg-elevated`, or `--accent`?
- [ ] Are custom font families correctly specified (`Syne`, `DM Sans`, `JetBrains Mono`)?
- [ ] Is it fully responsive on mobile viewports (< 768px)?
- [ ] Does the import sequence strictly respect the mandatory five-step order?

# Coding Conventions and Style Guidelines

This document defines the coding standards, patterns, and design system rules for `moa-portfolio`. All developers and AI assistants must strictly adhere to these guidelines to ensure consistency, accessibility, and high performance.

---

## 📂 Project Architecture Overview

The project structure is organized as follows. All paths are relative to the workspace root:

*   [src/components/layout/](file:///home/moadev/projetos/moa-portfolio/src/components/layout) — Core layout elements (`Navbar.jsx`, `Footer.jsx`)
*   [src/components/sections/](file:///home/moadev/projetos/moa-portfolio/src/components/sections) — Main page sections loaded inside the fold or on scroll (`Hero.jsx`, `About.jsx`, `Projects.jsx`, `Skills.jsx`, `Experience.jsx`, `Contact.jsx`)
*   [src/components/ui/](file:///home/moadev/projetos/moa-portfolio/src/components/ui) — Atom-level reusable UI components (`CustomCursor.jsx`, `ScrollProgress.jsx`, `SectionHeader.jsx`, `SkillBadge.jsx`, `TechIcon.jsx`, `TechMarquee.jsx`, and custom interactive buttons)
*   [src/data/](file:///home/moadev/projetos/moa-portfolio/src/data) — Single source of truth for portfolio contents (`projects.js`, `skills.js`, `experience.js`)
*   [src/hooks/](file:///home/moadev/projetos/moa-portfolio/src/hooks) — Custom React hooks for effects and interactions (`useScrollAnimation.js`, `useVanta.js`)
*   [src/styles/](file:///home/moadev/projetos/moa-portfolio/src/styles) — Design system stylesheets (`globals.css`, `animations.css`)
*   [src/utils/](file:///home/moadev/projetos/moa-portfolio/src/utils) — Reusable utility methods (`cn.js`)

---

## ⚛️ React & JavaScript Coding Standards

### 1. Functional Components
All components must be written as modern functional components using React hooks. Do not use legacy Class-based components.
*   **One Component Per File:** Each source file in `src/components/` must export exactly one component.
*   **Arrow Functions or Named Functions:** Prefer named function declarations for main component definitions and arrow functions for inline hooks/helpers.
*   **Destructured Props:** Destructure props directly in the function signature for clarity:
    ```javascript
    function ProjectCard({ title, description, tags, featured }) { ... }
    ```
*   **Types & Documentation:** Use JSDoc comments to document component parameters and behavior.

### 2. State & Hooks Guidelines
*   **Local State Management:** Use the `useState` hook for local component state.
*   **Effect Cleanups:** Always return a cleanup function in `useEffect` to prevent memory leaks. This is critical for Vanta.js and event listeners (e.g. scroll, resize, cursor track).
*   **Props Drilling Limit:** Props drilling is capped at **2 levels**. If data needs to traverse deeper, use standard component composition or design a lightweight React Context.
*   **No Heavy State Management Libraries:** Do not install Redux, Zustand, Recoil, or complex Context systems. The state of this portfolio is lightweight and must remain minimal.
*   **Custom Hooks:** Extract side-effects and reusable browser APIs into custom hooks under [src/hooks/](file:///home/moadev/projetos/moa-portfolio/src/hooks).

### 3. Component File Length (Maximum 150 Lines)
To enforce Uncle Bob's "Clean Code" principles, **no component file may exceed 150 lines of code**.
*   If a component exceeds this threshold, identify sub-elements that can be extracted.
*   *Example:* In `Projects.jsx`, extract filtering logic or structural headers to keep the parent clean, or move repeated items to `ProjectCard.jsx`.
*   Maintain single-responsibility (SRP) functions that do one thing and do it well.

---

## 🔀 Mandatory Import Ordering

To ensure import block readability and prevent merge conflicts, all JavaScript/React files must structure imports in a **strict five-step order** with single blank lines separating each block:

```javascript
// 1. React, Core Hooks, and Native Packages
import { useState, useEffect, useRef } from 'react';

// 2. Third-Party Libraries (Framer Motion, Lucide Icons, etc.)
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Mail } from 'lucide-react';

// 3. Reusable UI Components & Layout Elements
import ProjectCard from '../ui/ProjectCard';
import SectionHeader from '../ui/SectionHeader';

// 4. Data Layer, Configuration, and Custom Hooks / Utilities
import { projects } from '../../data/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cn } from '../../utils/cn';

// 5. CSS Stylesheets, Custom Fonts, and Module CSS (if any)
import './ProjectCard.css';
```

---

## 🎨 Design System & CSS Variable Guidelines

Styling is achieved using **Tailwind CSS v4** combined with custom CSS custom properties (variables) defined in [src/styles/globals.css](file:///home/moadev/projetos/moa-portfolio/src/styles/globals.css).

### 1. Color Palette Tokens
All colors are strictly managed through CSS variables. **Do not hardcode hex colors or custom colors in JSX.**

*   `--bg-primary: #080808;` — Fundo principal (almost black)
*   `--bg-secondary: #0f0f0f;` — Alternated sections, background for projects/experience cards
*   `--bg-elevated: #161616;` — Hover states, modal popups, active cursor elements
*   `--accent: #b8f73c;` — Electric lime green accent for active items, hover states, interactive cursors, and main calls to action (CTAs)
*   `--accent-dim: #8ab82a;` — Darker green for hover states on buttons
*   `--accent-glow: rgba(184, 247, 60, 0.15);` — Transparent green shadow backdrop
*   `--text-primary: #f0f0f0;` — Body headings and readable text
*   `--text-secondary: #888888;` — Muted supporting labels and paragraphs
*   `--text-muted: #444444;` — Form borders and dividers
*   `--border: rgba(255, 255, 255, 0.06);` — Standard light boundary
*   `--border-accent: rgba(184, 247, 60, 0.3);` — Highlit state border

> [!IMPORTANT]
> **The 90/10 Rule:** Maintain a strict color distribution of 90% dark neutrals (`--bg-primary`, `--bg-secondary`) and only 10% electric accent (`--accent`). Only use lime green for highlights, CTAs, tags, active borders, and visual focus states. Do not use it as background for whole layout divisions.

### 2. Typography Scale
Custom Google Fonts are preloaded in [index.html](file:///home/moadev/projetos/moa-portfolio/index.html) and specified as follows:
*   **Hero / Display Titles:** `'Syne', sans-serif` (font weights 700, 800)
*   **Body & Navigation UI:** `'DM Sans', sans-serif` (font weights 300, 400, 500)
*   **Coding/Tech Tags:** `'JetBrains Mono', monospace` (font weight 400)

```css
--text-xs:   0.75rem;    /* Technical tags, small metadata badges */
--text-sm:   0.875rem;   /* Support labels, secondary dates */
--text-base: 1rem;       /* Paragraphs and main navigation items */
--text-lg:   1.25rem;    /* Grid cards subtitles, minor subheadings */
--text-xl:   1.75rem;    /* Section subset headers */
--text-2xl:  2.5rem;     /* Main titles for page sections */
--text-3xl:  4rem;       /* Headline Hero fonts */
--text-4xl:  6rem;       /* Main Moacir Neto title (desktop) */
```

### 3. Spacing & Grid Layout Constants
*   `--max-width: 1200px;` — Outer bounding constraint
*   `--padding-x: clamp(1.5rem, 5vw, 4rem);` — Fluid lateral screen gutter
*   `--section-padding: clamp(80px, 12vw, 160px) 0;` — Generous top/bottom margin
*   `--grid-gap: 1.5rem;` — Uniform spacing for project grids
*   **Projects Grid:** Layouts must be fluid using `grid-template-columns: repeat(auto-fit, minmax(340px, 1fr))`.

---

## ♿ Accessibility (a11y) Practices

The application must achieve high accessibility conformance to ensure maximum usability.

1.  **Strict Contrast Ratios:** Text components must satisfy WCAG AA standards (minimum contrast ratio of 4.5:1 for body copy and 3.0:1 for large header font sizes).
2.  **Alt Text on Visuals:** Every `<img>` tag must include descriptive and meaningful `alt` attributes. If an image is purely decorative, use `alt=""` and apply `aria-hidden="true"`.
3.  **Screen Reader Context:** Interactive icons (like GitHub or External Link buttons) that omit screen text must contain an explicit `aria-label` attribute (e.g. `aria-label="Acessar repositório no GitHub"`).
4.  **Custom Focus Outlines:** Interactive controls (links, buttons, input fields) must render a visible focus ring on keyboard navigation. Do not use `outline: none`. Instead, rely on our custom focus-visible variable outline from `globals.css`:
    ```css
    :focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 4px;
    }
    ```
5.  **Reduced Motion Standard:** Respect browser system configurations for animations by wrapping complex animations or utilizing Tailwind's utility class overrides under the `@media (prefers-reduced-motion: reduce)` directive to eliminate sudden visual movement.

---

## 🚫 Design Restrictions (What to NEVER Do)

To preserve the aesthetic integrity of **Moacir Neto's** portfolio, the following practices are **forbidden**:

*   ❌ **No Purple/Violet Gradients:** Avoid standard generic developer portfolioclise gradients. Keep background dark and deep `#080808`.
*   ❌ **No Standard Gray Drop Shadows:** Avoid standard high-opacity box-shadows. Use glowing transparent accent colors (`--accent-glow`) for interactive objects.
*   ❌ **No Generic System Fonts:** Never style buttons or readable prose using Arial, Inter, Roboto, or generic `system-ui`.
*   ❌ **No Muted Paddings:** Never squeeze layout sections. Section padding must not fall below `60px` to maintain whitespace.
*   ❌ **No Over-extended Animations:** Entrance transitions must execute in under `1.0s` unless there is a valid loading scene trigger.
*   ❌ **No Color Overload:** Do not introduce more than two accent highlight hues. Keep to the strict `#b8f73c` lime scheme.
*   ❌ **No Light Mode Backgrounds:** Do not build toggles for standard white backgrounds. The portfolio design is dark-only.
*   ❌ **No Generic Code Tags:** Avoid using standard `<code>` blocks without wrapping or styling them into semantic JetBrains Mono tech cards.

---

## ✅ Delivery Code Checklist

Before committing any component file, review and verify:

- [ ] Does it compile without typescript or syntax warnings?
- [ ] Are all color declarations linked to `--bg-primary`, `--bg-secondary`, `--bg-elevated`, or `--accent`?
- [ ] Are custom font families correctly specified (`Syne`, `DM Sans`, `JetBrains Mono`)?
- [ ] Are standard interactive transition timings set to `transition: all 0.25s ease`?
- [ ] Is it fully responsive on mobile viewports (< 768px)?
- [ ] Are entry/exit motion behaviors responsive to `prefers-reduced-motion` settings?
- [ ] Does the import sequence strictly respect the mandatory five-step order?

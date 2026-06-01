# Tech Stack Map: moa-portfolio

This document maps the complete technical stack of the **moa-portfolio** project. It outlines core frameworks, development tools, utility libraries, styling configurations, and clean code alignments to serve as the single source of truth for the technology stack.

---

## 🏗️ Core Technology Stack

The project relies on a highly performant, modern, and light frontend stack. Below is the mapping of core frameworks, build tools, and baseline requirements.

| Layer | Technology | Actual Installed Version | Target Base Specification | Description / Role |
| :--- | :--- | :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | `^19.2.5` | `18+` | Core UI library, operating with custom functional components and hooks. |
| **Build & Dev Server** | [Vite](https://vitejs.dev/) | `^8.0.9` | `5+` | Ultra-fast build tool and local development server using native ES Modules. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^4.2.3` | `3+` | Bleeding-edge utility-first styling engine, compiled via Vite plugin. |

### Major Version Notes
- **React 19**: Utilizes standard rendering features, and integrates with modern features. 
- **Vite 8**: Integrates the latest development environment optimisations.
- **Tailwind CSS v4**: Features deep build-time CSS integration, moving style imports into standard `@import "tailwindcss";` directly in `globals.css` and utilizing a Vite-native compiler (`@tailwindcss/vite`).

---

## 📦 Libraries, Tools & Utilities

### 🎥 Animation & Micro-interactions
- **[Framer Motion](https://www.framer.com/motion/)** (`^12.38.0`)
  - **Purpose**: Power entrance animations, layout transitions, scroll-triggered staggers, and responsive micro-interactions.
  - **Usage**: Encapsulated in section triggers and UI elements like buttons, project cards, and timelines using `<motion.div>` declarations.

### 🎨 Icons
- **[Lucide React](https://lucide.dev/)** (`^1.8.0`)
  - **Purpose**: Provides clean, modern, outline SVG icons.
  - **Usage**: Used for section headers, scroll indicators (`ChevronDown`), navigation icons, and metadata details.
- **[React Icons](https://react-icons.github.io/react-icons/)** (`^5.6.0`)
  - **Purpose**: Provides developer/brand-specific icons (such as GitHub, LinkedIn, external page links).

### 🛠️ Class Utilities
- **[clsx](https://github.com/lukeed/clsx)** (`^2.1.1`)
  - **Purpose**: Small utility for conditionally constructing `className` strings.
  - **Usage**: Simplifies dynamic styling logic for UI components, such as state-dependent nav links or active tabs.

### 🧪 Testing
- **[Playwright](https://playwright.dev/)** (`^1.59.1`)
  - **Purpose**: End-to-end (E2E) automated testing suite (`@playwright/test`).
  - **Target Scope**: Continuous integration validations, accessibility validation, and critical path checks (e.g. contact form, project filtering).

---

## 🎨 Design System & CSS Variables

The project styles are anchored inside [globals.css](file:///home/moadev/projetos/moa-portfolio/src/styles/globals.css). All visual tokens are declared under `:root` to ensure styling consistency and allow seamless themes in the future.

### 1. Color Palettes
The primary aesthetic rule is **90% dark neutral tones and 10% electric green accents** (`--accent`). Accents are never applied as a solid block background.

| Variable Name | Color Value | Description / Use Case |
| :--- | :--- | :--- |
| `--bg-primary` | `#080808` | Primary background (almost pure black) |
| `--bg-secondary` | `#0f0f0f` | Cards background, alternating section containers |
| `--bg-elevated` | `#161616` | Hover states, tooltip badges, and interactive modals |
| `--accent` | `#b8f73c` | CTA background, active navigation links, cursor outlines, borders |
| `--accent-dim` | `#8ab82a` | Hover states for primary CTAs |
| `--accent-glow` | `rgba(184, 247, 60, 0.15)` | Drop shadows and box glow effects on cards |
| `--text-primary` | `#f0f0f0` | Headers, section titles, and main content |
| `--text-secondary` | `#888888` | Subtitle descriptions, supportive text labels |
| `--text-muted` | `#444444` | Placeholders, inactive button borders, scroll track |
| `--border` | `rgba(255, 255, 255, 0.06)`| Default card borders |
| `--border-accent` | `rgba(184, 247, 60, 0.3)` | Border glowing state on hover or highlight |

### 2. Typography Rules
Three fonts are fetched from Google Fonts to serve distinct editorial purposes:

- **Display / Hero**: `'Syne'` (Google Fonts) — weights `700`, `800`
  - *Letter-spacing*: Tight (`-0.03em`) for display titles, (`-0.02em`) for sections.
- **Body / UI**: `'DM Sans'` (Google Fonts) — weights `300`, `400`, `500`
  - *Letter-spacing*: Standard (`0`) for paragraph readability.
- **Code / Tech Tags**: `'JetBrains Mono'` (Google Fonts) — weight `400`
  - *Letter-spacing*: Wide uppercase labels (`0.12em`) for tech pills and tags.

#### Typography Scale:
- `--text-xs`: `0.75rem` (Tags, badges, project tags)
- `--text-sm`: `0.875rem` (Labels, metadata, dates)
- `--text-base`: `1.00rem` (Default body text)
- `--text-lg`: `1.25rem` (Subtitles, feature highlights)
- `--text-xl`: `1.75rem` (Card titles, minor headers / H3)
- `--text-2xl`: `2.50rem` (Section headers / H2)
- `--text-3xl`: `4.00rem` (Hero section main headers / H1)
- `--text-4xl`: `6.00rem` (Moacir Neto highlight size)

---

## 🧹 Quality Gateways & Linting

### ESLint Flat Configuration (`eslint.config.js`)
The project utilizes ESLint v9 (`^9.39.4`) with flat configuration format.
- **Libraries**:
  - `@eslint/js` (`^9.39.4`): Core JavaScript rules.
  - `eslint-plugin-react-hooks` (`^7.1.1`): Enforces hook rules (e.g. dependency arrays, hook naming rules).
  - `eslint-plugin-react-refresh` (`^0.5.2`): Safeguards Hot Module Replacement integrity.
- **Parser Settings**: Runs with ES Modules (`type: "module"` in package.json) and global browser environments.

---

## 🧠 Clean Code & Architecture Alignment

The codebase conforms to Uncle Bob's "Clean Code" principles through strict guidelines:

1. **Self-Documenting Names**:
   - Variables are highly descriptive (e.g. `useScrollAnimation`, `vantaInstance`, `TYPING_TEXT`).
   - Short files that avoid obscure variables (like `x` or `temp`).
2. **Single Responsibility Principle (SRP)**:
   - One React component per file.
   - Individual section files (e.g. [Hero.jsx](file:///home/moadev/projetos/moa-portfolio/src/components/sections/Hero.jsx), `About.jsx`, `Projects.jsx`).
   - Hooks perform one specific task (e.g. `useVanta` manages Vanta lifecycles, `useScrollAnimation` manages scroll detection).
3. **No Hidden Side Effects**:
   - Clean lifecycle teardowns. Every hook (such as `useVanta` or custom animation timers) clears listeners, cancels animation frames, and tears down WebGL context on unmount to prevent leaks.
4. **Structured imports**:
   - Imports follow a consistent structural pattern: (1) React, (2) Third-party libraries, (3) Internal UI elements, (4) Data objects, (5) Styles.

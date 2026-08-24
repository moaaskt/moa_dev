# Tech Stack Map: moa-portfolio

This document maps the complete technical stack of the **moa-portfolio** project. It outlines core frameworks, development tools, utility libraries, styling configurations, and clean code alignments to serve as the single source of truth for the technology stack.

---

## 🏗️ Core Technology Stack

The project relies on a highly performant, modern, and light frontend stack. Below is the mapping of core frameworks, build tools, and baseline requirements.

| Layer | Technology | Actual Installed Version | Target Base Specification | Description / Role |
| :--- | :--- | :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | `^19.2.5` | `18+` | Core UI library, operating with custom functional components and hooks. |
| **DOM Renderer** | [ReactDOM](https://react.dev/) | `^19.2.5` | `18+` | Client rendering engine for DOM mounting (`createRoot`). |
| **Build & Dev Server** | [Vite](https://vitejs.dev/) | `^8.0.9` | `5+` | Ultra-fast build tool and local development server using native ES Modules. |
| **Styling Engine** | [Tailwind CSS](https://tailwindcss.com/) | `^4.2.3` | `4+` | Modern CSS engine, compiled via `@tailwindcss/vite` plugin and `@import "tailwindcss";`. |

### Major Version Notes
- **React 19**: Utilizes standard rendering features, clean hook lifecycles, and modern JSX transformations.
- **Vite 8**: Integrates the latest development environment optimizations and Rolldown-backed build pipeline.
- **Tailwind CSS v4**: Features deep build-time CSS integration, moving style imports into standard `@import "tailwindcss";` directly in `src/styles/globals.css` without requiring legacy `tailwind.config.js`.

---

## 📦 Libraries, Tools & Utilities

### 🎥 Animation & Micro-interactions
- **[Framer Motion](https://www.framer.com/motion/)** (`^12.38.0`)
  - **Purpose**: Powers entrance animations, layout transitions (`layoutId`), mobile drawer transitions (`AnimatePresence`), and interactive micro-interactions.
  - **Usage**: Encapsulated in section triggers, navbar indicators, and interactive UI components.

### 🎨 Icons & Brand Assets
- **[Lucide React](https://lucide.dev/)** (`^1.8.0`)
  - **Purpose**: Provides clean, modern, outline SVG icons.
  - **Usage**: Used for section headers, scroll indicators (`ChevronDown`), navigation icons (`Menu`, `X`), external links, and UI status badges.
- **[React Icons](https://react-icons.github.io/react-icons/)** (`^5.6.0`)
  - **Purpose**: Provides developer/brand-specific icons (`SiGithub`, `TbGitCommit`, WhatsApp, LinkedIn).
  - **Usage**: Used across `GithubProjects.jsx`, `Contact.jsx`, and `Footer.jsx`.

### 🛠️ Class Utilities
- **[clsx](https://github.com/lukeed/clsx)** (`^2.1.1`)
  - **Purpose**: Tiny utility for conditionally constructing `className` strings.
  - **Usage**: Simplifies dynamic styling logic for UI components via helper in `src/utils/cn.js`.

### 🧪 Testing & Deployment
- **[Playwright](https://playwright.dev/)** (`^1.59.1`)
  - **Purpose**: End-to-end (E2E) automated testing suite (`@playwright/test`).
  - **Target Scope**: Cross-browser visual validation, accessibility checks, session loader behavior, and critical path navigation.
- **[gh-pages](https://github.com/tschaub/gh-pages)** (`^6.3.0`)
  - **Purpose**: Single-command deployment of production `dist/` artifacts to GitHub Pages branch.

---

## 🎨 Design System & CSS Variables

The project styles are anchored inside [globals.css](file:///home/moa-dev/projetos/moa_dev/src/styles/globals.css). All visual tokens are declared under `:root` to ensure styling consistency.

### 1. Color Palettes (The 90/10 Rule)
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
| `--border` | `rgba(255, 255, 255, 0.06)` | Default card borders |
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
  - `eslint-plugin-react-hooks` (`^7.1.1`): Enforces hook rules (dependency arrays, lifecycle correctness).
  - `eslint-plugin-react-refresh` (`^0.5.2`): Safeguards Hot Module Replacement integrity.
- **Rule Customization**:
  - `no-unused-vars`: Ignores patterns matching `^(motion|[A-Z_].*)$` to facilitate Framer Motion and PascalCase component declarations, and `argsIgnorePattern: '^Icon$'`.
- **Parser Settings**: Runs with ES Modules (`type: "module"` in `package.json`) and global browser environments.

---

## 🧠 Clean Code & Architecture Alignment

The codebase conforms to clean code principles:

1. **Self-Documenting Names**:
   - Variables are highly descriptive (e.g. `useScrollAnimation`, `fetchRepoCommits`, `formattedRepos`).
2. **Single Responsibility Principle (SRP)**:
   - One React component per file with modular separation between layout, sections, UI atoms, data, and hooks.
3. **No Hidden Side Effects**:
   - Clean lifecycle teardowns on unmount (`useEffect` cleanup functions for event listeners, intervals, and observers).
4. **Structured Imports**:
   - Imports follow a consistent 5-tier pattern: (1) React core, (2) Third-party libraries, (3) Internal UI components, (4) Data and hooks, (5) Styles.

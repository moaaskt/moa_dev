# Codebase Structure Mapping — moa-portfolio

This document maps out the directory hierarchy, file responsibilities, and components of the `moa-portfolio` project.

---

## 📁 Directory Tree

```
moa-portfolio/
├── .claude/
│   └── skills/
│       ├── SKILL-portfolio-architecture.md  # Architectural guidelines
│       └── SKILL-portfolio-ui-design.md     # Visual design guidelines
│
├── .planning/
│   └── codebase/
│       ├── ARCHITECTURE.md                  # Software architecture overview
│       └── STRUCTURE.md                     # Codebase structure map (this file)
│
├── dist/                                    # Production build output
│
├── public/                                  # Static public files (direct assets)
│   ├── favicon.svg                          # Site favicon
│   └── icons.svg                            # Custom SVG sprite map
│
├── src/                                     # React source code root
│   ├── assets/                              # Media and design assets
│   │   ├── images/
│   │   │   └── projects/                    # Project showcase screenshots
│   │   │       ├── chatjovem.png
│   │   │       ├── gstore.png
│   │   │       ├── guiadocachorro.jpeg
│   │   │       └── petflix.png
│   │   ├── hero.png                         # Backup hero background
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/                          # React components
│   │   ├── layout/                          # Global page frame components
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── sections/                        # Major page sections
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   │
│   │   └── ui/                              # Atomic/reusable UI widgets
│   │       ├── CustomCursor.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── ScrollProgress.jsx
│   │       ├── SectionHeader.jsx
│   │       ├── SkillBadge.jsx
│   │       ├── TechIcon.jsx
│   │       └── TechMarquee.jsx
│   │
│   ├── data/                                # Local static data files (Database layer)
│   │   ├── experience.js
│   │   ├── projects.js
│   │   └── skills.js
│   │
│   ├── hooks/                               # Custom hooks (Separation of concerns)
│   │   ├── useScrollAnimation.js
│   │   └── useVanta.js
│   │
│   ├── styles/                              # Styling assets
│   │   ├── animations.css
│   │   └── globals.css
│   │
│   ├── utils/                               # Helper functions
│   │   └── cn.js
│   │
│   ├── App.css                              # Extra layout overrides
│   ├── App.jsx                              # Root layout & page mounting
│   ├── index.css                            # Main entry style references
│   └── main.jsx                             # React bootstrapper
│
├── eslint.config.js                         # Linting settings
├── index.html                               # Site entry file (loads fonts & Vanta CDN)
├── package.json                             # Package manifest & build scripts
├── tailwind.config.js                       # Tailwind configuration file
├── vite.config.js                           # Vite build config
└── README.md                                # Developer guidelines
```

---

## 📂 Directory Map & Responsibilities

| Directory | Purpose / Domain | Key Architectural Contribution |
|---|---|---|
| `public/` | Unchanged static distribution resources. | Holds direct browser assets like favicons and icons that do not require processing by Vite. |
| `src/assets/` | Static media, screenshots, and illustrations. | Decouples media resources from component logic. Loaded in code via ES6 imports to allow hashing by the Vite builder. |
| `src/components/layout/` | Structural navigation frames. | Elements persistent across the entire page (header, footer, drawers). |
| `src/components/sections/` | Highly modular vertical scroll page sections. | Groups domain-specific widgets (Projects, About, Experience) into independent layout sections. |
| `src/components/ui/` | Purely presentation components and interactive enhancements. | Shared atomic elements (badges, cursors, custom cards) containing specialized animations and no hardcoded business logic. |
| `src/data/` | Decoupled client database models. | Houses structural JS arrays containing experience details, portfolio elements, and skill groups. |
| `src/hooks/` | Abstracted Web API interactions. | Contains clean lifecycle integrations for canvas, scroll event listeners, and IntersectionObservers. |
| `src/styles/` | Centralized styles, CSS variables, and design tokens. | Merges Tailwind v4/v3 structure with low-level CSS custom properties. |
| `src/utils/` | Reusable utilities. | Hosts short functional wrappers like conditional class concat (`clsx`). |

---

## 🧩 Comprehensive Component Registry

### 1. Layout Components (`src/components/layout/`)

*   **`Navbar.jsx`**:
    *   **Description**: High-fidelity sticky header that switches from transparent to semi-opaque with backdrops (`backdrop-filter`) on scroll thresholds (>80px).
    *   **Animations**: Renders an animated active underline that travels smoothly between items using Framer Motion's `layoutId="nav-underline"`. Renders a side drawer menu for viewports <768px with touch-friendly backdrops (`AnimatePresence`).
*   **`Footer.jsx`**:
    *   **Description**: Simple layout bottom anchor.
    *   **Contents**: Social profile icons (GitHub, LinkedIn, WhatsApp) with dynamic hover colors and copyright information.

### 2. Page Sections (`src/components/sections/`)

*   **`Hero.jsx`**:
    *   **Description**: Introduction screen at the top of the viewport.
    *   **Core Logic**: Implements an interactive Canvas 2D particle simulation running on an animation loop (`requestAnimationFrame`) with automatic resize handling.
    *   **Interactivity**: Utilizes a custom typing typewriter cursor hook (`useTypingCursor`) to display `"Full Stack Developer"`.
*   **`About.jsx`**:
    *   **Description**: Narrative introducing the developer's professional profile.
    *   **Components**: Features a responsive grid that renders custom statistic blocks (years of experience, repositories, CLTs) and an interactive horizontal grid of primary technical badges.
*   **`Projects.jsx`**:
    *   **Description**: Dynamic portfolio grid displaying filtered items.
    *   **Core Logic**: Tracks category filters (`all`, `fullstack`, `frontend`, `backend`, `ai`). Filters are calculated dynamically from static data.
    *   **Animations**: Renders Framer Motion layout grid animations to re-flow card positions seamlessly when tags change.
*   **`Skills.jsx`**:
    *   **Description**: Comprehensive view of technical skills.
    *   **Components**: Groups categories (`Frontend`, `Backend`, `Banco de Dados`, `Ferramentas`) into stylized boxes. Each skill lists custom hover-scaling SVGs representing technology brands.
*   **`Experience.jsx`**:
    *   **Description**: Professional chronology structured as a timeline.
    *   **Interactivity**: Renders a vertical line indicating active states, featuring a pulsing green ring on current roles. Cards display specific technology pills.
*   **`Contact.jsx`**:
    *   **Description**: Direct links to communication channels.
    *   **Widgets**: Displays three columns (WhatsApp, LinkedIn, Email) using interactive hover effects that transform card positions and cast subtle green glows.

### 3. Reusable UI Widgets (`src/components/ui/`)

*   **`CustomCursor.jsx`**:
    *   **Description**: Custom follow-through cursor utilizing linear interpolation (LERP) physics to chase coordinates.
    *   **Technique**: Integrates hover listener maps for anchor elements, swelling and shifting to custom borders on buttons or links. Avoids mobile viewports using a CSS guard.
*   **`ProjectCard.jsx`**:
    *   **Description**: Card representing a single portfolio item.
    *   **Contents**: Aspect-ratio project thumbnail that expands slightly on hover, project title, date, short description, technology icon array, and link triggers.
    *   **Fallback**: Dynamically inserts a code brackets placeholder SVG when no image asset is provided.
*   **`ScrollProgress.jsx`**:
    *   **Description**: Minimal 3px reading bar anchored at the top of the viewport. Updates width dynamically based on page scroll percentages.
*   **`SectionHeader.jsx`**:
    *   **Description**: Standardized page section header mapping. Renders index numbers (e.g., "01"), accent border lines, and the section title.
*   **`SkillBadge.jsx`**:
    *   **Description**: Compact reusable pill with clean visual indicators for individual skill items.
*   **`TechIcon.jsx`**:
    *   **Description**: Internal SVG provider mapping strings to corresponding SimpleIcons SVGs, keeping SVGs consistent.
*   **`TechMarquee.jsx`**:
    *   **Description**: Scrolling marquee container with infinite animations displaying tech stack logos, perfect for showing extensive technical skills.

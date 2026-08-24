# Codebase Structure Mapping — moa-portfolio

This document maps out the directory hierarchy, file responsibilities, and components of the `moa-portfolio` project.

---

## 📁 Directory Tree

```
moa_dev/
├── .claude/
│   └── skills/
│       ├── SKILL-portfolio-architecture.md  # Architectural guidelines
│       └── SKILL-portfolio-ui-design.md     # Visual design guidelines
│
├── .planning/
│   ├── codebase/                            # Structured codebase map documents
│   │   ├── ARCHITECTURE.md
│   │   ├── CONCERNS.md
│   │   ├── CONVENTIONS.md
│   │   ├── INTEGRATIONS.md
│   │   ├── STACK.md
│   │   ├── STRUCTURE.md                     # This file
│   │   └── TESTING.md
│   ├── PROJECT.md                           # Project vision & scope
│   ├── REQUIREMENTS.md                      # Milestone requirements
│   ├── ROADMAP.md                           # Milestone roadmaps
│   └── STATE.md                             # Project state tracking
│
├── dist/                                    # Production build output
│
├── public/                                  # Static public files
│   ├── favicon.svg                          # Site favicon
│   └── icons.svg                            # SVG sprite definitions
│
├── src/                                     # React source code root
│   ├── assets/                              # Media and design assets
│   │   ├── images/
│   │   │   └── projects/                    # Showcase screenshots (PNG/WebP pairs)
│   │   │       ├── chatjovem.png / .webp
│   │   │       ├── eventosanto.png / .webp
│   │   │       ├── gstore.png / .webp
│   │   │       ├── guiadocachorro.jpeg / .webp
│   │   │       ├── petflix.png / .webp
│   │   │       ├── rastrecob.png / .webp
│   │   │       ├── sherlock-scraper.png / .webp
│   │   │       └── vetosAI.png / .webp
│   │   ├── hero.png                         # Backup hero graphic
│   │   ├── moacir-profile.png               # Profile portrait image
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/                          # React components
│   │   ├── layout/                          # Global structural components
│   │   │   ├── Footer.jsx                   # Page footer with social links
│   │   │   └── Navbar.jsx                   # Sticky navbar with mobile drawer
│   │   │
│   │   ├── sections/                        # Main portfolio sections
│   │   │   ├── About.jsx                    # Bio, stats, and profile highlight
│   │   │   ├── Contact.jsx                  # Direct communication cards
│   │   │   ├── Experience.jsx               # Career timeline
│   │   │   ├── GithubProjects.jsx           # Live GitHub repos & commit statistics
│   │   │   ├── Hero.jsx                     # Top banner with Canvas particles
│   │   │   ├── Projects.jsx                 # Filterable portfolio showcase
│   │   │   └── Skills.jsx                   # Technical skills categorized
│   │   │
│   │   └── ui/                              # Reusable UI widgets
│   │       ├── AboutPortrait.jsx            # Profile image container
│   │       ├── CustomCursor.jsx             # Physics-based custom mouse cursor
│   │       ├── ProjectCard.jsx              # Project item card with animations
│   │       ├── ScrollProgress.jsx           # Scroll percentage bar
│   │       ├── SectionHeader.jsx            # Standard section title & numeral
│   │       ├── SkillBadge.jsx               # Skill tag pill
│   │       ├── TechIcon.jsx                 # SVG icon resolver
│   │       └── TechMarquee.jsx              # Infinite scrolling tech marquee
│   │
│   ├── data/                                # Local static data layer
│   │   ├── contacts.js                      # Contact methods & links
│   │   ├── experience.js                    # Professional history dataset
│   │   ├── projects.js                      # Portfolio projects data
│   │   ├── skills.js                        # Skills categorized dataset
│   │   └── techIcons.js                     # Technology badge metadata
│   │
│   ├── hooks/                               # Custom React hooks
│   │   ├── useScrollAnimation.js            # IntersectionObserver animation hook
│   │   └── useVanta.js                      # WebGL Vanta.js lifecycle hook
│   │
│   ├── styles/                              # Central styling stylesheets
│   │   ├── about-portrait.css               # Profile portrait styles
│   │   ├── animations.css                   # Keyframe definitions
│   │   └── globals.css                      # Tailwind import, tokens, and CSS variables
│   │
│   ├── utils/                               # Helper functions
│   │   └── cn.js                            # ClassNames merge utility (clsx)
│   │
│   ├── App.css                              # App layout overrides
│   ├── App.jsx                              # Root layout & page loader
│   ├── index.css                            # Main entry style references
│   └── main.jsx                             # React bootstrapper
│
├── eslint.config.js                         # ESLint v9 flat config
├── index.html                               # Site entry file (fonts & metadata)
├── package.json                             # Package manifest & build scripts
├── vite.config.js                           # Vite build config
└── README.md                                # Developer documentation
```

---

## 📂 Directory Map & Responsibilities

| Directory | Purpose / Domain | Key Architectural Contribution |
|---|---|---|
| `public/` | Static unbundled files. | Holds browser assets (favicon, SVG sprites) copied directly to build output. |
| `src/assets/` | Static media, screenshots, and illustrations. | Decouples media resources from component logic. Hashed by Vite for caching. |
| `src/components/layout/` | Structural navigation frames. | Header, Footer, and mobile navigation drawer. |
| `src/components/sections/` | Vertical scroll page sections. | Modular sections (`Hero`, `About`, `Projects`, `Skills`, `Experience`, `GithubProjects`, `Contact`). |
| `src/components/ui/` | Shared UI components and widgets. | Atomic elements (`ProjectCard`, `CustomCursor`, `ScrollProgress`, `TechMarquee`). |
| `src/data/` | Static client dataset. | Data records for projects, skills, experience, and contacts. |
| `src/hooks/` | Abstracted Web API & effect lifecycles. | Canvas animations, IntersectionObserver, and Vanta.js integration. |
| `src/styles/` | Centralized styles & CSS tokens. | Declares design system tokens and Tailwind CSS v4 entry. |
| `src/utils/` | Reusable utilities. | Functional helpers (`cn.js`). |

---

## 🧩 Comprehensive Component Registry

### 1. Layout Components (`src/components/layout/`)
*   **`Navbar.jsx`**: Sticky header with scroll detection, active indicator underline via `layoutId="nav-underline"`, and a responsive mobile drawer with `AnimatePresence` and keyboard (Escape) controls.
*   **`Footer.jsx`**: Layout bottom footer with brand copyright and direct social profile icon links.

### 2. Page Sections (`src/components/sections/`)
*   **`Hero.jsx`**: Introductory hero view with 2D HTML5 Canvas particle simulation and typewriter subtitle animation.
*   **`About.jsx`**: Developer narrative, key statistics counters, and integrated profile portrait.
*   **`Projects.jsx`**: Dynamic portfolio grid with category filters (`all`, `fullstack`, `frontend`, `backend`, `ai`) and smooth layout animations.
*   **`Skills.jsx`**: Categorized technical proficiencies displayed with branded Devicons.
*   **`Experience.jsx`**: Professional chronology timeline with active status pulses and technology tags.
*   **`GithubProjects.jsx`**: Live GitHub API repository cards with real-time commit counts and rate-limit handling.
*   **`Contact.jsx`**: Direct communication cards (WhatsApp, LinkedIn, Email) with hover glow effects.

### 3. Reusable UI Widgets (`src/components/ui/`)
*   **`CustomCursor.jsx`**: Physics-based trailing mouse follower using LERP and `mixBlendMode: 'difference'`.
*   **`ProjectCard.jsx`**: Portfolio card with hover image scale, tech badge list, and live/repository links.
*   **`ScrollProgress.jsx`**: Viewport top reading progress bar.
*   **`SectionHeader.jsx`**: Section numeral and title label.
*   **`SkillBadge.jsx`**: Reusable technology pill.
*   **`TechIcon.jsx`**: Icon mapper for project tags.
*   **`TechMarquee.jsx`**: Infinite horizontal tech logos marquee.
*   **`AboutPortrait.jsx`**: Profile image container with neon borders and glassmorphism styling.

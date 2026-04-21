# SKILL: portfolio-architecture

> Use esta skill para qualquer decisão de estrutura, organização de arquivos, configuração, routing, dados ou integração dentro do projeto `moa-portfolio`.

---

## 🏗️ Stack Técnica

| Camada | Tecnologia | Versão alvo |
|---|---|---|
| Framework | React | 18+ |
| Build tool | Vite | 5+ |
| Estilo | Tailwind CSS | 3+ (com CSS vars custom) |
| Animações | Framer Motion | 11+ |
| Background | Vanta.js | latest |
| Ícones | Lucide React | latest |
| Deploy | GitHub Pages | via `gh-pages` package |
| Linting | ESLint + Prettier | configurado |

> **Não usar:** Redux, Context API complexa, bibliotecas de UI prontas (MUI, Chakra, shadcn). O design é 100% custom.

---

## 📁 Estrutura de Pastas

```
moa-portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.png           # Open Graph (1200x630)
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile.jpg           # Foto do Moacir
│   │   │   └── projects/             # Screenshots dos projetos
│   │   │       ├── petflix.png
│   │   │       ├── loja-virtual.png
│   │   │       ├── guiadocachorro.png
│   │   │       ├── chatbot.png
│   │   │       ├── rickandmorty.png
│   │   │       └── gopherscraper.png
│   │   └── icons/                    # SVGs customizados se necessário
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   └── ui/
│   │       ├── ProjectCard.jsx
│   │       ├── SkillBadge.jsx
│   │       ├── Button.jsx
│   │       ├── SectionHeader.jsx
│   │       ├── CustomCursor.jsx
│   │       └── ScrollProgress.jsx
│   │
│   ├── data/
│   │   ├── projects.js        # Array com dados de todos os projetos
│   │   ├── skills.js          # Categorias e lista de skills
│   │   └── experience.js      # Histórico profissional
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.js   # IntersectionObserver helper
│   │   └── useVanta.js             # Hook para inicializar/destruir Vanta
│   │
│   ├── styles/
│   │   ├── globals.css        # CSS variables, reset, base styles
│   │   └── animations.css     # Keyframes reutilizáveis
│   │
│   ├── utils/
│   │   └── cn.js              # className utility (clsx)
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📊 Data Layer — Estrutura dos dados

### `src/data/projects.js`
```javascript
export const projects = [
  {
    id: 'guiadocachorro',
    title: 'Guia do Cachorro',
    description: 'Portal completo de lifestyle e bem-estar canino. Frontend moderno com Next.js 16, Tailwind v4 e banco de dados Supabase.',
    longDescription: '...',
    image: '/src/assets/images/projects/guiadocachorro.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    category: 'fullstack',
    featured: true,          // aparece em destaque (card grande)
    links: {
      github: 'https://github.com/moaaskt/guiadocachorro',
      live: null,            // null = não exibe botão live
    },
    year: 2025,
  },
  {
    id: 'loja-virtual',
    title: 'Loja Virtual',
    description: 'E-commerce completo com painel administrativo, carrinho de compras, checkout e área do cliente. Desenvolvido com PHP e CodeIgniter 4.',
    image: '/src/assets/images/projects/loja-virtual.png',
    tags: ['PHP', 'CodeIgniter 4', 'MySQL', 'Bootstrap'],
    category: 'fullstack',
    featured: true,
    links: {
      github: 'https://github.com/moaaskt/loja-virtual-codeigniter',
      live: null,
    },
    year: 2024,
  },
  {
    id: 'petflix',
    title: 'Petflix',
    description: 'Streaming de vídeos para pets com autenticação Firebase e integração com YouTube Data API.',
    image: '/src/assets/images/projects/petflix.png',
    tags: ['JavaScript', 'Firebase', 'YouTube API', 'CSS'],
    category: 'frontend',
    featured: false,
    links: {
      github: 'https://github.com/moaaskt/petflix',
      live: 'https://flixpet.netlify.app/',
    },
    year: 2024,
  },
  {
    id: 'chatbot-gemini',
    title: 'ChatBot Jovem Programador',
    description: 'Chatbot especialista construído com Python e IA Generativa (Google Gemini) para tirar dúvidas sobre o programa Jovem Programador.',
    image: '/src/assets/images/projects/chatbot.png',
    tags: ['Python', 'Google Gemini', 'IA Generativa', 'NLP'],
    category: 'ai',
    featured: false,
    links: {
      github: 'https://github.com/moaaskt/ChatJovemProgramador-staging',
      live: null,
    },
    year: 2024,
  },
  {
    id: 'gopherscraper',
    title: 'Gopher Scraper',
    description: 'Sistema de rastreamento e monitoramento de preços com scraping automático.',
    image: null,             // sem imagem, exibe placeholder
    tags: ['JavaScript', 'Web Scraping', 'Node.js'],
    category: 'backend',
    featured: false,
    links: {
      github: 'https://github.com/moaaskt/gopherscraper',
      live: null,
    },
    year: 2024,
  },
  {
    id: 'rick-morty',
    title: 'Rick and Morty API',
    description: 'Aplicação de busca e exploração de personagens consumindo a Rick and Morty REST API.',
    image: '/src/assets/images/projects/rickandmorty.png',
    tags: ['JavaScript', 'REST API', 'HTML', 'CSS'],
    category: 'frontend',
    featured: false,
    links: {
      github: 'https://github.com/moaaskt/RickAndMortyAPI',
      live: 'https://moaaskt.github.io/RickAndMortyAPI/',
    },
    year: 2024,
  },
];

// Categorias para o filtro
export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'IA & Python' },
];
```

### `src/data/skills.js`
```javascript
export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'PHP', 'CodeIgniter 4', 'Python', 'Java'],
  },
  {
    category: 'Banco de Dados',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'Firebase'],
  },
  {
    category: 'Ferramentas',
    items: ['Git', 'GitHub', 'Docker', 'Vercel', 'WordPress', 'Figma'],
  },
  {
    category: 'IA & Data',
    items: ['Google Gemini API', 'Python ML', 'Web Scraping', 'ETL'],
  },
];
```

### `src/data/experience.js`
```javascript
export const experiences = [
  {
    id: 1,
    role: 'Desenvolvedor Full Stack',
    company: 'Agência Digital Combo',
    type: 'CLT',
    period: { start: '2024-03', end: '2025-01' },
    duration: '~10 meses',
    description: 'Desenvolvimento e manutenção de aplicações web para clientes da agência. Trabalho com PHP, WordPress, JavaScript e integrações de API.',
    tags: ['PHP', 'WordPress', 'JavaScript', 'MySQL'],
    current: false,
  },
  {
    id: 2,
    role: 'Desenvolvedor Freelancer',
    company: 'Autônomo',
    type: 'Freelance',
    period: { start: '2021-01', end: null },
    duration: '4 anos',
    description: 'Projetos pessoais e para clientes: landing pages, sistemas web, automações e aplicações com diversas stacks.',
    tags: ['React', 'Node.js', 'Python', 'CodeIgniter'],
    current: true,
  },
];
```

---

## ⚙️ Configurações de Build

### `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/moa_dev/',   // OBRIGATÓRIO para GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
```

### `package.json` — scripts obrigatórios
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

> ⚠️ O `base: '/moa_dev/'` no vite.config.js é CRÍTICO. Sem ele, os assets não carregam no GitHub Pages.

---

## 🪝 Hooks

### `useVanta.js`
```javascript
import { useEffect, useRef } from 'react';

export function useVanta(vantaEffect, options) {
  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);

  useEffect(() => {
    if (!vantaInstance.current && window.VANTA) {
      vantaInstance.current = window.VANTA[vantaEffect]({
        el: vantaRef.current,
        ...options,
      });
    }
    return () => {
      if (vantaInstance.current) {
        vantaInstance.current.destroy();
        vantaInstance.current = null;
      }
    };
  }, []);

  return vantaRef;
}
```

### `useScrollAnimation.js`
```javascript
import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}
```

---

## 🚀 Deploy — GitHub Pages

Passo a passo:

```bash
# 1. Instalar dependência de deploy
npm install --save-dev gh-pages

# 2. No package.json, adicionar homepage:
"homepage": "https://moaaskt.github.io/moa_dev/"

# 3. Build + deploy
npm run deploy
```

> O deploy publica na branch `gh-pages`. O repositório GitHub precisa estar configurado para servir dessa branch em Settings > Pages.

---

## 🔧 Regras de Desenvolvimento

### Componentes
- Sempre **functional components** com hooks
- Props tipadas com JSDoc ou PropTypes (opcional TypeScript futuro)
- Um componente por arquivo
- Máximo ~150 linhas por componente; extrair sub-componentes se maior

### Imports — ordem obrigatória
```javascript
// 1. React e hooks
import { useState, useEffect } from 'react';

// 2. Bibliotecas externas
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// 3. Componentes internos
import Button from '../ui/Button';

// 4. Dados e utils
import { projects } from '../../data/projects';

// 5. Estilos (se CSS modules)
import styles from './ProjectCard.module.css';
```

### Estado
- `useState` para estado local de componente
- Props drilling máximo 2 níveis; acima disso usar composição ou contexto simples
- Sem gerenciadores de estado externos (Redux, Zustand) neste projeto

### Performance
- Imagens de projetos: max 800px width, WebP quando possível
- Lazy load para seções abaixo do fold (React.lazy + Suspense)
- Vanta.js carregado via CDN no `index.html` (não como npm package)

---

## 📋 Ordem de Desenvolvimento Recomendada

```
Fase 1 — Base
  [x] Setup Vite + React + Tailwind
  [x] CSS variables (globals.css)
  [x] Fonts no index.html
  [x] Vanta.js CDN no index.html

Fase 2 — Layout
  [ ] Navbar (com scroll behavior)
  [ ] Hero section (com Vanta)
  [ ] Footer

Fase 3 — Conteúdo
  [ ] About section
  [ ] Projects section + ProjectCard
  [ ] Skills section
  [ ] Experience timeline
  [ ] Contact section

Fase 4 — Polimento
  [ ] CustomCursor
  [ ] ScrollProgress bar
  [ ] Animações Framer Motion em todas as sections
  [ ] Loader inicial
  [ ] Responsividade mobile completa

Fase 5 — Deploy
  [ ] Otimizar imagens
  [ ] SEO (meta tags, OG image)
  [ ] Deploy GitHub Pages
  [ ] Testar URL final
```

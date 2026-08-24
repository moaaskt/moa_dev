# 🌐 Moacir Neto — Portfólio Profissional

<div align="center">

[![Live Demo](https://img.shields.io/badge/Demo-moaaskt.github.io%2Fmoa__dev-brightgreen?style=for-the-badge&logo=githubpages&logoColor=white)](https://moaaskt.github.io/moa_dev/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite 8](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4.2-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**Portfólio interativo de alta performance focado em demonstrar competências práticas em desenvolvimento Full Stack, sistemas em produção, microsserviços, inteligência artificial e automação.**

[Acessar Portfólio Online](https://moaaskt.github.io/moa_dev/) • [Ver Projetos](#-projetos-em-destaque) • [Arquitetura & Engenharia](#-arquitetura--engenharia) • [Como Rodar](#-como-rodar-o-projeto)

</div>

---

## 🎯 Sobre o Projeto

Este projeto foi construído do zero para servir como a vitrine profissional de **Moacir Neto (Desenvolvedor Full Stack Jr.)**. 

O objetivo principal é apresentar de forma clara e objetiva para recrutadores, líderes técnicos e clientes:
1. **Experiência com sistemas reais em produção** (regras de negócio, manutenções críticas, fluxos transacionais e integrações).
2. **Domínio de tecnologias modernas** tanto no ecossistema JavaScript/TypeScript (React 19, Next.js, Node.js) quanto no Backend robusto (PHP/Laravel/CodeIgniter, Go, Python, Docker, PostgreSQL, MySQL e Redis).
3. **Cuidado com Engenharia e UI/UX**: Design autoral (sem templates prontos ou kits comerciais como MUI/Chakra), micro-interações fluidas, performance de alto nível e acessibilidade (WCAG AA).

---

## 🚀 Projetos em Destaque

| Projeto | Stack Principal | Foco / Diferencial de Engenharia | Status |
| :--- | :--- | :--- | :---: |
| **[WhatsMiau / Sherlock Scraper](https://github.com/moacir1neto/sherlock-scraper)** | Go, React, TypeScript, PostgreSQL, Redis, Docker | CRM B2B para prospecção e qualificação via WhatsApp, enriquecimento com IA, scraping assíncrono e dashboard analítico. | Open Source |
| **[Rastrecob](https://rastrecob.digitalnexo.com.br/)** | Laravel, PHP, MySQL, GPS/IoT, Docker | Sistema web para gestão de assinaturas, faturamento recorrente e provisionamento de usuários no GPSWOX. | Case Privado |
| **[Evento Santo](https://doardigital.com.br/evento-santo)** | PHP, CodeIgniter, JS, MySQL, Docker | Manutenção em produção de plataforma de eventos e doações, fluxos de checkout, faturas e regras de negócio. | Case Privado |
| **[VetOS IA](https://github.com/moaaskt/vetos-ai)** | React, TypeScript, IA, Tailwind | SaaS veterinário multi-tenant para gestão clínica, prontuários, agendamentos e automações inteligentes com IA. | Em Progresso |
| **[G'Store](https://github.com/moaaskt/loja-virtual-codeigniter)** | PHP, CodeIgniter 4, MySQL, Bootstrap, JS | E-commerce completo com catálogo dinâmico, carrinho de compras, painel administrativo e checkout. | Open Source |
| **[Guia do Cachorro](https://guiadocachorro.vercel.app/)** | Next.js, TypeScript, Tailwind, Supabase | Portal de conteúdo canino com renderização híbrida, banco de dados Supabase e alta otimização de SEO. | Open Source |

---

## 🛠️ Stack Tecnológica

- **Frontend Core**: [React 19](https://react.dev/), [ReactDOM 19](https://react.dev/), [Vite 8](https://vitejs.dev/)
- **Estilização & Design Tokens**: [Tailwind CSS v4](https://tailwindcss.com/) com `@tailwindcss/vite` e variáveis CSS nativas (`:root`)
- **Animações & Gestos**: [Framer Motion](https://www.framer.com/motion/) (`layoutId`, `AnimatePresence`), Canvas 2D Particles nativo
- **Ícones**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/), Devicons CDN
- **Qualidade & Testes**: [ESLint v9](https://eslint.org/) (Flat Config), [Playwright](https://playwright.dev/) para testes E2E
- **CI/CD & Hosting**: [GitHub Pages](https://pages.github.com/) via `gh-pages` com base path `/moa_dev/`

---

## 🏛️ Arquitetura & Engenharia

```
moa_dev/
├── .planning/                  # Memória, roadmap e documentação GSD
│   └── codebase/               # 7 documentos estruturados de arquitetura
├── src/
│   ├── assets/                 # Imagens otimizadas (WebP) e SVGs
│   ├── components/
│   │   ├── layout/             # Navbar fixa com mobile drawer, Footer
│   │   ├── sections/           # Hero, About, Projects, Skills, Experience, Github, Contact
│   │   └── ui/                 # ProjectCard, CustomCursor, ScrollProgress, TechMarquee...
│   ├── data/                   # Camada desacoplada de dados estáticos (projects, skills...)
│   ├── hooks/                  # useScrollAnimation (IntersectionObserver), useVanta
│   ├── styles/                 # globals.css, animations.css, tokens CSS
│   └── utils/                  # Utilitários funcionais (cn.js)
```

### Destaques Técnicos:
- **Clean Code & SRP**: Componentes desacoplados com limite estrito de responsabilidade e arquivos enxutos.
- **Animações com Baixa Latência**:
  - Simulação de partículas 2D em HTML5 Canvas no Hero com `requestAnimationFrame` e teardown limpo no unmount para evitar vazamentos de memória.
  - Cursor magnético personalizado com interpolação linear (LERP) e desativação automática em telas touch/mobile (< 768px).
- **Regra 90/10 de Design System**: 90% neutros escuros (`#080808`, `#0f0f0f`) e 10% de verde limão elétrico (`#b8f73c`) para foco e destaque visual.
- **Acessibilidade (WCAG AA)**: Contraste de cores superior a 4.5:1, foco visível customizado para navegação via teclado (`:focus-visible`) e labels descritivos para leitores de tela (`aria-label`).
- **Integração em Tempo Real com GitHub API**: Seção de atividade no GitHub com carregamento assíncrono dos repositórios mais recentes e contagem de commits com tratamento de rate-limit.

---

## 💻 Como Rodar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18+ recomendada)
- `npm` ou seu gerenciador de pacotes preferido

### 1. Clonar o repositório
```bash
git clone https://github.com/moaaskt/moa_dev.git
cd moa_dev
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse a aplicação no navegador em: `http://localhost:5173/moa_dev/`

### 4. Executar linting e checagem de código
```bash
npm run lint
```

### 5. Gerar build de produção
```bash
npm run build
```

### 6. Publicar no GitHub Pages
```bash
npm run deploy
```

---

## 📬 Contato & Conexões

- **LinkedIn**: [linkedin.com/in/moa-dev](https://www.linkedin.com/in/moa-dev/)
- **GitHub**: [github.com/moaaskt](https://github.com/moaaskt)
- **WhatsApp**: [+55 48 99179-2406](https://wa.me/5548991792406)
- **Email**: [moacirneto59@gmail.com](mailto:moacirneto59@gmail.com)

---

<div align="center">
Desenvolvido com ☕ e código limpo por <b>Moacir Neto</b>.
</div>

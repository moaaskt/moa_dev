# SKILL: portfolio-ui-design

> Use esta skill em QUALQUER tarefa de interface, componente visual, estilização ou decisão de design dentro do projeto `moa-portfolio`.

---

## 🎯 Contexto do Projeto

Portfólio pessoal de **Moacir Neto**, desenvolvedor full stack júnior (4 anos de experiência pessoal, 9 meses CLT). Objetivo: **impressionar recrutadores e conseguir emprego**. O portfólio precisa comunicar competência técnica, personalidade e diferencial num mercado competitivo.

---

## 🎨 Design System

### Paleta de Cores

```css
:root {
  /* Fundos */
  --bg-primary: #080808;       /* Fundo principal — quase preto */
  --bg-secondary: #0f0f0f;     /* Cards, seções alternadas */
  --bg-elevated: #161616;      /* Hover states, modais */

  /* Accent — Verde limão elétrico */
  --accent: #b8f73c;           /* CTA principal, destaques */
  --accent-dim: #8ab82a;       /* Hover do accent */
  --accent-glow: rgba(184, 247, 60, 0.15); /* Glow/sombra */

  /* Texto */
  --text-primary: #f0f0f0;     /* Títulos e texto principal */
  --text-secondary: #888888;   /* Texto de suporte, labels */
  --text-muted: #444444;       /* Placeholders, bordas */

  /* Bordas */
  --border: rgba(255, 255, 255, 0.06);
  --border-accent: rgba(184, 247, 60, 0.3);
}
```

> **Regra de ouro:** 90% preto e tons neutros, 10% accent. O verde limão aparece em: CTAs, ícones ativos, sublinhados hover, bordas de destaque, cursor customizado. Nunca use o accent como fundo de seção inteira.

### Tipografia

```
Display / Hero:    'Syne' (Google Fonts) — weights 700, 800
Body / UI:         'DM Sans' (Google Fonts) — weights 300, 400, 500
Código / Tags:     'JetBrains Mono' (Google Fonts) — weight 400
```

**Escala tipográfica:**
```css
--text-xs:   0.75rem;   /* Tags, badges */
--text-sm:   0.875rem;  /* Labels, metadados */
--text-base: 1rem;      /* Corpo */
--text-lg:   1.25rem;   /* Subtítulos */
--text-xl:   1.75rem;   /* H3 */
--text-2xl:  2.5rem;    /* H2 de seção */
--text-3xl:  4rem;      /* H1 hero (desktop) */
--text-4xl:  6rem;      /* Nome principal hero */
```

**Tracking (letter-spacing):**
- Display titles: `-0.03em` (tight)
- Section headers: `-0.02em`
- Labels/tags: `0.12em` (uppercase, spaced)
- Body: `0`

---

## 📐 Layout & Grid

```css
/* Container */
--max-width: 1200px;
--padding-x: clamp(1.5rem, 5vw, 4rem);

/* Seções */
--section-padding: clamp(80px, 12vw, 160px) 0;

/* Gap padrão entre cards */
--grid-gap: 1.5rem;
```

**Grid de cards de projeto:** `grid-template-columns: repeat(auto-fit, minmax(340px, 1fr))`

**Seções da página (em ordem):**
1. Hero — fullscreen com Vanta.js DOTS
2. About — split layout (texto + foto/stats)
3. Projects — grid de cards com hover elaborado
4. Skills — tags animadas ou bento grid
5. Experience — timeline vertical
6. Contact — simples, email + redes

---

## ✨ Padrões de Animação

### Princípios
- **Entrance animations:** Fade + translateY(30px) → translateY(0), duração 0.6s, easing `cubic-bezier(0.16, 1, 0.3, 1)`
- **Stagger:** 0.08s entre elementos em lista
- **Hover:** sempre `transition: all 0.25s ease`
- **Scroll-triggered:** usar `IntersectionObserver` com threshold 0.1

### Micro-interações obrigatórias
```
Cards de projeto:
  - Hover: borda accent aparece + leve translateY(-4px) + box-shadow glow
  - Image: scale(1.03) no hover com overflow hidden

Botões CTA:
  - Background slide da esquerda pra direita no hover
  - Ou: border que "preenche" no hover

Navbar:
  - Aparece com backdrop-blur após scroll de 80px
  - Link ativo: underline accent animado

Cursor customizado (desktop):
  - Círculo pequeno ~10px accent, segue o mouse suavemente
  - Escala para ~40px ao hover em links/botões
```

### Loader inicial
```
Sequência: Logo → nome letra por letra → fade in página
Duração total: ~1.5s
Só na primeira visita (sessionStorage flag)
```

---

## 🃏 Componentes

### Card de Projeto
```
Estrutura:
  [imagem/preview] → aspect-ratio 16/9, object-fit cover
  [tag de tech] → pill pequeno, canto superior direito
  [título] → Syne Bold
  [descrição] → 2 linhas max, truncado
  [links] → GitHub + Live, ícone + texto, separados

Estado hover:
  - Border: 1px solid var(--border-accent)
  - Box-shadow: 0 0 30px var(--accent-glow)
  - Image container: leve scale

Destaque (featured):
  - Card ocupa 2 colunas no grid
  - Layout horizontal (imagem esquerda, info direita)
```

### Skill Badge
```
Background: var(--bg-elevated)
Border: var(--border)
Padding: 0.4rem 0.9rem
Border-radius: 4px
Font: JetBrains Mono, text-sm
Hover: border-color accent, texto accent
```

### Botão Primary (CTA)
```
Background: var(--accent)
Color: #080808 (sempre escuro)
Font: DM Sans 500, uppercase, letter-spacing 0.08em
Padding: 0.85rem 2rem
Border-radius: 4px
Hover: background var(--accent-dim) + translateY(-2px)
```

### Botão Secondary (Ghost)
```
Background: transparent
Border: 1px solid var(--border)
Color: var(--text-primary)
Hover: border-color var(--accent) + color var(--accent)
```

---

## 🌌 Vanta.js DOTS — Configuração Hero

```javascript
VANTA.DOTS({
  el: "#hero-vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xb8f73c,        // accent — pontos verdes
  color2: 0x888888,       // secundário — pontos cinzas
  backgroundColor: 0x080808,
  size: 2.5,
  spacing: 35.0,
  showLines: false
})
```

> Destruir instância no unmount do componente React para evitar memory leak.

---

## 📱 Responsividade

```
Mobile-first. Breakpoints:
  sm:  480px
  md:  768px
  lg:  1024px
  xl:  1280px

Mobile específico:
  - Hero: texto 3xl máximo, sem cursor customizado
  - Projects grid: 1 coluna
  - Navbar: hamburger menu com drawer lateral (slide da direita)
  - Vanta: desabilitar em telas < 480px (performance)
```

---

## ♿ Acessibilidade (mínimo aceitável)

- Contraste de texto: mínimo AA (4.5:1 para body, 3:1 para large)
- Todos os `<img>` com `alt` descritivo
- Links com `aria-label` quando necessário
- Focus visible customizado usando `--accent`
- `prefers-reduced-motion`: desabilitar animações se ativo

---

## 🚫 O que NUNCA fazer

- Gradiente roxo/purple (clichê de portfólio dev)
- Cards com sombra cinza padrão
- Fonte Arial, Inter, Roboto ou system-ui
- Seções com padding insuficiente (< 60px)
- Animações que durem > 1s sem propósito
- Mais de 2 cores accent diferentes
- Background branco ou claro em qualquer seção
- Ícone de "código" genérico sem contexto

---

## ✅ Checklist antes de entregar qualquer componente

- [ ] Usa variáveis CSS do design system?
- [ ] Fontes corretas (Syne/DM Sans/JetBrains Mono)?
- [ ] Hover state implementado?
- [ ] Mobile testado (media query aplicada)?
- [ ] Animação de entrada presente?
- [ ] Sem hardcoded colors fora do sistema?

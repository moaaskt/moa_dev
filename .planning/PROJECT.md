# PROJETO: Upgrade Profissional do Portfólio Pessoal de Moacir Neto

## 🎯 Visão do Projeto
Transformar o portfólio pessoal de Moacir Neto em uma vitrine profissional de altíssimo impacto, focando em chamar a atenção de recrutadores, gerentes de contratação e líderes técnicos. O portfólio deve demonstrar competência técnica prática no desenvolvimento de sistemas reais em produção, habilidades full stack em PHP/CodeIgniter e JavaScript/React, domínio de ferramentas de infraestrutura como Docker, integrações complexas de API, automações inteligentes e Inteligência Artificial.

## 🚀 Objetivo Macro
Acelerar a contratação de Moacir Neto como Desenvolvedor Full Stack Jr. por meio de um portfólio premium que destaque habilidades tangíveis em resolver problemas reais de engenharia de software e entregar valor de negócio (checkouts, bancos de dados, regras de negócio complexas).

## 🛠️ Restrições Técnicas
Com base no mapeamento documentado em `.planning/codebase/`, as seguintes restrições técnicas devem ser estritamente cumpridas:
1. **Preservar `base: '/moa_dev/'`**: A propriedade `base` em `vite.config.js` é obrigatória para o correto carregamento dos assets e imagens estáticas no GitHub Pages.
2. **Framework & Ferramentas**: React 19, Vite 8, Tailwind CSS v4 (com `@tailwindcss/vite`), Framer Motion e Lucide React.
3. **Sem Frameworks de UI Prontos**: O design é 100% customizado. É expressamente proibido usar MUI, Chakra UI, shadcn/ui ou similares.
4. **Variáveis de Design e Cores**: 90% preto/tons neutros, 10% accent (Verde limão elétrico: `#b8f73c`). Não utilizar gradientes roxos comuns de portfólios dev, nem sombras cinzas padrão.
5. **Responsividade & Performance Mobile**: 
   - Limitação do tamanho de títulos no mobile (max `text-3xl`).
   - Desativação de efeitos pesados de Vanta.js em telas menores que 480px.
   - Ocultar o cursor customizado em telas touch/dispositivos móveis.
6. **Prevenção de Memory Leaks**: Destruir instâncias dinâmicas no desmonte (`useEffect` cleanups), incluindo `.destroy()` para o Vanta.js e `cancelAnimationFrame()` para o custom cursor.
7. **Regras de Organização do Código**:
   - Componentes funcionais e limpos com limite de ~150 linhas.
   - Ordem de importação de 5 passos estrita (React -> Externos -> Locais -> Dados/Hooks -> CSS).

## ⚠️ Riscos Principais
- **Quebra do Deploy no GitHub Pages**: Alterações acidentais no `vite.config.js` ou caminhos de pastas de imagens absolutos podem fazer com que os assets deem erro 404 após a build.
- **Gargalos de Performance / Memory Leaks**: Falhas ao limpar efeitos dinâmicos (Vanta.js, CustomCursor LERP animation loop) causando travamento ou lentidão progressiva na aba do navegador do recrutador.
- **Excesso de Foco no Visual / Falta de Substância**: Criar um site bonito, mas com descrições genéricas que não comprovam as habilidades full stack reais (como PHP, Docker, APIs, bancos de dados e regras de negócio).
- **Código Desorganizado / "Bugs na Vitrine"**: Apresentar código desordenado na pasta `src/` ou falhas de linting, gerando uma impressão de falta de cuidado com qualidade técnica.

## 📈 Critérios Gerais de Sucesso
- [ ] Portfólio totalmente responsivo e online no GitHub Pages sem links corrompidos ou erros 404 nos assets.
- [ ] Pontuações de Lighthouse satisfatórias (Performance > 80%, Acessibilidade/SEO/Práticas Recomendadas > 90%).
- [ ] Zero erros de linting (ESLint) ou formatação (Prettier) em toda a base.
- [ ] Acessibilidade em conformidade com WCAG AA (contraste do verde limão `--accent` contra fundos pretos, anel de foco customizado para navegação via teclado, alt tags em imagens).
- [ ] Narrativa profissional clara, transmitindo segurança sobre conhecimentos práticos (PHP, Docker, automações, APIs).

## 📁 Estado Inicial do Projeto
- **Codebase Mapeada**: O repositório já passou pelo scan `gsd-map-codebase`, gerando os documentos de apoio na pasta `.planning/codebase/`.
- **Base Pronta**: Projeto estruturado em Vite + React 19 + Tailwind v4 rodando localmente.
- **Estrutura de Pastas**: Componentes divididos em `layout`, `sections` e `ui`, dados em `src/data/`, estilos customizados em `src/styles/`, utilitários em `src/utils/` e hooks customizados em `src/hooks/`.

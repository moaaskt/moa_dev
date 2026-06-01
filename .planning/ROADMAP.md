# ROADMAP DO PROJETO: Waves de Upgrade do Portfólio

Este roadmap organiza o processo de upgrade profissional em waves incrementais, garantindo deploys seguros e revisões sistemáticas a cada etapa.

---

## 🌊 Wave 0: Discovery Técnico e Contexto GSD (Etapa Atual)
Mapeamento inicial da base de código e estabelecimento do contexto oficial de planejamento e regras.
- **Entregáveis**:
  - [x] Scan técnico da codebase (`gsd-map-codebase`).
  - [x] Criação do contexto oficial do projeto (`PROJECT.md`).
  - [x] Scoping de requisitos do portfólio (`REQUIREMENTS.md`).
  - [x] Definição de ondas e UATs (`ROADMAP.md`).
  - [x] Inicialização do estado de memória (`STATE.md`).
- **Critérios de Aceitação (UAT)**:
  - Diretório `.planning/` populado com todos os arquivos de contexto inicializados.
  - Planejamento aprovado pelo usuário antes do início de qualquer alteração de código.

---

## 🌊 Wave 1: Fundação Profissional, Contatos, Links, Metadados e SEO Básico
Ajustar a base de comunicação externa, caminhos de assets estáticos de contato e indexação para buscadores.
- **Objetivos**:
  - Auditar e atualizar todos os links de contato (WhatsApp, LinkedIn, GitHub, E-mail).
  - Configurar caminho e download do Currículo em PDF (garantindo compatibilidade com deploy no GitHub Pages).
  - Configurar metadados HTML, tags SEO básicas, tags `<title>` descritivas e imagens Open Graph (OG) no `index.html`.
- **Critérios de Aceitação (UAT)**:
  - Todos os botões e links de redes sociais funcionam e abrem nas abas correspondentes (`target="_blank" rel="noopener noreferrer"`).
  - O download do PDF do currículo funciona sem erros de caminho (404) localmente e em preview.
  - Tags de SEO e títulos atualizados no `index.html` e verificáveis no código fonte.

---

## 🌊 Wave 2: Narrativa Profissional, Textos e Posicionamento para Recrutadores
Reescrever toda a cópia de texto do site para posicionar Moacir como um engenheiro full stack pragmático de alto valor.
- **Objetivos**:
  - Reescrever a introdução da seção `Hero` com um subtítulo de impacto voltado a entregas técnicas e valor comercial.
  - Reformular a seção `About`, detalhando conquistas pragmáticas durante a experiência CLT na Agência Combo e projetos autônomos.
  - Adicionar bullet points descritivos e técnicos com foco em conquistas reais na linha do tempo da seção `Experience`.
- **Critérios de Aceitação (UAT)**:
  - Textos livres de erros gramaticais e com redação de alto nível profissional.
  - Seção de experiências descrevendo claramente a aplicação de stacks (PHP, MySQL, APIs) em problemas reais.

---

## 🌊 Wave 3: Projetos, Cards e Cases
Exposição de alto impacto para os principais projetos desenvolvidos (full stack, automação, IA).
- **Objetivos**:
  - Atualizar o arquivo de dados `src/data/projects.js` destacando as regras de negócio de cada case.
  - Enfatizar recursos avançados: Loja Virtual (PHP/CodeIgniter 4, checkouts, administração), Guia do Cachorro (Supabase/Next.js), Chatbot Gemini (Python/IA), e Gopher Scraper (Node.js/scraping).
  - Certificar o pleno funcionamento dos filtros dinâmicos de categoria no componente de galeria.
- **Critérios de Aceitação (UAT)**:
  - Componentes de projeto renderizam as novas cópias e tags corretas.
  - O filtro de categorias ("Todos", "Full Stack", "Frontend", "Backend", "IA & Python") funciona dinamicamente sem erros na console do navegador.
  - Fallbacks de imagem corretos exibidos caso a imagem do projeto não carregue.

---

## 🌊 Wave 4: UI/UX, Hero, Foto Pessoal, Favicon e Identidade Visual
Polimento dos elementos visuais dinâmicos, cursores, transições e otimização de imagens.
- **Objetivos**:
  - Substituir/ajustar a foto de perfil (`profile.jpg`) e favicon do portfólio.
  - Refinar e testar a física de LERP no cursor customizado (`CustomCursor.jsx`), garantindo que seja desabilitado em telas móveis/touch.
  - Validar a correta montagem e destruição do Vanta.js DOTS no `Hero.jsx` e `useVanta.js` para evitar vazamentos de memória na GPU.
  - Otimizar o tamanho e peso das imagens estáticas de projetos (WebP, no máximo 800px de largura).
- **Critérios de Aceitação (UAT)**:
  - Efeito Vanta.js inicializa de forma suave e é destruído (`.destroy()`) corretamente no unmount do React.
  - Cursor customizado funciona suavemente no desktop e se oculta no mobile sem quebrar layouts.
  - Assets visuais carregados rapidamente sem erros 404 e com pesos otimizados.

---

## 🌊 Wave 5: Qualidade Técnica, Lint, Acessibilidade, Performance e Responsividade
Refinamento técnico de baixo nível para certificar o portfólio sob auditorias rigorosas.
- **Objetivos**:
  - Rodar o linter (`eslint .`) e corrigir todos os problemas pendentes no código.
  - Verificar a acessibilidade de cores do verde limão `--accent` contra o fundo escuro, garantindo conformidade WCAG AA.
  - Adicionar outlines de foco acessíveis (`:focus-visible`) para navegação facilitada via teclado em links e botões.
  - Auditar adaptabilidade responsiva no mobile e implementar supressão de Vanta.js em telas menores que 480px.
- **Critérios de Aceitação (UAT)**:
  - Comando `npm run lint` executa sem gerar erros de compilação ou alertas.
  - Navegação do site é perfeitamente funcional usando apenas a tecla `Tab` do teclado.
  - Renderização fluida em dispositivos móveis com menus hamburger e drawer deslizante.

---

## 🌊 Wave 6: README, GitHub Profile, LinkedIn e Publicação Final
Polimento de canais de aquisição de talentos complementares e deploy público definitivo.
- **Objetivos**:
  - Atualizar o `README.md` principal do repositório com diagramas de arquitetura, diferenciais e tags.
  - Criar um checklist ou guia de otimização de perfil do GitHub e LinkedIn para alinhar com o portfólio.
  - Rodar a build final de produção e executar a publicação pública via `npm run deploy` para a branch `gh-pages` do GitHub Pages.
- **Critérios de Aceitação (UAT)**:
  - Portfólio totalmente online no domínio público do GitHub Pages sem bugs de asset.
  - `README.md` profissional e explicativo detalhando a engenharia por trás do portfólio.

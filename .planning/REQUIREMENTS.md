# REQUISITOS DO PROJETO: Upgrade Profissional do Portfólio

## 📋 Requisitos Funcionais (RF)

### RF01: Narrativa e Posicionamento Profissional
O portfólio deve comunicar instantaneamente a identidade de Moacir Neto como um Desenvolvedor Full Stack Júnior prático e orientado a resultados.
- **Histórico Profissional**: Detalhar a experiência CLT na Agência Digital Combo (PHP, WordPress, JavaScript, MySQL) e os 4 anos de projetos autônomos.
- **Narrativa de Impacto**: Substituir descrições puramente acadêmicas ou vagas por conquistas técnicas reais, focando em problemas resolvidos e regras de negócios entregues.

### RF02: Vitrine de Tecnologias Chave
A seção de competências (Skills) e os cards de projetos devem destacar de maneira integrada as seguintes tecnologias essenciais:
- **Backend & Infraestrutura**: PHP (CodeIgniter 4), MySQL, PostgreSQL, Docker, Node.js e Git.
- **Frontend & Interfaces**: React, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS v4 e Framer Motion.
- **IA, APIs & Automações**: Integração com a API do Google Gemini, automações inteligentes, web scraping (Python/Node.js) e processamento de dados (ETL).

### RF03: Cases de Sucesso Detalhados (Projetos)
Os cards e possíveis modais de projetos devem apresentar os sistemas desenvolvidos sob a ótica de "estudos de caso" focando em desafios técnicos reais superados:
- **PHP/CodeIgniter 4 (Loja Virtual)**: Destacar regras de negócio complexas, checkout, carrinho de compras, controle de estoque, painel administrativo e integrações.
- **Next.js & Supabase (Guia do Cachorro)**: Focar em sistemas robustos de produção, performance, SEO avançado, banco de dados relacional e infraestrutura na nuvem.
- **IA Generativa (Chatbot Jovem Programador)**: Demonstrar experiência prática com Python, APIs de IA (Gemini), engenharia de prompt, NLP e tratamento de erros.
- **Backend & Automações (Gopher Scraper & Petflix)**: Destacar web scraping, Node.js assíncrono, consumo de APIs REST (YouTube API) e autenticação segura (Firebase).

### RF04: Acesso Facilitado para Recrutadores (Contatos e Links)
O rodapé, menu e cabeçalho devem prover links diretos, limpos e sem quebras para:
- Perfil do LinkedIn profissional.
- Repositório do GitHub estruturado.
- E-mail de contato profissional direto.
- WhatsApp para contato rápido.
- Download direto do Currículo em PDF atualizado.

---

## ⚙️ Requisitos Não Funcionais (RNF)

### RNF01: Desempenho e Performance (Lighthouse)
A aplicação deve carregar rapidamente e responder de forma fluida a interações.
- Pontuação no Lighthouse de Performance maior ou igual a 80%.
- Lazy loading para imagens pesadas de projetos e renderizações abaixo da dobra (fold).
- Imagens em formatos modernos (WebP) limitadas a no máximo 800px de largura.

### RNF02: Estabilidade e Prevenção de Memory Leaks
Garantir o uso correto de recursos WebGL e loops de animação no ciclo de vida do React.
- O hook `useVanta.js` deve remover com sucesso a instância do efeito `VANTA.DOTS` chamando o método `.destroy()` ao desmontar o componente.
- O cursor customizado deve cancelar seu loop de animação (`cancelAnimationFrame`) ao desmontar para evitar vazamentos de memória na GPU.

### RNF03: Acessibilidade (WCAG AA)
Garantir a inclusão e usabilidade para todas as pessoas.
- Contraste de cor de pelo menos 4.5:1 para texto normal contra o fundo escuro (atenção especial ao verde limão `--accent` contra fundos pretos).
- Foco de teclado totalmente visível com anel personalizado utilizando a cor `--accent`.
- Imagens decorativas e SVGs com descrições apropriadas (`alt` ou `aria-label`).
- Suporte a media query `prefers-reduced-motion` para suavizar ou desligar transições.

### RNF04: Compatibilidade de Deploy (GitHub Pages)
- O build gerado pelo Vite deve usar obrigatoriamente caminhos relativos ao subdiretório `/moa_dev/` configurados no `vite.config.js`.
- Imagens e links internos devem usar caminhos base corretos para evitar erros de renderização em produção.

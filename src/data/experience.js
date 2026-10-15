export const experiences = [
  {
    id: 2,
    role: {
      pt: 'Desenvolvedor Full Stack Freelancer',
      en: 'Freelance Full Stack Developer',
    },
    company: 'Digital Combo',
    type: {
      pt: 'Projetos',
      en: 'Projects',
    },
    period: { start: '2026-06', end: null },
    duration: {
      pt: 'Em andamento',
      en: 'In progress',
    },
    description: {
      pt: 'Desenvolvimento e manutenção de aplicações web full stack como freelancer, atuando em múltiplos projetos simultâneos. Integração do Rastrecob com plataforma GPSWOX via APIs REST (PHP/Laravel). Desenvolvimento do VetOS AI, SaaS veterinário multi-tenant com NestJS, Prisma, PostgreSQL e Redis. Projetos sob demanda com React, Next.js, TypeScript, automações com Python e IA generativa (Google Gemini).',
      en: 'Development and maintenance of full stack web applications as a freelancer, working across multiple concurrent projects. Integration of Rastrecob with the GPSWOX tracking platform via REST APIs (PHP/Laravel). Core development of VetOS AI, a multi-tenant veterinary SaaS built with NestJS, Prisma, PostgreSQL, and Redis. On-demand web platforms with React, Next.js, TypeScript, Python automations, and Generative AI (Google Gemini).',
    },
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'Laravel', 'React', 'TypeScript', 'Python'],
    current: true,
  },
  {
    id: 1,
    role: {
      pt: 'Desenvolvedor Full Stack Jr.',
      en: 'Junior Full Stack Developer',
    },
    company: 'Evento Santo & Doar Digital',
    type: {
      pt: 'Full Stack',
      en: 'Full Stack',
    },
    period: { start: '2025-07', end: '2026-05' },
    duration: {
      pt: '~10 meses',
      en: '~10 months',
    },
    description: {
      pt: 'Atuação em plataforma web multi-tenant em produção, desenvolvendo e mantendo módulos de Eventos, Checkout, Fila de Espera, Caravanas, Cursos e Faturas. Implementação de integrações com gateway de pagamento Asaas e notificações via WhatsApp API, além de mensageria assíncrona com RabbitMQ. Correção de bug crítico de concorrência/estoque no checkout e resolução de gargalo de performance (memory exhausted) na listagem de eventos.',
      en: 'Hands-on development in a production multi-tenant web platform, building and maintaining modules for Events, Checkout, Waitlists, Caravans, Courses, and Invoicing. Implemented payment integrations with Asaas gateway and automated notifications via WhatsApp API, along with asynchronous messaging using RabbitMQ. Resolved critical race conditions in checkout inventory and performance bottlenecks (memory exhaustion) in event listings.',
    },
    tags: ['PHP', 'CodeIgniter 4', 'RabbitMQ', 'Asaas', 'WhatsApp API', 'MySQL', 'JavaScript', 'Bootstrap'],
    current: false,
  },
  {
    id: 3,
    role: {
      pt: 'Assistente Técnico em Automação Residencial e IoT',
      en: 'Technical Assistant in Home Automation & IoT',
    },
    company: 'Rossato Automações',
    type: {
      pt: 'Presencial',
      en: 'On-site',
    },
    period: { start: '2024-11', end: '2025-05' },
    duration: {
      pt: '~7 meses',
      en: '~7 months',
    },
    location: {
      pt: 'Florianópolis, SC',
      en: 'Florianopolis, SC, Brazil',
    },
    description: {
      pt: 'Atuação na instalação, configuração e manutenção de sistemas de automação residencial e dispositivos IoT, do planejamento da infraestrutura até a entrega e validação dos equipamentos no cliente. Instalação e configuração de dispositivos IoT e equipamentos inteligentes; implementação de automações residenciais; passagem, organização e identificação de cabeamento; planejamento básico de infraestrutura para automação; testes de funcionamento, suporte técnico em campo e manutenção de instalações existentes.',
      en: 'Installation, configuration, and maintenance of smart home systems and IoT devices, from infrastructure planning through client handoff and equipment validation. Configured smart devices and automated home routines; managed structural cabling, wiring organization, and identification; performed on-site technical diagnostics, field testing, and maintenance of automation setups.',
    },
    tags: ['IoT', 'Automação', 'Eletrônica'],
    current: false,
  },
];

export const experiences = [
  {
    id: 1,
    role: 'Desenvolvedor Full Stack Jr.',
    company: 'Evento Santo & Doar Digital',
    type: 'Full Stack',
    period: { start: '2025-07', end: '2026-05' },
    duration: '~10 meses',
    description: 'Atuação em plataforma web multi-tenant em produção, desenvolvendo e mantendo módulos de Eventos, Checkout, Fila de Espera, Caravanas, Cursos e Faturas. Implementação de integrações com gateway de pagamento Asaas e notificações via WhatsApp API, além de mensageria assíncrona com RabbitMQ. Correção de bug crítico de concorrência/estoque no checkout e resolução de gargalo de performance (memory exhausted) na listagem de eventos.',
    tags: ['PHP', 'CodeIgniter 4', 'RabbitMQ', 'Asaas', 'WhatsApp API', 'MySQL', 'JavaScript', 'Bootstrap'],
    current: false,
  },
  {
    id: 2,
    role: 'Desenvolvedor Full Stack',
    company: 'Digital Combo',
    type: 'Projetos',
    period: { start: '2023-01', end: null },
    duration: '4 anos',
    description: 'Desenvolvimento e manutenção de aplicações web full stack como freelancer, atuando em múltiplos projetos simultâneos. Integração do Rastrecob com plataforma GPSWOX via APIs REST (PHP/Laravel). Desenvolvimento do VetOS AI, SaaS veterinário multi-tenant com NestJS, Prisma, PostgreSQL e Redis. Projetos sob demanda com React, Next.js, TypeScript, automações com Python e IA generativa (Google Gemini).',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'Laravel', 'React', 'TypeScript', 'Python'],
    current: true,
  },
];

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
    description: 'Rastrecob: sistema de gestão de assinaturas e cobranças recorrentes para Digital Combo, incluindo correção de integração externa GPSWOX que retornava erro HTTP 422, com ajuste de identificador de API e restrição UNIQUE de banco. VetOS IA: SaaS veterinário multi-tenant com NestJS, Prisma, PostgreSQL e Redis, autenticação JWT e controle de permissões por role. Desenvolvimento de projetos web sob demanda (e-commerce, portais de conteúdo, automações com IA).',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'PHP', 'React'],
    current: true,
  },
];

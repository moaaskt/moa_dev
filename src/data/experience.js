export const experiences = [
  {
    id: 2,
    role: {
      pt: 'Desenvolvedor Full Stack Freelancer',
      en: 'Freelance Full Stack Developer',
    },
    company: 'Digital Combo',
    type: {
      pt: 'Remoto',
      en: 'Remote',
    },
    period: { start: '2026-06', end: null },
    duration: {
      pt: 'Em andamento',
      en: 'In progress',
    },
    description: {
      pt: 'Atuação como desenvolvedor freelancer em projetos de desenvolvimento e manutenção de aplicações, com foco em backend, integrações e automações. No Rastrecob, desenvolvimento e manutenção de funcionalidades utilizando PHP e Laravel, com integração à API REST da plataforma GPSWOX. No WhatsMiau, desenvolvimento de soluções de automação e atendimento via WhatsApp.',
      en: 'Freelance developer working on application development and maintenance projects, with a strong focus on backend, integrations, and automations. On Rastrecob, developed and maintained features using PHP and Laravel, integrated with the GPSWOX platform REST API. On WhatsMiau, built automation and customer support solutions via WhatsApp.',
    },
    tags: ['PHP', 'Laravel', 'REST API', 'WhatsApp API', 'GPS/IoT'],
    current: true,
  },
  {
    id: 1,
    role: {
      pt: 'Desenvolvedor Full Stack Jr.',
      en: 'Junior Full Stack Developer',
    },
    company: 'Doar Digital',
    type: {
      pt: 'Híbrido',
      en: 'Hybrid',
    },
    period: { start: '2025-07', end: '2026-05' },
    duration: {
      pt: '~10 meses',
      en: '~10 months',
    },
    description: {
      pt: 'Atuação no desenvolvimento e manutenção do Evento Santo, plataforma SaaS multi-tenant de eventos e doações desenvolvida pela Doar Digital, utilizando PHP 8, CodeIgniter 4 e MySQL. Desenvolvimento de módulos de inscrições, checkout, certificados e gerenciamento de participantes, incluindo regras de negócio para controle de vagas, lista de espera e substituição de participantes. Implementação de integrações com Asaas para pagamentos, WhatsApp Business API para notificações e mensageria assíncrona com RabbitMQ. Investigação e correção de problemas de concorrência que provocavam inscrições e ingressos duplicados, otimização de consultas MySQL, resolução de consumo excessivo de memória e geração de certificados em PDF com Dompdf.',
      en: 'Development and maintenance of Evento Santo, a multi-tenant SaaS platform for events and donations built by Doar Digital, using PHP 8, CodeIgniter 4, and MySQL. Development of registration, checkout, certificate, and participant management modules, including business rules for capacity control, waitlists, and attendee substitutions. Implementation of integrations with Asaas for payments, WhatsApp Business API for notifications, and asynchronous messaging with RabbitMQ. Investigation and resolution of concurrency race conditions causing duplicate registrations and tickets, MySQL query optimization, fixes for excessive memory usage, and PDF certificate generation with Dompdf.',
    },
    tags: ['PHP', 'CodeIgniter 4', 'MySQL', 'RabbitMQ', 'Asaas', 'WhatsApp API', 'JavaScript', 'Bootstrap'],
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
      pt: 'Atuação na instalação, configuração e manutenção de sistemas de automação residencial e dispositivos IoT. Responsável por cabeamento estruturado, testes de funcionamento, suporte técnico em campo e manutenção de instalações e equipamentos inteligentes.',
      en: 'Installation, configuration, and maintenance of smart home automation systems and IoT devices. Responsible for structured cabling, operational testing, on-site technical support, and maintenance of smart equipment and setups.',
    },
    tags: ['IoT', 'Automação', 'Eletrônica'],
    current: false,
  },
];

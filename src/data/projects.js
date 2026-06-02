import guiadocachorro from '../assets/images/projects/guiadocachorro.webp';
import gstore from '../assets/images/projects/gstore.webp';
import vetosIA from '../assets/images/projects/vetosAI.webp';
import rastrecobImage from '../assets/images/projects/rastrecob.webp';
import eventoSantoImage from '../assets/images/projects/eventosanto.webp';
import sherlockScraperImage from '../assets/images/projects/sherlock-scraper.webp';

export const projects = [
  {
    id: 'sherlock-scraper',
    title: 'WhatsMiau / Sherlock Scraper',
    description: 'CRM B2B para prospecção e qualificação de leads via WhatsApp, com scraping de dados públicos, enriquecimento com IA, campanhas assíncronas, chat multicanal e dashboard analítico.',
    image: sherlockScraperImage,
    tags: ['Go', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'fullstack',
    featured: true,
    private: false,
    links: {
      github: 'https://github.com/moacir1neto/sherlock-scraper',
      live: null,
    },
    year: 2025,
  },
  {
    id: 'rastrecob',
    title: 'Rastrecob',
    description: 'Case privado de sistema web para gestão de assinaturas, cobranças recorrentes, regras de negócio e provisionamento de usuários GPSWOX, com foco em fluxo transacional, validações e testes.',
    image: rastrecobImage,
    tags: ['Laravel', 'PHP', 'MySQL', 'GPS/IoT', 'Docker'],
    category: 'backend',
    featured: true,
    private: true,
    links: {
      github: null,
      live: null,
    },
    year: 2026,
  },
  {
    id: 'evento-santo',
    title: 'Evento Santo ',
    description: 'Case profissional em sistema web de eventos e doações, com atuação em manutenção de produção, checkout, faturas, regras de negócio, integrações e correção de bugs reais.',
    image: eventoSantoImage,
    tags: ['PHP', 'CodeIgniter', 'JavaScript', 'Bootstrap', 'MySQL', 'Docker'],
    category: 'fullstack',
    featured: true,
    private: true,
    links: {
      github: null,
      live: null,
    },
    year: 2025,
  },
  {
    id: 'vetos-ia',
    title: 'VetOS IA',
    description: 'SaaS veterinário em desenvolvimento, com foco em gestão clínica, agenda, prontuários, atendimento e recursos de IA para apoiar fluxos internos da clínica.',
    image: vetosIA,
    tags: ['React', 'TypeScript', 'IA', 'Tailwind'],
    category: 'ai',
    featured: true,
    private: true,
    links: {
      github: null,
      live: null,
    },
    year: 2026,
  },
  {
    id: 'loja-virtual',
    title: 'Loja Virtual CodeIgniter 4',
    description: 'Sistema de e-commerce desenvolvido com PHP e CodeIgniter 4, com cadastro de produtos, carrinho, painel administrativo, regras de negócio e fluxo de compra.',
    image: gstore,
    tags: ['PHP', 'CodeIgniter 4', 'MySQL', 'Bootstrap', 'JavaScript'],
    category: 'fullstack',
    featured: true,
    private: false,
    links: {
      github: 'https://github.com/moaaskt/loja-virtual-codeigniter',
      live: null,
    },
    year: 2024,
  },
  {
    id: 'guiadocachorro',
    title: 'Guia do Cachorro',
    description: 'Portal web sobre cães desenvolvido com Next.js, TypeScript, Tailwind CSS e Supabase, com foco em organização de conteúdo, interface responsiva e experiência de navegação clara.',
    image: guiadocachorro,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    category: 'fullstack',
    featured: true,
    private: false,
    links: {
      github: 'https://github.com/moaaskt/guiadocachorro',
      live: 'https://guiadocachorro.vercel.app/',
    },
    year: 2025,
  },
];

export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'IA & Python' },
];

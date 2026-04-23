import guiadocachorro from '../assets/images/projects/guiadocachorro.jpeg';
import petflix from '../assets/images/projects/petflix.png';
import chatjovemprogramador from '../assets/images/projects/chatjovem.png';
import gstore from '../assets/images/projects/gstore.png';

export const projects = [
  {
    id: 'guiadocachorro',
    title: 'Guia do Cachorro',
    description: 'Portal completo de lifestyle e bem-estar canino. Frontend moderno com Next.js 16, Tailwind v4 e banco de dados Supabase.',
    image: guiadocachorro,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    category: 'fullstack',
    featured: true,
    links: {
      github: 'https://github.com/moaaskt/guiadocachorro',
      live: 'https://guiadocachorro.vercel.app/',
    },
    year: 2025,
  },
  {
    id: 'petflix',
    title: 'Petflix',
    description: 'Streaming de vídeos para pets com autenticação Firebase e integração com YouTube Data API.',
    image: petflix,
    tags: ['JavaScript', 'Firebase', 'YouTube API', 'CSS'],
    category: 'frontend',
    featured: true,
    links: {
      github: 'https://github.com/moaaskt/petflix',
      live: 'https://petflix-neon.vercel.app/#/home',
    },
    year: 2024,
  },
  {
    id: 'chatbot-gemini',
    title: 'ChatBot Jovem Programador',
    description: 'Chatbot especialista construído com Python e IA Generativa (Google Gemini) para tirar dúvidas sobre o programa Jovem Programador.',
    image: chatjovemprogramador,
    tags: ['Python', 'JavaScript','Google Gemini', 'IA Generativa', 'NLP'],
    category: 'ai',
    featured: true,
    links: {
      github: 'https://github.com/moaaskt/ChatJovemProgramador-staging',
      live: 'https://chatjovemprogramador.up.railway.app/',
    },
    year: 2024,
  },
  {
    id: 'loja-virtual',
    title: 'Loja Virtual',
    description: 'E-commerce completo com painel administrativo, carrinho de compras, checkout e área do cliente. Desenvolvido com PHP e CodeIgniter 4.',
    image: gstore,
    tags: ['PHP', 'CodeIgniter 4', 'JavaScript', 'MySQL', 'Bootstrap'],
    category: 'fullstack',
    featured: false,
    links: {
      github: 'https://github.com/moaaskt/loja-virtual-codeigniter',
      live: null,
    },
    year: 2024,
  },
  {
    id: 'gopherscraper',
    title: 'Gopher Scraper',
    description: 'Sistema de rastreamento e monitoramento de preços com scraping automático.',
    image: null,
    tags: ['JavaScript', 'Web Scraping', 'Node.js' ],
    category: 'backend',
    featured: false,
    links: {
      github: 'https://github.com/moaaskt/gopherscraper',
      live: null,
    },
    year: 2024,
  },
  {
    id: 'rick-morty',
    title: 'Rick and Morty API',
    description: 'Aplicação de busca e exploração de personagens consumindo a Rick and Morty REST API.',
    image: null,
    tags: ['JavaScript', 'REST API', 'HTML', 'CSS'],
    category: 'frontend',
    featured: false,
    links: {
      github: 'https://github.com/moaaskt/RickAndMortyAPI',
      live: 'https://moaaskt.github.io/RickAndMortyAPI/',
    },
    year: 2024,
  },
];

export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'IA & Python' },
];

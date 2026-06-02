import guiadocachorro from '../assets/images/projects/guiadocachorro.webp';
import petflix from '../assets/images/projects/petflix.webp';
import chatjovemprogramador from '../assets/images/projects/chatjovem.webp';
import gstore from '../assets/images/projects/gstore.webp';

export const projects = [
  {
    id: 'guiadocachorro',
    title: 'Guia do Cachorro',
    description: 'Portal web sobre cães desenvolvido com Next.js, TypeScript, Tailwind CSS e Supabase, com foco em organização de conteúdo, interface responsiva e experiência de navegação clara.',
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
    id: 'loja-virtual',
    title: 'Loja Virtual CodeIgniter 4',
    description: 'Sistema de e-commerce desenvolvido com PHP e CodeIgniter 4, com foco em cadastro de produtos, carrinho, painel administrativo, regras de negócio e fluxo de compra.',
    image: gstore,
    tags: ['PHP', 'CodeIgniter 4', 'JavaScript', 'MySQL', 'Bootstrap'],
    category: 'fullstack',
    featured: true,
    links: {
      github: 'https://github.com/moaaskt/loja-virtual-codeigniter',
      live: null,
    },
    year: 2024,
  },
  {
    id: 'chatbot-gemini',
    title: 'ChatBot Jovem Programador',
    description: 'Chatbot desenvolvido com Python e integração com Google Gemini, focado em responder dúvidas sobre o programa Jovem Programador a partir de uma base contextual e fluxo guiado de atendimento.',
    image: chatjovemprogramador,
    tags: ['Python', 'JavaScript', 'Google Gemini', 'IA Generativa', 'NLP'],
    category: 'ai',
    featured: true,
    links: {
      github: 'https://github.com/moaaskt/ChatJovemProgramador-staging',
      live: 'https://chatjovemprogramador.up.railway.app/',
    },
    year: 2024,
  },
  {
    id: 'gopherscraper',
    title: 'Gopher Scraper',
    description: 'Projeto de automação e scraping em evolução, usado para explorar coleta de dados, organização de informações e rotinas de backend.',
    image: null,
    tags: ['JavaScript', 'Web Scraping', 'Node.js'],
    category: 'backend',
    featured: false,
    links: {
      github: 'https://github.com/moaaskt/gopherscraper',
      live: null,
    },
    year: 2024,
  },
  {
    id: 'petflix',
    title: 'Petflix',
    description: 'Aplicação frontend inspirada em streaming, voltada para consumo e organização de vídeos de pets, trabalhando integração com APIs externas e experiência visual responsiva.',
    image: petflix,
    tags: ['JavaScript', 'Firebase', 'YouTube API', 'CSS'],
    category: 'frontend',
    featured: false,
    links: {
      github: 'https://github.com/moaaskt/petflix',
      live: 'https://petflix-neon.vercel.app/#/home',
    },
    year: 2024,
  },
  {
    id: 'rick-morty',
    title: 'Rick and Morty API',
    description: 'Projeto frontend de consumo de API REST, com listagem, busca e navegação por personagens da API Rick and Morty.',
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

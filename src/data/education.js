import anhangueraLogo from '../assets/images/education/anhanguera.svg';
import senaiLogo from '../assets/images/education/senai.svg';
import senacLogo from '../assets/images/education/senac.svg';
import ciscoLogo from '../assets/images/education/cisco.svg';
import dioLogo from '../assets/images/education/dio.svg';

export const academicEducation = [
  {
    id: 'anhanguera',
    institution: 'Anhanguera Educacional',
    degree: {
      pt: 'Bacharelado em IA & Ciência de Dados',
      en: 'Bachelor in Artificial Intelligence & Data Science',
    },
    period: {
      pt: 'ago/2026 até o momento',
      en: 'Aug 2026 - Present',
    },
    status: 'in_progress',
    statusLabel: {
      pt: 'Em andamento',
      en: 'In Progress',
    },
    description: {
      pt: 'Graduação superior com grade curricular focada em algoritmos estruturados, matemática discreta e estatística para análise de dados, aprendizado de máquina (Machine Learning), redes neurais profundas (Deep Learning), processamento de linguagem natural (PLN) e arquitetura de dados em larga escala.',
      en: 'Undergraduate degree focused on structured algorithms, discrete mathematics, and statistics for data analytics, machine learning, deep learning neural networks, natural language processing (NLP), and large-scale data engineering architectures.',
    },
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'Estatística Computacional', 'Bancos de Dados', 'PLN / NLP'],
    logo: anhangueraLogo,
    website: 'https://www.anhanguera.com/',
  },
  {
    id: 'senai-sc',
    institution: 'SENAI/SC',
    degree: {
      pt: 'Técnico em Desenvolvimento de Sistemas',
      en: 'Systems Development Technician',
    },
    period: {
      pt: '2023 a 2024',
      en: '2023 - 2024',
    },
    status: 'completed',
    statusLabel: {
      pt: 'Concluído',
      en: 'Completed',
    },
    description: {
      pt: 'Matriz curricular de 1.200h estruturada em fundamentos de lógica e POO, engenharia de software (modelagem UML, levantamento de requisitos e padrões de projeto), banco de dados relacional (SQL com MySQL/PostgreSQL), desenvolvimento web (HTML5, CSS3, JavaScript) e mobile nativo para Android com Java, qualidade e testes de software, e integração com Indústria 4.0 e Internet das Coisas (IoT).',
      en: '1,200-hour comprehensive technical diploma covering programming logic & OOP, software engineering (UML modeling, requirements, design patterns), relational databases (SQL with MySQL/PostgreSQL), web development (HTML5, CSS3, JavaScript) and native Android mobile apps with Java, software testing and QA, and Industry 4.0 with IoT integration.',
    },
    skills: ['Java', 'JavaScript', 'HTML5 & CSS3', 'Mobile (Android)', 'SQL', 'Engenharia de Software (UML)', 'Testes & QA', 'IoT & Indústria 4.0'],
    logo: senaiLogo,
    website: 'https://sc.senai.br/',
  },
  {
    id: 'senac-sc',
    institution: 'Senac SC',
    degree: {
      pt: 'Qualificação profissional em Desenvolvimento de Sistemas',
      en: 'Professional Qualification in Systems Development',
    },
    period: {
      pt: '2025',
      en: '2025',
    },
    status: 'completed',
    statusLabel: {
      pt: 'Concluído',
      en: 'Completed',
    },
    description: {
      pt: 'Formação profissional de 440h dividida em: workshop inicial de pensamento computacional, Programador de Sistemas (200h focado em estruturação e lógica de sistemas), Desenvolvimento Web com Inteligência Artificial (240h focado em aplicações web modernas com HTML, CSS, JavaScript integradas com ferramentas de IA e manipulação de bancos de dados), oficinas de carreira e Hackathon Final em equipe com entrega de projeto real.',
      en: '440-hour intensive professional training divided into: computational thinking workshop, Systems Programming (200h on core system architecture and logic), Web Development with AI (240h building modern web apps with HTML, CSS, JavaScript integrated with AI tools and database management), career development, and a final Hackathon delivering a real-world software project.',
    },
    skills: ['Desenvolvimento Web', 'Inteligência Artificial', 'Python', 'JavaScript', 'HTML5 & CSS3', 'Bancos de Dados', 'Lógica & Algoritmos', 'Hackathon Final'],
    logo: senacLogo,
    website: 'https://www.sc.senac.br/',
  },
];

export const certifications = [
  {
    id: 'cisco-learnathon',
    title: {
      pt: 'Networking Academy Learn-A-Thon 2025',
      en: 'Networking Academy Learn-A-Thon 2025',
    },
    issuer: 'Cisco',
    date: {
      pt: 'jan/2026',
      en: 'Jan 2026',
    },
    description: {
      pt: 'Imersão técnica internacional em topologia e fundamentos de redes de computadores, protocolos TCP/IP, roteamento, sub-redes e práticas de segurança de infraestrutura.',
      en: 'International technical immersion covering computer networking foundations, TCP/IP protocol suite, IP subnetting, routing, and infrastructure cybersecurity best practices.',
    },
    skills: ['Redes de Computadores', 'TCP/IP', 'Segurança', 'Infraestrutura'],
    logo: ciscoLogo,
    link: 'https://www.netacad.com/',
  },
  {
    id: 'dio-ia',
    title: {
      pt: 'Introdução à Inteligência Artificial',
      en: 'Introduction to Artificial Intelligence',
    },
    issuer: 'DIO (Digital Innovation One)',
    date: {
      pt: 'jan/2026',
      en: 'Jan 2026',
    },
    description: {
      pt: 'Capacitação prática em fundamentos de inteligência artificial generativa, processamento de linguagem natural (NLP), engenharia de prompts e integração com APIs de LLMs.',
      en: 'Practical certification in generative AI principles, natural language processing (NLP), advanced prompt engineering, and LLM API integrations.',
    },
    skills: ['Inteligência Artificial', 'Prompt Engineering', 'LLMs', 'GenAI'],
    logo: dioLogo,
    link: 'https://www.dio.me/',
  },
];

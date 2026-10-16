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
      pt: 'Graduação voltada para arquiteturas neurais, machine learning, estatística computacional aplicada, processamento de linguagem natural (NLP) e engenharia de dados em larga escala.',
      en: 'Undergraduate degree focused on neural architectures, machine learning, applied computational statistics, NLP, and large-scale data engineering pipelines.',
    },
    skills: ['Machine Learning', 'Data Science', 'Python', 'Deep Learning', 'Statistics'],
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
      pt: 'ago/2021 a ago/2023',
      en: 'Aug 2021 - Aug 2023',
    },
    status: 'completed',
    statusLabel: {
      pt: 'Concluído',
      en: 'Completed',
    },
    description: {
      pt: 'Formação técnica profunda em arquitetura de software, programação orientada a objetos (POO), modelagem e otimização de bancos de dados relacionais SQL, arquitetura MVC e metodologias ágeis.',
      en: 'Rigorous technical foundation in software architecture, object-oriented programming (OOP), relational SQL database modeling, MVC architecture, and agile software development.',
    },
    skills: ['Lógica de Programação', 'Java', 'PHP', 'MySQL', 'MVC', 'Git'],
    logo: senaiLogo,
    website: 'https://sc.senai.br/',
  },
  {
    id: 'senac-sc',
    institution: 'Senac SC',
    degree: {
      pt: 'Qualificação Profissional ADS',
      en: 'Professional Qualification in Systems Analysis & Development',
    },
    period: {
      pt: 'fev/2025 a nov/2025',
      en: 'Feb 2025 - Nov 2025',
    },
    status: 'completed',
    statusLabel: {
      pt: 'Concluído',
      en: 'Completed',
    },
    description: {
      pt: 'Especialização prática orientada a soluções web corporativas, desenvolvimento e consumo de APIs RESTful, testes de integração e engenharia de requisitos de software.',
      en: 'Hands-on specialization tailored to enterprise web solutions, RESTful API design, integration testing, and software requirements engineering.',
    },
    skills: ['Web Development', 'JavaScript', 'Node.js', 'APIs REST', 'SQL'],
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

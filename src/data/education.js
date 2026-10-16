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
      pt: 'Formação técnica industrial de 1.200h com ênfase prática em lógica de programação e algoritmos, orientação a objetos com Java e C++, desenvolvimento de software com JavaScript e TypeScript, modelagem de banco de dados relacional SQL, testes de software e integração de sistemas com Internet das Coisas (IoT).',
      en: '1,200-hour industrial technical diploma covering structured algorithms, OOP with Java and C++, application development with JavaScript and TypeScript, relational SQL database modeling, software testing, and system integration with IoT.',
    },
    skills: ['Java', 'C++', 'JavaScript', 'TypeScript', 'Lógica de Programação', 'SQL', 'POO', 'IoT'],
    logo: senaiLogo,
    website: 'https://sc.senai.br/',
  },
  {
    id: 'senac-sc',
    institution: 'Senac SC',
    degree: {
      pt: 'Programa Jovem Programador',
      en: 'Youth Programmer Program — Systems Development',
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
      pt: 'Formação intensiva promovida pelo Seprosc e Senac SC voltada para o mercado de tecnologia catarinense. Abordou desenvolvimento web moderno (HTML, CSS, JavaScript e TypeScript), lógica computacional, modelagem e manipulação de bancos de dados SQL, aplicação de ferramentas de Inteligência Artificial no fluxo de desenvolvimento, versionamento Git e resolução de problemas no Hackathon PJP.',
      en: 'Intensive professional qualification by Seprosc and Senac SC focused on modern full stack web development, computational logic, relational SQL databases, AI-assisted development workflows, Git version control, and practical project delivery at the PJP Hackathon.',
    },
    skills: ['Desenvolvimento Web', 'JavaScript', 'TypeScript', 'Inteligência Artificial', 'SQL', 'Git', 'Lógica de Programação'],
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

import { FaWhatsapp } from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILLS_ROW_1 = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML5",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS3",
    image: "css.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/moa-dev/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/moaaskt",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/5548991792406",
  },
] as const;

export const SKILLS_ROW_2 = [
  {
    skill_name: "Bootstrap",
    image: "bootstrap.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PHP",
    image: "php.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CodeIgniter",
    image: "codeigniter.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express",
    image: "express.png",
    width: 80,
    height: 80,
  },
] as const;

export const SKILLS_ROW_3 = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
] as const;

export const SKILLS_ROW_4 = [
  {
    skill_name: "Git",
    image: "git.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitHub",
    image: "github.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "WordPress",
    image: "wordpress.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Linux",
    image: "linux.svg",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "WhatsMiau / Sherlock Scraper",
    description:
      "CRM B2B para prospecção e qualificação de leads via WhatsApp. Scraping de públicos, enriquecimento com IA, campanhas assíncronas, chat multicanal e dashboard analítico.",
    image: "/projects/whatsmiau.png",
    repoLink: "https://github.com/moaaskt/sherlock-scraper",
    liveLink: "",
  },
  {
    title: "Rastrecob",
    description:
      "Case privado de sistema web para gestão de assinaturas, cobranças recorrentes e provisionamento de usuários QRSMDX, com fluxo transacional, validações e testes.",
    image: "/projects/rastrecob.png",
    repoLink: "",
    liveLink: "https://rastrecob.digitalnexo.com.br/",
  },
  {
    title: "Evento Santo",
    description:
      "Case profissional em sistema web de eventos e doações, com atuação em manutenção de produção, checkout, faturas, regras de negócio, integrações e correção de bugs reais.",
    image: "/projects/eventosanto.png",
    repoLink: "",
    liveLink: "https://doardigital.com.br/evento-santo",
  },
  {
    title: "VetOS IA",
    description:
      "SaaS veterinário em desenvolvimento, com foco em gestão clínica, agenda, prontuários, atendimento e recursos de IA para apoiar fluxos internos da clínica.",
    image: "/projects/vetos.png",
    repoLink: "https://github.com/moaaskt/vetos-ai",
    liveLink: "",
  },
  {
    title: "Loja Virtual CodeIgniter 4",
    description:
      "Sistema de e-commerce desenvolvido com PHP e CodeIgniter 4, com cadastro de produtos, carrinho, painel administrativo, regras de negócio e fluxo de compra.",
    image: "/projects/lojavirtual.png",
    repoLink: "https://github.com/moaaskt/loja-virtual-codeigniter",
    liveLink: "",
  },
  {
    title: "Guia do Cachorro",
    description:
      "Portal web sobre cães desenvolvido com Next.js, TypeScript, Tailwind CSS e Supabase, com foco em organização de conteúdo, interface responsiva e experiência de navegação clara.",
    image: "/projects/guiadocachorro.png",
    repoLink: "https://github.com/moaaskt/guiadocachorro",
    liveLink: "https://guiadocachorro.vercel.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Comunidade",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/moaaskt",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/moa-dev/",
      },
    ],
  },
  {
    title: "Contato",
    data: [
      {
        name: "WhatsApp",
        icon: FaWhatsapp,
        link: "https://wa.me/5548991792406",
      },
      {
        name: "E-mail",
        icon: null,
        link: "mailto:moacirneto59@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Projetos",
    link: "#projects",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experiência",
    link: "#experience",
  },
  {
    title: "Contato",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/moaaskt/moa_dev",
};

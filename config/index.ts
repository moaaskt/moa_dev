import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Moacir Neto | Desenvolvedor Full Stack Jr.",
  description: "Desenvolvo sistemas web com PHP/CodeIgniter, React e Python, conectando interfaces, regras de negócio, APIs, automações e soluções com IA.",
  keywords: [
    "PHP",
    "CodeIgniter 4",
    "JavaScript",
    "React",
    "Python",
    "Next.js",
    "TypeScript",
    "Docker",
    "MySQL",
    "Tailwind CSS",
    "Full Stack Developer",
    "Portfolio",
  ] as Array<string>,
  authors: {
    name: "Moacir Neto",
    url: "https://github.com/moaaskt",
  },
} as const;

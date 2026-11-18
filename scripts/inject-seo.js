/**
 * inject-seo.js
 * Roda APÓS o vite build.
 * Injeta conteúdo textual estático no dist/index.html para que
 * o Googlebot indexe o portfólio mesmo sem executar JavaScript.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distIndex = path.join(__dirname, '..', 'dist', 'index.html');

if (!fs.existsSync(distIndex)) {
  console.error('❌ dist/index.html não encontrado. Rode npm run build primeiro.');
  process.exit(1);
}

const staticContent = `
<!-- SEO Static Content — injetado por inject-seo.js, invisível ao usuário -->
<div id="seo-content" aria-hidden="true" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;">

  <h1>Moacir Neto — Desenvolvedor Backend Jr.</h1>
  <p>
    Desenvolvedor Backend Jr. em Palhoça, SC. Especialista em PHP, Laravel, CodeIgniter 4,
    Node.js, NestJS, Python, React e APIs REST. Portfólio com projetos reais em produção.
  </p>

  <section>
    <h2>Sobre mim</h2>
    <p>
      Desenvolvedor Full Stack com foco em backend, baseado em Palhoça, Santa Catarina.
      Atuo com PHP 8, Laravel, CodeIgniter 4, Node.js, NestJS, Python e React.
      Tenho experiência prática com SaaS multi-tenant, integrações de pagamento (Asaas),
      WhatsApp Business API, RabbitMQ e Docker em ambiente de produção real.
    </p>
  </section>

  <section>
    <h2>Experiência</h2>
    <article>
      <h3>Desenvolvedor Full Stack Jr. — Evento Santo / Doar Digital</h3>
      <p>Julho 2025 – Maio 2026 | São José, SC | Híbrido</p>
      <p>
        Desenvolvimento e manutenção de plataforma SaaS multi-tenant de eventos e doações
        em PHP 8, CodeIgniter 4 e MySQL. Integração com Asaas, WhatsApp Business API e
        RabbitMQ. Correção de bugs críticos de concorrência e performance.
      </p>
    </article>
    <article>
      <h3>Desenvolvedor Full Stack Freelancer — Digital Combo</h3>
      <p>Junho 2026 – Atual | São José, SC | Remoto</p>
      <p>
        Projetos com PHP/Laravel, NestJS, React, PostgreSQL, Redis e Docker.
        Desenvolvimento do Rastrecob (integração GPSWOX), VetOS AI e WhatsMiau.
      </p>
    </article>
  </section>

  <section>
    <h2>Projetos em Destaque</h2>
    <article>
      <h3>Alvora — Plataforma LMS</h3>
      <p>Laravel, PHP, MySQL, Redis. Plataforma LMS B2B multi-tenant com análise de risco de evasão.</p>
    </article>
    <article>
      <h3>VetOS AI — SaaS Veterinário</h3>
      <p>NestJS, TypeScript, React, Prisma, PostgreSQL, Redis. SaaS multi-tenant para clínicas veterinárias.</p>
    </article>
    <article>
      <h3>WhatsMiau / Sherlock Scraper</h3>
      <p>Go, TypeScript, React, Redis, Docker. Automação e scraping para prospecção de leads via WhatsApp.</p>
    </article>
    <article>
      <h3>BuscaVag</h3>
      <p>TypeScript, Python, Next.js, FastAPI. Plataforma de coleta e análise de vagas com IA.</p>
    </article>
  </section>

  <section>
    <h2>Habilidades Técnicas</h2>
    <ul>
      <li>Back-end: PHP 8, Laravel, CodeIgniter 4, Node.js, NestJS, Go, Python</li>
      <li>Front-end: JavaScript, TypeScript, React, Next.js, HTML5, CSS3, Tailwind CSS</li>
      <li>Bancos de dados: MySQL, PostgreSQL, Redis, Firebase, Supabase</li>
      <li>APIs e integrações: REST APIs, Webhooks, Asaas, WhatsApp Business API, GPSWOX, JWT</li>
      <li>Mensageria: RabbitMQ, processamento assíncrono, BullMQ</li>
      <li>DevOps: Docker, Git, GitHub, Linux, GitHub Actions</li>
    </ul>
  </section>

  <section>
    <h2>Formação Acadêmica</h2>
    <ul>
      <li>Bacharelado em Inteligência Artificial e Ciência de Dados — Anhanguera (2026–2030)</li>
      <li>Técnico em Desenvolvimento de Sistemas Full Stack — SENAI/SC (2021–2023)</li>
      <li>Qualificação Profissional em ADS — Senac Santa Catarina (2025)</li>
    </ul>
  </section>

  <p>
    Desenvolvedor backend Palhoça SC. Programador PHP Laravel Santa Catarina.
    Dev backend junior Palhoça. Desenvolvedor web São José SC.
    PHP developer Palhoça Santa Catarina. Backend developer SC Brasil.
  </p>

</div>
`;

let html = fs.readFileSync(distIndex, 'utf-8');

if (html.includes('id="seo-content"')) {
  console.log('ℹ️  Conteúdo SEO já injetado — pulando.');
  process.exit(0);
}

// Injeta logo antes do fechamento do </body>
html = html.replace('</body>', `${staticContent}\n</body>`);

fs.writeFileSync(distIndex, html, 'utf-8');
console.log('✅ Conteúdo SEO estático injetado em dist/index.html');

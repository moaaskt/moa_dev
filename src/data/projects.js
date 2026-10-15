import guiadocachorro from '../assets/images/projects/guiadocachorro.webp';
import gstore from '../assets/images/projects/gstore.webp';
import vetosIA from '../assets/images/projects/vetosia2.png';
import rastrecobImage from '../assets/images/projects/rastrecob.webp';
import eventoSantoImage from '../assets/images/projects/eventosanto.webp';
import sherlockScraperImage from '../assets/images/projects/sherlock-scraper.webp';
import petflixImage from '../assets/images/projects/petflix.webp';
import radarAlfaImage from '../assets/images/projects/radaralfa.webp';
import rsSistemasImage from '../assets/images/projects/rs-sistemas.webp';

// Screenshots reais do ecossistema Sherlock Scraper & WhatsMiau
import listagemLeadsImg from '../assets/images/projects/sherlock/listagemleads.png';
import modalLeadImg from '../assets/images/projects/sherlock/modallead.png';
import kanbanLeadsImg from '../assets/images/projects/sherlock/kanbanleads.png';
import chatImg from '../assets/images/projects/sherlock/chat.png';
import configuracoesIAImg from '../assets/images/projects/sherlock/configuracoesIA.png';
import modalDisparoImg from '../assets/images/projects/sherlock/modaldisparo.png';
import dashboardImg from '../assets/images/projects/sherlock/dashboard.png';
import instanciasImg from '../assets/images/projects/sherlock/instancias.png';
import apiPlaygroundImg from '../assets/images/projects/sherlock/apyplayground.png';
import listaScraperImg from '../assets/images/projects/sherlock/listascraper.png';
import modalDisparoSucessoImg from '../assets/images/projects/sherlock/modaldisparosucesso.png';
import qrCodeInstanciaImg from '../assets/images/projects/sherlock/qrcodestancia.png';

export const projects = [
  {
    id: 'sherlock-scraper',
    title: 'WhatsMiau / Sherlock Scraper',
    description: {
      pt: 'Ecossistema SaaS B2B de alta escala para prospecção automatizada no Google Maps, enriquecimento de leads com IA (Gemini), orquestração assíncrona de campanhas via Redis/Asynq, streaming SSE e CRM multicanal WhatsApp.',
      en: 'High-scale B2B SaaS ecosystem for automated Google Maps prospecting, AI lead enrichment (Gemini), async campaign orchestration via Redis/Asynq, SSE streaming, and multichannel WhatsApp CRM.',
    },
    image: sherlockScraperImage,
    tags: ['Go (Fiber)', 'React 18', 'TypeScript', 'PostgreSQL 15', 'Redis', 'Docker Compose', 'Gemini AI', 'Asynq', 'whatsmeow'],
    category: 'fullstack',
    featured: true,
    private: false,
    links: {
      github: 'https://github.com/moacir1neto/sherlock-scraper',
      live: null,
    },
    year: 2025,
    role: {
      pt: 'Engenheiro de Software & Arquiteto Full Stack',
      en: 'Software Engineer & Full Stack Architect',
    },
    overview: {
      pt: 'Ecossistema SaaS de prospecção e qualificação B2B composto por dois núcleos independentes e complementares: o Sherlock Scraper (backend em Go/Fiber responsável pela raspagem concorrente no Google Maps, scrapers Playwright, enriquecimento de dados com IA generativa Gemini e orquestração assíncrona de filas via Redis/Asynq com streaming em tempo real via Server-Sent Events) e o WhatsMiau (painel CRM completo em React 18 com TypeScript, chat multicanal com WhatsApp Web nativo via whatsmeow, kanban de oportunidades drag-and-drop e telemetria analítica).',
      en: 'B2B prospecting and qualification SaaS ecosystem composed of two complementary core engines: Sherlock Scraper (Go/Fiber backend handling concurrent Google Maps scraping, Playwright workers, Gemini generative AI enrichment, and async Redis/Asynq queue orchestration with real-time SSE streaming) and WhatsMiau (complete CRM panel in React 18 with TypeScript, native WhatsApp Web multichannel chat via whatsmeow, drag-and-drop opportunity Kanban, and analytics telemetry).',
    },
    highlights: [
      {
        pt: 'Arquitetura distribuída com 7 microsserviços orquestrados via Docker Compose.',
        en: 'Distributed architecture featuring 7 microservices orchestrated via Docker Compose.',
      },
      {
        pt: 'Fila assíncrona gerenciada com Redis e Asynq com streaming de progresso em tempo real via SSE (Server-Sent Events).',
        en: 'Asynchronous queue managed with Redis and Asynq with real-time progress streaming via Server-Sent Events (SSE).',
      },
      {
        pt: 'Pipeline de Inteligência Artificial com Google Gemini: geração automática de dossiês com maturidade digital, identificação de gaps de negócio, icebreakers e pitches customizados.',
        en: 'AI pipeline with Google Gemini: automated commercial dossiers with digital maturity scores, business gap analysis, conversation icebreakers, and custom sales pitches.',
      },
      {
        pt: 'Integração direta com o protocolo do WhatsApp via biblioteca Go whatsmeow, suportando múltiplas instâncias simultâneas e pareamento por QR Code.',
        en: 'Direct WhatsApp protocol integration via Go whatsmeow library, supporting simultaneous multi-instances and QR Code pairing.',
      },
      {
        pt: 'Chat multicanal reativo com suporte a anexos, notas internas, tags de contato e histórico de interações.',
        en: 'Reactive multichannel chat with attachments, internal team notes, contact tagging, and complete conversation history.',
      },
      {
        pt: 'API REST modular com Fiber em Go dividida rigorosamente no padrão Handlers → Services → Repositories → Core.',
        en: 'Modular REST API using Go Fiber following clean architecture: Handlers → Services → Repositories → Core.',
      },
    ],
    features: [
      {
        title: {
          pt: 'Mecanismo de Prospecção Concorrente',
          en: 'Concurrent Prospecting Engine',
        },
        description: {
          pt: 'Extração contínua no Google Maps e Google Places API por nicho e região geográfica, com sanitização de telefones e deduplicação automática.',
          en: 'Continuous extraction on Google Maps and Google Places API by niche and geography, with phone number sanitization and automated deduplication.',
        },
      },
      {
        title: {
          pt: 'Dossiê Comercial com Gemini AI',
          en: 'Commercial Dossier with Gemini AI',
        },
        description: {
          pt: 'Coleta o site público do lead via Playwright e gera em segundos um diagnóstico completo com nota de maturidade digital, oportunidades de venda e quebras de objeções.',
          en: 'Crawls lead websites via Playwright to generate an instant diagnosis with digital maturity score, sales opportunities, and objection busters.',
        },
      },
      {
        title: {
          pt: 'Disparos em Lote com Cadência Inteligente',
          en: 'Smart Cadence Batch Dispatch',
        },
        description: {
          pt: 'Fila de background com Asynq para envio humanizado com pausas randômicas, variáveis personalizadas e monitoramento de taxa de entrega ao vivo.',
          en: 'Background queue powered by Asynq for humanized dispatch with randomized delays, custom variables, and live delivery rate telemetry.',
        },
      },
      {
        title: {
          pt: 'Chat Multicanal & Painel de Atendimento',
          en: 'Multichannel Live Chat & Inbox',
        },
        description: {
          pt: 'Central de conversas fluida integrada ao WhatsApp Web, permitindo atendimento em tempo real por múltiplos operadores.',
          en: 'Fluid conversation hub integrated directly into WhatsApp Web, allowing real-time multi-agent customer support.',
        },
      },
      {
        title: {
          pt: 'Kanban do Funil de Vendas',
          en: 'Sales Funnel Kanban Board',
        },
        description: {
          pt: 'Gestão visual de leads em etapas de qualificação, proposta, negociação e fechamento com interface drag-and-drop.',
          en: 'Visual pipeline management across qualification, proposal, negotiation, and closing stages with drag-and-drop UI.',
        },
      },
      {
        title: {
          pt: 'Gestor Multi-Instâncias & Telemetria',
          en: 'Multi-Instance Manager & Telemetry',
        },
        description: {
          pt: 'Conexão e monitoramento de integridade de múltiplos números de WhatsApp com reconexão automática e gráficos analíticos.',
          en: 'Connection management and health monitoring for multiple WhatsApp numbers with automatic reconnection and analytics charts.',
        },
      },
    ],
    technicalDecisions: {
      pt: 'A decisão de estruturar o backend em Go com Fiber e workers dedicados através do Asynq sobre Redis foi tomada para assegurar baixa latência, footprint mínimo de memória e isolamento das tarefas intensivas de rede (scraping e disparo) em relação à API transacional. A sincronização em tempo real do progresso das campanhas utiliza SSE (Server-Sent Events) com Redis Pub/Sub, eliminando polling desnecessário no frontend. O frontend adota React 18 com tipagem estrita em TypeScript, Tailwind CSS e Framer Motion para uma experiência de usuário rica com cards em glassmorphism e microinterações.',
      en: 'Structuring the backend in Go with Fiber and dedicated background workers via Asynq over Redis ensures sub-millisecond latencies, minimal RAM consumption, and complete isolation of network-intensive tasks (scraping and batch dispatch) from the core transactional API. Real-time campaign tracking uses SSE (Server-Sent Events) with Redis Pub/Sub, eliminating frontend polling overhead. The frontend leverages React 18 with strict TypeScript typing, Tailwind CSS, and Framer Motion for a fluid user experience featuring glassmorphism cards and micro-interactions.',
    },
    gallery: [
      {
        id: 'listagemleads',
        title: {
          pt: 'Listagem de Leads & Filtros Avançados',
          en: 'Lead Management & Advanced Filters',
        },
        category: {
          pt: 'Inteligência & Gestão',
          en: 'Intelligence & Management',
        },
        description: {
          pt: 'Tabela de leads com glassmorphism, busca instantânea, badges de status e ações rápidas para disparo e visualização de dossiês.',
          en: 'Glassmorphism lead table featuring instant search, status badges, and rapid-action shortcuts for dispatch and dossier viewing.',
        },
        image: listagemLeadsImg,
      },
      {
        id: 'modallead',
        title: {
          pt: 'Dossiê IA do Lead (Google Gemini)',
          en: 'Lead AI Commercial Dossier (Google Gemini)',
        },
        category: {
          pt: 'Inteligência & Gestão',
          en: 'Intelligence & Management',
        },
        description: {
          pt: 'Modal detalhado exibindo score de maturidade digital, análise de gaps comerciais, icebreakers para abordagem e pitches personalizados gerados por IA.',
          en: 'Comprehensive modal revealing digital maturity scores, commercial gaps, conversational icebreakers, and AI-tailored sales pitches.',
        },
        image: modalLeadImg,
      },
      {
        id: 'kanbanleads',
        title: {
          pt: 'Kanban do Funil de Vendas',
          en: 'Sales Funnel Kanban Board',
        },
        category: {
          pt: 'Inteligência & Gestão',
          en: 'Intelligence & Management',
        },
        description: {
          pt: 'Visualização de pipeline em colunas de qualificação com movimentação drag-and-drop e controle de conversão por estágio.',
          en: 'Pipeline visualization organized in qualification columns with smooth drag-and-drop movement and conversion rates.',
        },
        image: kanbanLeadsImg,
      },
      {
        id: 'chat',
        title: {
          pt: 'Chat Multicanal em Tempo Real',
          en: 'Real-Time Multichannel Chat',
        },
        category: {
          pt: 'Operação & Comunicação',
          en: 'Operations & Messaging',
        },
        description: {
          pt: 'Painel de conversas do WhatsApp com histórico integrado, mensagens de áudio/mídia, painel retrátil de perfil e troca rápida de instâncias.',
          en: 'WhatsApp chat console with integrated history, audio/media support, collapsible lead profile drawer, and instant instance switching.',
        },
        image: chatImg,
      },
      {
        id: 'configuracoesIA',
        title: {
          pt: 'Configurações de IA & Prompts',
          en: 'AI Settings & Prompt Engineering',
        },
        category: {
          pt: 'Operação & Comunicação',
          en: 'Operations & Messaging',
        },
        description: {
          pt: 'Interface para customização do tom de voz do agente, instruções de sistema e parâmetros da API Gemini para análise dos sites.',
          en: 'UI for fine-tuning agent tone of voice, system prompt instructions, and Gemini API inference parameters.',
        },
        image: configuracoesIAImg,
      },
      {
        id: 'modaldisparo',
        title: {
          pt: 'Configuração de Disparos em Lote',
          en: 'Batch Campaign Dispatch Setup',
        },
        category: {
          pt: 'Operação & Comunicação',
          en: 'Operations & Messaging',
        },
        description: {
          pt: 'Definição de campanhas em massa com seleção de instâncias, templates dinâmicos, cadência de segundos entre envios e validação prévia de números.',
          en: 'Mass campaign setup with instance selection, dynamic templates, customizable send cadence, and pre-flight number validation.',
        },
        image: modalDisparoImg,
      },
      {
        id: 'dashboard',
        title: {
          pt: 'Dashboard Analítico & Métricas',
          en: 'Analytics Dashboard & Metrics',
        },
        category: {
          pt: 'Monitoramento & Infra',
          en: 'Monitoring & Infrastructure',
        },
        description: {
          pt: 'Visão consolidada de desempenho das campanhas, taxas de resposta, volume de mensagens trafegadas e saúde operacional das conexões.',
          en: 'Consolidated overview of campaign performance, reply rates, message volume throughput, and connection operational health.',
        },
        image: dashboardImg,
      },
      {
        id: 'instancias',
        title: {
          pt: 'Gestor de Múltiplas Instâncias WhatsApp',
          en: 'WhatsApp Multi-Instance Manager',
        },
        category: {
          pt: 'Monitoramento & Infra',
          en: 'Monitoring & Infrastructure',
        },
        description: {
          pt: 'Painel de controle com status de conexão em tempo real, nomes das instâncias, números vinculados e opções de reinicialização.',
          en: 'Control hub displaying real-time connection status, instance identifiers, linked phone numbers, and reboot controls.',
        },
        image: instanciasImg,
      },
      {
        id: 'apyplayground',
        title: {
          pt: 'API Playground & Documentação REST',
          en: 'Interactive API Playground & REST Docs',
        },
        category: {
          pt: 'Monitoramento & Infra',
          en: 'Monitoring & Infrastructure',
        },
        description: {
          pt: 'Ambiente interativo embutido para testes de endpoints, visualização de payloads JSON e validação de tokens de autenticação.',
          en: 'Embedded interactive playground for testing endpoints, inspecting JSON payloads, and validating auth tokens.',
        },
        image: apiPlaygroundImg,
      },
      {
        id: 'listascraper',
        title: {
          pt: 'Gestão de Tarefas de Scraping',
          en: 'Scraping Tasks Management',
        },
        category: {
          pt: 'Automação & Scraping',
          en: 'Automation & Scraping',
        },
        description: {
          pt: 'Histórico de pesquisas executadas no Google Maps com quantidade de leads coletados, status de execução e logs do worker.',
          en: 'Execution log of Google Maps scraping tasks with collected lead counts, status progress, and worker diagnostics.',
        },
        image: listaScraperImg,
      },
      {
        id: 'modaldisparosucesso',
        title: {
          pt: 'Confirmação e Fila de Campanha',
          en: 'Campaign Confirmation & Enqueueing',
        },
        category: {
          pt: 'Automação & Scraping',
          en: 'Automation & Scraping',
        },
        description: {
          pt: 'Feedback visual imediato após o enfileiramento das mensagens no Asynq com identificador do job e redirecionamento para o monitoramento SSE.',
          en: 'Immediate visual feedback upon enqueueing messages into Asynq with job ID and automatic redirection to SSE monitoring.',
        },
        image: modalDisparoSucessoImg,
      },
      {
        id: 'qrcodestancia',
        title: {
          pt: 'Pareamento WhatsApp via QR Code',
          en: 'WhatsApp Pairing via QR Code',
        },
        category: {
          pt: 'Automação & Scraping',
          en: 'Automation & Scraping',
        },
        description: {
          pt: 'Geração dinâmica de QR Code para autenticação rápida de novas contas WhatsApp diretamente pela biblioteca Go whatsmeow.',
          en: 'Dynamic QR Code generator for instantaneous authentication of new WhatsApp accounts powered by Go whatsmeow.',
        },
        image: qrCodeInstanciaImg,
      },
    ],
    architecture: {
      services: [
        {
          name: 'whatsmiau-ui',
          port: '3031',
          tech: 'React 18 + Vite + Tailwind',
          role: {
            pt: 'Painel CRM principal, chat multicanal, kanban e dashboard de métricas.',
            en: 'Main CRM dashboard, multichannel chat, kanban pipeline, and metrics overview.',
          },
        },
        {
          name: 'whatsmiau-api',
          port: '8081',
          tech: 'Go + whatsmeow',
          role: {
            pt: 'Microserviço especializado na conexão de baixo nível com o protocolo do WhatsApp, pareamento QR Code e envio/recebimento de mensagens.',
            en: 'Microservice dedicated to low-level WhatsApp protocol connectivity, QR Code pairing, and message routing.',
          },
        },
        {
          name: 'api (Sherlock API)',
          port: '3005',
          tech: 'Go + Fiber Framework',
          role: {
            pt: 'API central de negócios: autenticação, orquestração de campanhas, streaming SSE, gerenciamento de leads e dossiês de IA.',
            en: 'Core business API: authentication, campaign orchestration, SSE streaming, lead lifecycle, and AI dossiers.',
          },
        },
        {
          name: 'sherlock-scraper',
          port: '8000',
          tech: 'Python + Playwright',
          role: {
            pt: 'Worker especializado em web scraping dinâmico no Google Maps, busca de CNPJ e extração de conteúdo para alimentar a IA.',
            en: 'Dedicated worker for dynamic web scraping on Google Maps, company data lookup, and content extraction for AI ingestion.',
          },
        },
        {
          name: 'db',
          port: '5434',
          tech: 'PostgreSQL 15',
          role: {
            pt: 'Banco de dados relacional principal armazenando leads, contatos, conversas, campanhas e histórico de métricas.',
            en: 'Primary relational database storing leads, contacts, chats, campaigns, and telemetry history.',
          },
        },
        {
          name: 'redis',
          port: '6379',
          tech: 'Redis Alpine',
          role: {
            pt: 'Fila assíncrona de alta performance para o Asynq, cache transacional e barramento Pub/Sub para eventos SSE.',
            en: 'High-performance async queue backend for Asynq, transactional cache, and Pub/Sub event bus for SSE.',
          },
        },
        {
          name: 'frontend (Sherlock Admin)',
          port: '5173',
          tech: 'React + TypeScript',
          role: {
            pt: 'Interface administrativa complementar de controle e monitoramento de scraping.',
            en: 'Complementary admin interface for scraping control and job monitoring.',
          },
        },
      ],
      campaignFlow: [
        {
          pt: '1. Frontend (React 18) submete requisição POST /api/v1/campaigns para disparo em lote.',
          en: '1. Frontend (React 18) submits POST /api/v1/campaigns request for batch dispatch.',
        },
        {
          pt: '2. API Go (Fiber) valida os dados e enfileira a tarefa assíncrona no Redis (Asynq) retornando status 202 Accepted imediatamente.',
          en: '2. Go API (Fiber) validates payloads and enqueues async tasks into Redis (Asynq), returning 202 Accepted immediately.',
        },
        {
          pt: '3. Background Worker Go consome a task, consulta a API WhatsMiau para validar a existência dos números e dispara as mensagens com intervalos randômicos anti-bloqueio.',
          en: '3. Go background worker consumes task, checks WhatsMiau API to validate active numbers, and dispatches messages with randomized anti-ban delays.',
        },
        {
          pt: '4. Cada evento de envio é publicado no canal Redis Pub/Sub (campaigns:logs:<id>).',
          en: '4. Every dispatch event is published to Redis Pub/Sub channel (campaigns:logs:<id>).',
        },
        {
          pt: '5. API Go consome o Pub/Sub e transmite o progresso em tempo real para o Frontend via conexão Server-Sent Events (SSE).',
          en: '5. Go API consumes Pub/Sub and streams live campaign progress to the frontend via Server-Sent Events (SSE).',
        },
      ],
      aiPipeline: [
        {
          pt: '1. Scraping inicial extrai nome, categoria e telefone no Google Maps e Google Places API.',
          en: '1. Initial scraper extracts business name, category, and phone from Google Maps and Places API.',
        },
        {
          pt: '2. Worker com Playwright navega no website do estabelecimento comercial e extrai conteúdo textual estruturado.',
          en: '2. Playwright worker crawls the business website and extracts structured text content.',
        },
        {
          pt: '3. Pipeline do Google Gemini analisa o material corporativo extraindo Business Insights estruturados em JSON.',
          en: '3. Google Gemini pipeline inspects corporate web assets and extracts structured JSON business insights.',
        },
        {
          pt: '4. Dossier Service injeta os dados em prompts contextuais refinados para o Gemini AI.',
          en: '4. Dossier Service injects insights into refined prompt templates for Gemini AI.',
        },
        {
          pt: '5. Sistema armazena no PostgreSQL e renderiza no LeadDetailsModal com diagnósticos de maturidade, gaps e argumentos de venda prontos.',
          en: '5. System persists dossiers in PostgreSQL and renders them in LeadDetailsModal with maturity diagnostics, gaps, and ready-to-use sales arguments.',
        },
      ],
    },
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
      live: 'https://rastrecob.digitalnexo.com.br/',
    },
    year: 2026,
    role: 'Desenvolvedor Backend & Integrações',
    overview: 'Plataforma empresarial de gestão financeira recorrente e telemetria voltada para frotas e rastreamento. O sistema automatiza o ciclo completo de faturamento, conciliação e provisionamento imediato de acessos na plataforma GPSWOX.',
    highlights: [
      'Sincronização bidirecional e provisionamento automatizado de credenciais via API do GPSWOX.',
      'Automação de régua de cobrança e bloqueio/desbloqueio automático de dispositivos rastreados.',
      'Arquitetura segura com isolamento de dados de clientes e trilhas de auditoria transacional.',
    ],
    features: [
      {
        title: 'Gestão de Planos e Cobrança Recorrente',
        description: 'Geração automatizada de faturas, integração com gateways de pagamento e acompanhamento de inadimplência.',
      },
      {
        title: 'Integração com Plataforma GPSWOX',
        description: 'Comunicação via webhook e REST para liberação de rastreadores, criação de subcontas e monitoramento de status.',
      },
      {
        title: 'Painel Administrativo e Relatórios',
        description: 'Visão consolidada de MRR (Receita Recorrente Mensal), churn e saúde operacional dos contratos.',
      },
    ],
    technicalDecisions: 'Desenvolvido em Laravel com arquitetura de serviços e jobs assíncronos para processar conciliações financeiras em segundo plano, garantindo alta disponibilidade sem travar a interface do operador.',
  },
  {
    id: 'evento-santo',
    title: 'Evento Santo',
    description: 'Case profissional em sistema web de eventos e doações, com atuação em manutenção de produção, checkout, faturas, regras de negócio, integrações e correção de bugs reais.',
    image: eventoSantoImage,
    tags: ['PHP', 'CodeIgniter', 'JavaScript', 'Bootstrap', 'MySQL', 'Docker'],
    category: 'fullstack',
    featured: true,
    private: true,
    links: {
      github: null,
      live: 'https://doardigital.com.br/evento-santo',
    },
    year: 2025,
    role: 'Engenheiro de Manutenção e Evolução Web',
    overview: 'Ambiente transacional de alta densidade voltado para organização de eventos, venda de ingressos e captação de doações. Atuação direta no ecossistema de produção resolvendo problemas de checkout, regras fiscais e conciliação bancária.',
    highlights: [
      'Refatoração do pipeline de checkout reduzindo taxa de carrinhos abandonados por falhas de integração.',
      'Otimização de queries SQL complexas em relatórios financeiros com alto volume de registros.',
      'Manutenção contínua de estabilidade em ambiente legado de missão crítica.',
    ],
    features: [
      {
        title: 'Checkout Seguro e Emissão de Faturas',
        description: 'Processamento de pagamentos múltiplos (Pix, Cartão, Boleto) com geração de recibos e ingressos com QR Code.',
      },
      {
        title: 'Módulo de Doações Recorrentes e Avulsas',
        description: 'Fluxo simplificado para campanhas filantrópicas com acompanhamento de metas em tempo real.',
      },
      {
        title: 'Gestão de Participantes e Credenciamento',
        description: 'Ferramenta de validação de ingressos na portaria e listagens de presença para organizadores.',
      },
    ],
    technicalDecisions: 'Estruturação baseada no padrão MVC com CodeIgniter e MySQL. Aplicação de refatorações cirúrgicas em rotas críticas para mitigar gargalos sem romper a integridade de bancos legados em produção.',
  },
  {
    id: 'vetos-ia',
    title: 'VetOS IA',
    description: 'SaaS veterinário em desenvolvimento, com foco em gestão clínica, agenda, prontuários, atendimento e recursos de IA para apoiar fluxos internos da clínica.',
    image: vetosIA,
    tags: ['React', 'TypeScript', 'IA', 'Tailwind'],
    category: 'ai',
    featured: true,
    private: false,
    links: {
      github: 'https://github.com/moaaskt/vetos-ai',
      live: 'https://vetos.moadev.com.br/',
    },
    year: 2026,
    role: 'Idealizador & Desenvolvedor Full Stack',
    overview: 'Plataforma SaaS pensada para simplificar a rotina de médicos veterinários e clínicas de pequeno a médio porte. Une a gestão administrativa (agenda, prontuário eletrônico e receituário) com copilotos baseados em IA generativa para sumarização de consultas e diagnósticos preliminares.',
    highlights: [
      'Assistente inteligente capaz de estruturar anamneses a partir de anotações livres do profissional.',
      'Prontuário veterinário customizado com histórico completo de vacinas, exames e tratamentos.',
      'Interface moderna no modo dark & clean projetada para agilidade durante o atendimento clínico.',
    ],
    features: [
      {
        title: 'Prontuário Eletrônico Dinâmico',
        description: 'Histórico longitudinal dos pacientes com upload de laudos, imagens e prescrição inteligente.',
      },
      {
        title: 'Copiloto Clínico com IA',
        description: 'Sugestões de dosagens e apoio à transcrição de sintomas utilizando modelos de linguagem refinados.',
      },
      {
        title: 'Agenda e Fluxo de Recepção',
        description: 'Controle de filas, confirmações automatizadas e agendamento de retornos simplificado.',
      },
    ],
    technicalDecisions: 'Frontend construído com React e Tailwind CSS para proporcionar máxima reatividade e ergonomia visual. A arquitetura de componentes desacoplada permite plugar diferentes provedores de IA sem reescrever a camada de apresentação.',
  },
  {
    id: 'loja-virtual',
    title: "G'Store",
    description: 'Sistema de e-commerce desenvolvido com PHP e CodeIgniter 4, com cadastro de produtos, carrinho, painel administrativo, regras de negócio e fluxo de compra.',
    image: gstore,
    tags: ['PHP', 'CodeIgniter 4', 'MySQL', 'Bootstrap', 'JavaScript'],
    category: 'fullstack',
    featured: true,
    private: false,
    links: {
      github: 'https://github.com/moaaskt/loja-virtual-codeigniter',
      live: 'https://gstore.moadev.com.br/',
    },
    year: 2024,
    role: 'Desenvolvedor Full Stack',
    overview: 'Solução completa de loja virtual desenvolvida para atender operações de varejo online com segurança, painel de controle administrativo e facilidade no gerenciamento de catálogo e estoque.',
    highlights: [
      'Arquitetura sólida com CodeIgniter 4 e autenticação baseada em sessões com proteção CSRF.',
      'Painel administrativo completo com relatórios de vendas, estoque e cadastro de produtos.',
      'Fluxo de checkout intuitivo com cálculo de frete e integração de meios de pagamento.',
    ],
    features: [
      {
        title: 'Catálogo de Produtos com Variações',
        description: 'Organização em categorias, filtros por preço, controle de tamanhos e galerias de imagens.',
      },
      {
        title: 'Carrinho de Compras e Checkout',
        description: 'Persistência de itens no carrinho, cupons de desconto e finalização de pedido simplificada.',
      },
      {
        title: 'Dashboard de Vendas e Inventário',
        description: 'Painel com controle de status de pedidos (pago, despachado, entregue) e avisos de reposição.',
      },
    ],
    technicalDecisions: 'Construído aproveitando os novos recursos do CodeIgniter 4 (Models com validação nativa, Entities e Migrations), com banco de dados relacional MySQL otimizado para consultas rápidas de catálogo.',
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
    role: 'Desenvolvedor Frontend & Jamstack',
    overview: 'Portal educativo e enciclopédia canina focado em orientar tutores sobre cuidados, saúde, alimentação e características de raças. Construído com ênfase em alta velocidade de carregamento, SEO e design acolhedor.',
    highlights: [
      'Geração estática e revalidação sob demanda com Next.js para indexação orgânica impecável no Google.',
      'Banco de dados e autenticação sem atrito integrados através do Supabase.',
      'Interface moderna e acessível em Tailwind CSS com tempos de carregamento quase instantâneos.',
    ],
    features: [
      {
        title: 'Guia de Raças Interativo',
        description: 'Filtros por porte, nível de energia, facilidade de adestramento e convivência familiar.',
      },
      {
        title: 'Artigos e Dicas de Veterinária',
        description: 'Conteúdo categorizado com estimativa de tempo de leitura e busca dinâmica por temas.',
      },
      {
        title: 'Área da Comunidade de Tutores',
        description: 'Interações e favoritos armazenados de forma segura na nuvem do Supabase.',
      },
    ],
    technicalDecisions: 'Aproveitamento do Server-Side Rendering (SSR) e Static Site Generation (SSG) do Next.js para atingir pontuações máximas no Google Core Web Vitals e posicionamento de busca.',
  },
  {
    id: 'petflix',
    title: 'Petflix',
    description: 'Plataforma de streaming temática para pets com autenticação e catálogo interativo, desenvolvida com React, Tailwind CSS e integração com Firebase.',
    image: petflixImage,
    tags: ['React', 'Tailwind', 'Firebase', 'JavaScript'],
    category: 'frontend',
    featured: false,
    private: false,
    links: {
      github: 'https://github.com/moaaskt/petflix',
      live: 'https://petflix-neon.vercel.app/#/home',
    },
    year: 2025,
    role: 'Desenvolvedor Frontend',
    overview: 'Interface de streaming inspirada nos grandes serviços sob demanda, concebida para disponibilizar vídeos, conteúdos educativos e entretenimento focado no universo pet com experiência imersiva.',
    highlights: [
      'Design inspirado em plataformas de cinema com reprodução de trailers dinâmicos e carrosséis horizontais.',
      'Autenticação de usuários e listas de favoritos com Firebase Auth e Cloud Firestore.',
      'Design 100% responsivo construído com utilitários do Tailwind CSS.',
    ],
    features: [
      {
        title: 'Player de Vídeo e Trailers',
        description: 'Modais de visualização de conteúdo em tela cheia com informações completas e elenco.',
      },
      {
        title: 'Minha Lista de Favoritos',
        description: 'Salvamento de títulos preferidos em tempo real sincronizado entre dispositivos.',
      },
      {
        title: 'Categorias e Linhas Temáticas',
        description: 'Navegação por gêneros como adestramento, saúde animal, comédia e documentários.',
      },
    ],
    technicalDecisions: 'Utilização de componentes React com gerenciamento de estado para controlar a experiência contínua de consumo de mídia, consumindo a infraestrutura serveless do Firebase para backend e persistência.',
  },
  {
    id: 'radar-alfa',
    title: 'Radar Alpha',
    description: 'Radar Pedagógico Inteligente e Tutor para coordenação escolar e alunos, com dashboard educacional moderno, métricas analíticas e recursos de IA.',
    image: radarAlfaImage,
    tags: ['React', 'TypeScript', 'Tailwind', 'IA'],
    category: 'frontend',
    featured: false,
    private: false,
    links: {
      github: 'https://github.com/moaaskt/radar-alfa',
      live: 'https://atlas-compass-prt.vercel.app/',
    },
    year: 2026,
    role: 'Engenheiro de Interface & UI/UX',
    overview: 'Painel analítico e pedagógico voltado para instituições de ensino monitorarem indicadores de evasão escolar, desempenho discente e suporte personalizado via tutor inteligente.',
    highlights: [
      'Visualização analítica de notas, presenças e tendências comportamentais em gráficos interativos.',
      'Módulo de tutor virtual com IA para responder dúvidas conceituais de alunos e auxiliar em planos de aula.',
      'Design System de alto padrão visual com gráficos e mapas de calor de aproveitamento acadêmico.',
    ],
    features: [
      {
        title: 'Dashboard de Indicadores da Turma',
        description: 'Métricas agregadas de retenção de conteúdo e identificação preventiva de alunos com dificuldades.',
      },
      {
        title: 'Tutor Pedagógico com IA',
        description: 'Interface de chat para reforço escolar contextualizado à grade curricular de cada disciplina.',
      },
      {
        title: 'Alertas de Coordenação',
        description: 'Notificações antecipadas sobre faltas excessivas ou queda de rendimento para intervenção pedagógica.',
      },
    ],
    technicalDecisions: 'Combinação de TypeScript e Tailwind CSS com bibliotecas modernas de visualização de dados para renderizar dashboards limpos e responsivos sem penalizar a performance.',
  },
  {
    id: 'rs-sistemas',
    title: 'RS Sistemas & Eletrônicos',
    description: 'Landing page e catálogo institucional para empresa de sistemas e eletrônicos, com design responsivo, alta performance e interface moderna.',
    image: rsSistemasImage,
    tags: ['React', 'TypeScript', 'Tailwind', 'JavaScript'],
    category: 'frontend',
    featured: false,
    private: false,
    links: {
      github: 'https://github.com/moaaskt/integrify-solutions-main',
      live: 'https://rs-sistemas-eletronicos.vercel.app/',
    },
    year: 2025,
    role: 'Desenvolvedor Frontend & UI Designer',
    overview: 'Website institucional e catálogo digital desenvolvido para posicionar a marca no mercado corporativo, destacando soluções de automação comercial, equipamentos de segurança e serviços especializados.',
    highlights: [
      'Identidade visual sólida transmitindo autoridade e modernidade técnica.',
      'Otimização agressiva de performance para carregamento rápido mesmo em redes móveis 3G/4G.',
      'Canais diretos de conversão e orçamento via WhatsApp e formulários interativos.',
    ],
    features: [
      {
        title: 'Apresentação Institucional e Serviços',
        description: 'Seções estruturadas para detalhar escopo de atendimento corporativo e projetos entregues.',
      },
      {
        title: 'Catálogo de Equipamentos e Soluções',
        description: 'Listagem de produtos categorizados com fichas técnicas e especificações objetivas.',
      },
      {
        title: 'Canal de Atendimento Imediato',
        description: 'Integração de CTAs estratégicos para contato direto com a equipe técnica de vendas.',
      },
    ],
    technicalDecisions: 'Desenvolvimento componentizado em React e TypeScript, aplicando boas práticas de acessibilidade, tags semânticas e imagens comprimidas em WebP para máxima fluidez.',
  },
];

export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'IA & Python' },
];

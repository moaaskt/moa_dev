import guiadocachorro from '../assets/images/projects/guiadocachorro.webp';
import gstore from '../assets/images/projects/gstore.webp';
import vetosIA from '../assets/images/projects/vetosia2.png';
import rastrecobImage from '../assets/images/projects/rastrecob.webp';
import eventoSantoImage from '../assets/images/projects/eventosanto.webp';
import sherlockScraperImage from '../assets/images/projects/sherlock-scraper.webp';
import petflixImage from '../assets/images/projects/petflix.webp';
import radarAlfaImage from '../assets/images/projects/radaralfa.webp';
import rsSistemasImage from '../assets/images/projects/rs-sistemas.webp';
import alvoraImage from '../assets/images/projects/alvora.jpg';

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
    tags: ['Go', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
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
    id: 'alvora',
    title: 'Alvora',
    description: {
      pt: 'Plataforma LMS B2B multi-tenant com IA preditiva de retenção. Calcula o Score de Risco de Evasão de cada colaborador em tempo real e dispara intervenções pedagógicas autônomas antes que a desistência aconteça.',
      en: 'Multi-tenant B2B LMS platform with predictive retention AI. Calculates each employee\'s Evasion Risk Score in real time and triggers autonomous pedagogical interventions before dropout occurs.',
    },
    image: alvoraImage,
    tags: [
      'Laravel',
      'PHP',
      'Livewire 3',
      'Tailwind',
      'MySQL',
      'Redis',
      'Docker',
      'Groq',
      'OpenRouter',
      'REST API',
    ],
    category: 'fullstack',
    featured: true,
    private: false,
    links: {
      github: 'https://github.com/moaaskt/alvora',
      live: null,
    },
    year: 2026,
    role: {
      pt: 'Arquiteto & Engenheiro Full Stack',
      en: 'Architect & Full Stack Engineer',
    },
    overview: {
      pt: 'O Alvora nasceu de uma pergunta real: por que empresas investem em treinamento e ainda assim perdem colaboradores no meio do caminho? Sistemas LMS convencionais apenas notificam o RH depois que o abandono acontece. O Alvora age antes — calculando continuamente um Score de Risco de Evasão com 4 fatores ponderados (dias sem login, dias sem progresso, desempenho em quizzes e desvio da média da turma) e disparando intervenções autônomas quando o score ultrapassa 70/100. A plataforma é multi-tenant desde a fundação: cada empresa opera em isolamento total via BelongsToTenant + TenantScope global, com 4 papéis distintos (admin_alvora, company_admin, instructor, student). O módulo de IA integra Groq para chat em tempo real de baixa latência e OpenRouter com cascata de modelos gratuitos para geração de conteúdo, mantendo custo zero na camada de IA.',
      en: 'Alvora was born from a real question: why do companies invest in training and still lose employees halfway through? Conventional LMS systems only notify HR after dropout occurs. Alvora acts before — continuously calculating an Evasion Risk Score with 4 weighted factors (days without login, days without progress, quiz performance and deviation from class average) and triggering autonomous interventions when the score exceeds 70/100. The platform is multi-tenant from the ground up: each company operates in complete isolation via BelongsToTenant + global TenantScope, with 4 distinct roles (admin_alvora, company_admin, instructor, student). The AI module integrates Groq for real-time low-latency chat and OpenRouter with a free model cascade for content generation, keeping AI costs at zero.',
    },
    highlights: [
      {
        pt: 'Score de Risco de Evasão com 4 fatores ponderados calculado em tempo real via Redis + Horizon queues.',
        en: 'Evasion Risk Score with 4 weighted factors calculated in real time via Redis + Horizon queues.',
      },
      {
        pt: 'Intervenção autônoma: ao atingir score > 70, o sistema envia mensagem motivacional ao aluno e notifica o company_admin automaticamente.',
        en: 'Autonomous intervention: when score > 70, the system automatically sends a motivational message to the student and notifies the company_admin.',
      },
      {
        pt: 'Multi-tenant com isolamento total por empresa via Eloquent Global Scope — zero risco de vazamento de dados entre tenants.',
        en: 'Multi-tenant with full company isolation via Eloquent Global Scope — zero risk of data leakage between tenants.',
      },
      {
        pt: 'Módulo de IA com Groq (chat < 3s) + OpenRouter com cascata de 3 modelos gratuitos como fallback automático.',
        en: 'AI module with Groq (chat < 3s) + OpenRouter with 3 free model cascade as automatic fallback.',
      },
      {
        pt: 'Suite de testes com 84 testes e 329 assertions cobrindo todos os 7 módulos da plataforma.',
        en: 'Test suite with 84 tests and 329 assertions covering all 7 platform modules.',
      },
      {
        pt: 'Pagamentos via Mercado Pago Checkout Pro com billing híbrido: renovação automática por cartão + fatura mensal para Pix/Boleto.',
        en: 'Payments via Mercado Pago Checkout Pro with hybrid billing: automatic card renewal + monthly invoice for Pix/Boleto.',
      },
    ],
    features: [
      {
        title: { pt: 'Score Preditivo de Evasão', en: 'Predictive Evasion Score' },
        description: {
          pt: 'Fórmula com 4 fatores ponderados — dias sem login (35%), dias sem progresso (25%), desempenho em quizzes (20%) e desvio da média da turma (20%). Score 0–100 com classificação automática: baixo, médio ou alto risco.',
          en: '4-factor weighted formula — days without login (35%), days without progress (25%), quiz performance (20%) and class average deviation (20%). Score 0–100 with automatic classification: low, medium or high risk.',
        },
      },
      {
        title: { pt: 'Intervenção Autônoma por IA', en: 'Autonomous AI Intervention' },
        description: {
          pt: 'Score > 70 dispara automaticamente: mensagem motivacional personalizada enviada ao aluno via Reverb (WebSocket) + notificação em tempo real ao company_admin na Sala de Situação.',
          en: 'Score > 70 automatically triggers: personalized motivational message sent to student via Reverb (WebSocket) + real-time notification to company_admin in the Situation Room.',
        },
      },
      {
        title: { pt: 'Sala de Situação do RH', en: 'HR Situation Room' },
        description: {
          pt: 'Painel exclusivo do company_admin com heatmap de risco de evasão por turma, histórico de intervenções e métricas de engajamento em tempo real via WebSockets.',
          en: 'Exclusive company_admin panel with evasion risk heatmap by class, intervention history and real-time engagement metrics via WebSockets.',
        },
      },
      {
        title: { pt: 'Alvora AI — 4 Funções', en: 'Alvora AI — 4 Functions' },
        description: {
          pt: 'Tutor IA (Groq, baixa latência), Geração de cursos por IA (OpenRouter), Análise de desempenho e Geração de trilhas personalizadas. Cascata automática entre 3 modelos gratuitos como fallback.',
          en: 'AI Tutor (Groq, low latency), AI Course Generation (OpenRouter), Performance Analysis and Personalized Learning Path Generation. Automatic cascade between 3 free models as fallback.',
        },
      },
      {
        title: { pt: 'Multi-tenant B2B', en: 'B2B Multi-tenant' },
        description: {
          pt: 'Isolamento total de dados por empresa via BelongsToTenant trait + TenantScope Eloquent Global Scope. 4 papéis com permissões granulares: admin_alvora, company_admin, instructor, student.',
          en: 'Full data isolation per company via BelongsToTenant trait + Eloquent Global Scope TenantScope. 4 roles with granular permissions: admin_alvora, company_admin, instructor, student.',
        },
      },
      {
        title: { pt: 'Pagamentos & Billing', en: 'Payments & Billing' },
        description: {
          pt: 'Mercado Pago Checkout Pro com billing híbrido: cartão com renovação automática + fatura mensal para Pix/Boleto. Grace period de 5 dias com downgrade automático por inadimplência.',
          en: 'Mercado Pago Checkout Pro with hybrid billing: card with automatic renewal + monthly invoice for Pix/Boleto. 5-day grace period with automatic downgrade for delinquency.',
        },
      },
    ],
    technicalDecisions: {
      pt: 'A decisão de construir como monolito Laravel + Livewire 3 foi deliberada: elimina a complexidade de uma SPA separada, mantém o time-to-market baixo e ainda entrega reatividade real via WebSockets (Reverb). O isolamento multi-tenant foi implementado via Eloquent Global Scope em vez de middleware, garantindo que nenhuma query vaze entre tenants por omissão — a segurança é enforced no nível do ORM. Para IA, a estratégia de dual-provider (Groq para latência + OpenRouter para custo zero) com cascata automática de modelos gratuitos garante disponibilidade mesmo com limites de rate. A infraestrutura usa Laravel Octane com FrankenPHP, Redis para filas e cache, e Horizon para observabilidade das queues — escolhas que posicionam o projeto como referência de stack moderna no mercado brasileiro.',
      en: 'The decision to build as a Laravel + Livewire 3 monolith was deliberate: it eliminates the complexity of a separate SPA, keeps time-to-market low while still delivering real reactivity via WebSockets (Reverb). Multi-tenant isolation was implemented via Eloquent Global Scope rather than middleware, ensuring no query leaks between tenants by omission — security is enforced at the ORM level. For AI, the dual-provider strategy (Groq for latency + OpenRouter for zero cost) with automatic free model cascade guarantees availability even under rate limits. The infrastructure uses Laravel Octane with FrankenPHP, Redis for queues and cache, and Horizon for queue observability — choices that position the project as a modern stack reference in the Brazilian market.',
    },
  },
  {
    id: 'rastrecob',
    title: 'Rastrecob',
    description: {
      pt: 'Case privado de sistema web para gestão de assinaturas, cobranças recorrentes, regras de negócio e provisionamento de usuários GPSWOX, com foco em fluxo transacional, validações e testes.',
      en: 'Private case study of a web platform for subscription management, recurring billing, business rules, and GPSWOX user provisioning, focusing on transactional flows, validations, and tests.',
    },
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
    role: {
      pt: 'Desenvolvedor Backend & Integrações',
      en: 'Backend & Integrations Developer',
    },
    overview: {
      pt: 'Plataforma empresarial de gestão financeira recorrente e telemetria voltada para frotas e rastreamento. O sistema automatiza o ciclo completo de faturamento, conciliação e provisionamento imediato de acessos na plataforma GPSWOX.',
      en: 'Enterprise recurring financial management and telemetry platform tailored for fleets and vehicle tracking. Automates complete billing cycles, reconciliation, and instant access provisioning on the GPSWOX platform.',
    },
    highlights: [
      {
        pt: 'Sincronização bidirecional e provisionamento automatizado de credenciais via API do GPSWOX.',
        en: 'Two-way synchronization and automated credentials provisioning via GPSWOX API.',
      },
      {
        pt: 'Automação de régua de cobrança e bloqueio/desbloqueio automático de dispositivos rastreados.',
        en: 'Billing communication workflows and automated locking/unlocking of tracked devices.',
      },
      {
        pt: 'Arquitetura segura com isolamento de dados de clientes e trilhas de auditoria transacional.',
        en: 'Secure architecture with tenant data isolation and transactional audit trails.',
      },
    ],
    features: [
      {
        title: {
          pt: 'Gestão de Planos e Cobrança Recorrente',
          en: 'Subscription & Recurring Billing Management',
        },
        description: {
          pt: 'Geração automatizada de faturas, integração com gateways de pagamento e acompanhamento de inadimplência.',
          en: 'Automated invoice generation, payment gateway integration, and delinquency tracking.',
        },
      },
      {
        title: {
          pt: 'Integração com Plataforma GPSWOX',
          en: 'GPSWOX Platform Integration',
        },
        description: {
          pt: 'Comunicação via webhook e REST para liberação de rastreadores, criação de subcontas e monitoramento de status.',
          en: 'Webhook and REST communication for tracker activation, sub-account creation, and status monitoring.',
        },
      },
      {
        title: {
          pt: 'Painel Administrativo e Relatórios',
          en: 'Admin Dashboard & Reports',
        },
        description: {
          pt: 'Visão consolidada de MRR (Receita Recorrente Mensal), churn e saúde operacional dos contratos.',
          en: 'Consolidated overview of MRR, churn rates, and operational contract health.',
        },
      },
    ],
    technicalDecisions: {
      pt: 'Desenvolvido em Laravel com arquitetura de serviços e jobs assíncronos para processar conciliações financeiras em segundo plano, garantindo alta disponibilidade sem travar a interface do operador.',
      en: 'Developed in Laravel with service-oriented architecture and asynchronous jobs to process financial reconciliations in the background, ensuring high availability.',
    },
  },
  {
    id: 'evento-santo',
    title: 'Evento Santo',
    description: {
      pt: 'Case profissional em sistema web de eventos e doações, com atuação em manutenção de produção, checkout, faturas, regras de negócio, integrações e correção de bugs reais.',
      en: 'Professional case study in an event and donation platform, focusing on production maintenance, checkout pipelines, invoices, business rules, and bug fixing.',
    },
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
    role: {
      pt: 'Engenheiro de Manutenção e Evolução Web',
      en: 'Web Evolution & Maintenance Engineer',
    },
    overview: {
      pt: 'Ambiente transacional de alta densidade voltado para organização de eventos, venda de ingressos e captação de doações. Atuação direta no ecossistema de produção resolvendo problemas de checkout, regras fiscais e conciliação bancária.',
      en: 'High-density transactional environment dedicated to event management, ticketing, and donation processing. Direct hands-on maintenance resolving checkout issues, fiscal rules, and banking reconciliation.',
    },
    highlights: [
      {
        pt: 'Refatoração do pipeline de checkout reduzindo taxa de carrinhos abandonados por falhas de integração.',
        en: 'Checkout pipeline refactoring reducing cart abandonment caused by integration failures.',
      },
      {
        pt: 'Otimização de queries SQL complexas em relatórios financeiros com alto volume de registros.',
        en: 'Optimization of complex SQL queries in financial reports containing high data volume.',
      },
      {
        pt: 'Manutenção contínua de estabilidade em ambiente legado de missão crítica.',
        en: 'Continuous stability maintenance in a mission-critical legacy environment.',
      },
    ],
    features: [
      {
        title: {
          pt: 'Checkout Seguro e Emissão de Faturas',
          en: 'Secure Checkout & Invoice Issuance',
        },
        description: {
          pt: 'Processamento de pagamentos múltiplos (Pix, Cartão, Boleto) com geração de recibos e ingressos com QR Code.',
          en: 'Multiple payment processing (Pix, Credit Card, Bank Slip) with automated receipt and QR Code ticket generation.',
        },
      },
      {
        title: {
          pt: 'Módulo de Doações Recorrentes e Avulsas',
          en: 'One-Time & Recurring Donations',
        },
        description: {
          pt: 'Fluxo simplificado para campanhas filantrópicas com acompanhamento de metas em tempo real.',
          en: 'Streamlined flow for philanthropic campaigns with real-time goal progress tracking.',
        },
      },
      {
        title: {
          pt: 'Gestão de Participantes e Credenciamento',
          en: 'Attendee Management & Check-in',
        },
        description: {
          pt: 'Ferramenta de validação de ingressos na portaria e listagens de presença para organizadores.',
          en: 'Venue ticket validation tool and attendance lists for event organizers.',
        },
      },
    ],
    technicalDecisions: {
      pt: 'Estruturação baseada no padrão MVC com CodeIgniter e MySQL. Aplicação de refatorações cirúrgicas em rotas críticas para mitigar gargalos sem romper a integridade de bancos legados em produção.',
      en: 'Structured on MVC pattern with CodeIgniter and MySQL. Applied surgical refactorings on critical paths to eliminate bottlenecks while preserving database integrity.',
    },
  },
  {
    id: 'vetos-ia',
    title: 'VetOS IA',
    description: {
      pt: 'SaaS veterinário em desenvolvimento, com foco em gestão clínica, agenda, prontuários, atendimento e recursos de IA para apoiar fluxos internos da clínica.',
      en: 'Veterinary SaaS in active development, focusing on clinic management, scheduling, medical records, patient care, and AI features to streamline workflows.',
    },
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
    role: {
      pt: 'Idealizador & Desenvolvedor Full Stack',
      en: 'Creator & Full Stack Developer',
    },
    overview: {
      pt: 'Plataforma SaaS pensada para simplificar a rotina de médicos veterinários e clínicas de pequeno a médio porte. Une a gestão administrativa (agenda, prontuário eletrônico e receituário) com copilotos baseados em IA generativa para sumarização de consultas e diagnósticos preliminares.',
      en: 'SaaS platform engineered to simplify veterinary clinics daily operations. Combines administrative workflows (calendar, electronic health records, prescriptions) with generative AI copilots for consultation summaries and diagnostics.',
    },
    highlights: [
      {
        pt: 'Assistente inteligente capaz de estruturar anamneses a partir de anotações livres do profissional.',
        en: 'Intelligent assistant structuring anamnesis notes from free-form practitioner input.',
      },
      {
        pt: 'Prontuário veterinário customizado com histórico completo de vacinas, exames e tratamentos.',
        en: 'Customized veterinary health records with longitudinal history of vaccines, lab tests, and treatments.',
      },
      {
        pt: 'Interface moderna no modo dark & clean projetada para agilidade durante o atendimento clínico.',
        en: 'Modern dark & clean interface crafted for ergonomics and speed during clinical consultations.',
      },
    ],
    features: [
      {
        title: {
          pt: 'Prontuário Eletrônico Dinâmico',
          en: 'Dynamic Electronic Health Records',
        },
        description: {
          pt: 'Histórico longitudinal dos pacientes com upload de laudos, imagens e prescrição inteligente.',
          en: 'Longitudinal patient history with lab reports, radiology imaging uploads, and smart prescriptions.',
        },
      },
      {
        title: {
          pt: 'Copiloto Clínico com IA',
          en: 'Clinical AI Copilot',
        },
        description: {
          pt: 'Sugestões de dosagens e apoio à transcrição de sintomas utilizando modelos de linguagem refinados.',
          en: 'Dosage recommendations and symptom transcription assistance using tuned language models.',
        },
      },
      {
        title: {
          pt: 'Agenda e Fluxo de Recepção',
          en: 'Scheduling & Reception Flow',
        },
        description: {
          pt: 'Controle de filas, confirmações automatizadas e agendamento de retornos simplificado.',
          en: 'Queue management, automated appointment confirmations, and simplified check-in.',
        },
      },
    ],
    technicalDecisions: {
      pt: 'Frontend construído com React e Tailwind CSS para proporcionar máxima reatividade e ergonomia visual. A arquitetura de componentes desacoplada permite plugar diferentes provedores de IA sem reescrever a camada de apresentação.',
      en: 'Frontend built with React and Tailwind CSS for visual ergonomics and reactivity. Decoupled component architecture allows plugging different AI providers effortlessly.',
    },
  },
  {
    id: 'loja-virtual',
    title: "G'Store",
    description: {
      pt: 'Sistema de e-commerce desenvolvido com PHP e CodeIgniter 4, com cadastro de produtos, carrinho, painel administrativo, regras de negócio e fluxo de compra.',
      en: 'Complete e-commerce platform developed with PHP and CodeIgniter 4, featuring product catalog, shopping cart, admin dashboard, and full checkout flow.',
    },
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
    role: {
      pt: 'Desenvolvedor Full Stack',
      en: 'Full Stack Developer',
    },
    overview: {
      pt: 'Solução completa de loja virtual desenvolvida para atender operações de varejo online com segurança, painel de controle administrativo e facilidade no gerenciamento de catálogo e estoque.',
      en: 'End-to-end online store solution built for retail operations with secure session handling, robust administrative panel, and agile inventory management.',
    },
    highlights: [
      {
        pt: 'Arquitetura sólida com CodeIgniter 4 e autenticação baseada em sessões com proteção CSRF.',
        en: 'Solid architecture with CodeIgniter 4 and session-based authentication with CSRF protection.',
      },
      {
        pt: 'Painel administrativo completo com relatórios de vendas, estoque e cadastro de produtos.',
        en: 'Comprehensive admin dashboard with sales analytics, inventory tracking, and catalog controls.',
      },
      {
        pt: 'Fluxo de checkout intuitivo com cálculo de frete e integração de meios de pagamento.',
        en: 'Intuitive checkout flow with shipping calculation and payment gateway integrations.',
      },
    ],
    features: [
      {
        title: {
          pt: 'Catálogo de Produtos com Variações',
          en: 'Product Catalog with Variants',
        },
        description: {
          pt: 'Organização em categorias, filtros por preço, controle de tamanhos e galerias de imagens.',
          en: 'Categorized browsing, price filtering, size and color variants, and image galleries.',
        },
      },
      {
        title: {
          pt: 'Carrinho de Compras e Checkout',
          en: 'Shopping Cart & Checkout',
        },
        description: {
          pt: 'Persistência de itens no carrinho, cupons de desconto e finalização de pedido simplificada.',
          en: 'Persistent cart items across visits, coupon discounts, and simplified order finalization.',
        },
      },
      {
        title: {
          pt: 'Dashboard de Vendas e Inventário',
          en: 'Sales & Inventory Dashboard',
        },
        description: {
          pt: 'Painel com controle de status de pedidos (pago, despachado, entregue) e avisos de reposição.',
          en: 'Order fulfillment status monitoring (paid, shipped, delivered) and restock alerts.',
        },
      },
    ],
    technicalDecisions: {
      pt: 'Construído aproveitando os novos recursos do CodeIgniter 4 (Models com validação nativa, Entities e Migrations), com banco de dados relacional MySQL otimizado para consultas rápidas de catálogo.',
      en: 'Leveraged CodeIgniter 4 modern features (Entities, Migrations, native Model validations) with MySQL relational database optimized for fast catalog queries.',
    },
  },
  {
    id: 'guiadocachorro',
    title: 'Guia do Cachorro',
    description: {
      pt: 'Portal web sobre cães desenvolvido com Next.js, TypeScript, Tailwind CSS e Supabase, com foco em organização de conteúdo, interface responsiva e experiência de navegação clara.',
      en: 'Canine informational web portal developed with Next.js, TypeScript, Tailwind CSS, and Supabase, emphasizing SEO, responsive design, and intuitive browsing.',
    },
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
    role: {
      pt: 'Desenvolvedor Frontend & Jamstack',
      en: 'Frontend & Jamstack Developer',
    },
    overview: {
      pt: 'Portal educativo e enciclopédia canina focado em orientar tutores sobre cuidados, saúde, alimentação e características de raças. Construído com ênfase em alta velocidade de carregamento, SEO e design acolhedor.',
      en: 'Educational canine encyclopedia guiding pet owners on veterinary care, nutrition, training, and breed temperaments. Optimized for fast page speeds and high search rankings.',
    },
    highlights: [
      {
        pt: 'Geração estática e revalidação sob demanda com Next.js para indexação orgânica impecável no Google.',
        en: 'Static site generation and Incremental Static Regeneration (ISR) with Next.js for organic search rankings.',
      },
      {
        pt: 'Banco de dados e autenticação sem atrito integrados através do Supabase.',
        en: 'Frictionless database and authentication powered by Supabase cloud infrastructure.',
      },
      {
        pt: 'Interface moderna e acessível em Tailwind CSS com tempos de carregamento quase instantâneos.',
        en: 'Modern and accessible Tailwind CSS interface achieving sub-second load times.',
      },
    ],
    features: [
      {
        title: {
          pt: 'Guia de Raças Interativo',
          en: 'Interactive Breed Directory',
        },
        description: {
          pt: 'Filtros por porte, nível de energia, facilidade de adestramento e convivência familiar.',
          en: 'Filtering by size, energy levels, trainability ratings, and child compatibility.',
        },
      },
      {
        title: {
          pt: 'Artigos e Dicas de Veterinária',
          en: 'Veterinary Tips & Articles',
        },
        description: {
          pt: 'Conteúdo categorizado com estimativa de tempo de leitura e busca dinâmica por temas.',
          en: 'Categorized educational content with reading time estimates and dynamic keyword search.',
        },
      },
      {
        title: {
          pt: 'Área da Comunidade de Tutores',
          en: 'Pet Owners Community',
        },
        description: {
          pt: 'Interações e favoritos armazenados de forma segura na nuvem do Supabase.',
          en: 'Saved bookmark favorites and user interactions securely synced to Supabase cloud.',
        },
      },
    ],
    technicalDecisions: {
      pt: 'Aproveitamento do Server-Side Rendering (SSR) e Static Site Generation (SSG) do Next.js para atingir pontuações máximas no Google Core Web Vitals e posicionamento de busca.',
      en: 'Exploited Next.js SSR and SSG to hit perfect Google Core Web Vitals scores and organic visibility.',
    },
  },
  {
    id: 'petflix',
    title: 'Petflix',
    description: {
      pt: 'Plataforma de streaming temática para pets com autenticação e catálogo interativo, desenvolvida com React, Tailwind CSS e integração com Firebase.',
      en: 'Pet-themed video streaming platform featuring user authentication and an interactive movie catalog, built with React, Tailwind CSS, and Firebase.',
    },
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
    role: {
      pt: 'Desenvolvedor Frontend',
      en: 'Frontend Developer',
    },
    overview: {
      pt: 'Interface de streaming inspirada nos grandes serviços sob demanda, concebida para disponibilizar vídeos, conteúdos educativos e entretenimento focado no universo pet com experiência imersiva.',
      en: 'On-demand video streaming interface inspired by modern entertainment giants, providing curated educational content and fun pet videos in an immersive dark theme.',
    },
    highlights: [
      {
        pt: 'Design inspirado em plataformas de cinema com reprodução de trailers dinâmicos e carrosséis horizontais.',
        en: 'Cinema-grade design featuring horizontal scrolling carousels and dynamic trailer players.',
      },
      {
        pt: 'Autenticação de usuários e listas de favoritos com Firebase Auth e Cloud Firestore.',
        en: 'User authentication and synced personal watchlists via Firebase Auth and Cloud Firestore.',
      },
      {
        pt: 'Design 100% responsivo construído com utilitários do Tailwind CSS.',
        en: 'Fully responsive UI built with Tailwind CSS utility classes across all viewport sizes.',
      },
    ],
    features: [
      {
        title: {
          pt: 'Player de Vídeo e Trailers',
          en: 'Video Player & Trailer Modals',
        },
        description: {
          pt: 'Modais de visualização de conteúdo em tela cheia com informações completas e elenco.',
          en: 'Fullscreen video preview modals with metadata, synopsis, and episode lists.',
        },
      },
      {
        title: {
          pt: 'Minha Lista de Favoritos',
          en: 'My Personal Watchlist',
        },
        description: {
          pt: 'Salvamento de títulos preferidos em tempo real sincronizado entre dispositivos.',
          en: 'Real-time saving of favorite videos synchronized across devices.',
        },
      },
      {
        title: {
          pt: 'Categorias e Linhas Temáticas',
          en: 'Categories & Thematic Rows',
        },
        description: {
          pt: 'Navegação por gêneros como adestramento, saúde animal, comédia e documentários.',
          en: 'Genre browsing across training tips, animal healthcare, comedy, and documentaries.',
        },
      },
    ],
    technicalDecisions: {
      pt: 'Utilização de componentes React com gerenciamento de estado para controlar a experiência contínua de consumo de mídia, consumindo a infraestrutura serveless do Firebase para backend e persistência.',
      en: 'Utilized React state management for seamless media navigation, backed by serverless Firebase infrastructure for real-time persistence.',
    },
  },
  {
    id: 'radar-alfa',
    title: 'Radar Alpha',
    description: {
      pt: 'Radar Pedagógico Inteligente e Tutor para coordenação escolar e alunos, com dashboard educacional moderno, métricas analíticas e recursos de IA.',
      en: 'Smart Pedagogical Radar and AI Tutor for school coordinators and students, featuring modern analytics dashboards, grade metrics, and AI chat assistance.',
    },
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
    role: {
      pt: 'Engenheiro de Interface & UI/UX',
      en: 'UI/UX & Frontend Engineer',
    },
    overview: {
      pt: 'Painel analítico e pedagógico voltado para instituições de ensino monitorarem indicadores de evasão escolar, desempenho discente e suporte personalizado via tutor inteligente.',
      en: 'Pedagogical dashboard helping schools track student retention, academic performance, and proactive interventions through an intelligent AI tutor.',
    },
    highlights: [
      {
        pt: 'Visualização analítica de notas, presenças e tendências comportamentais em gráficos interativos.',
        en: 'Interactive charts tracking grades, attendance trends, and early behavioral indicators.',
      },
      {
        pt: 'Módulo de tutor virtual com IA para responder dúvidas conceituais de alunos e auxiliar em planos de aula.',
        en: 'Virtual AI tutor assisting students with curriculum questions and teachers with lesson prep.',
      },
      {
        pt: 'Design System de alto padrão visual com gráficos e mapas de calor de aproveitamento acadêmico.',
        en: 'High-end visual design system featuring academic progress heatmaps and responsive analytics.',
      },
    ],
    features: [
      {
        title: {
          pt: 'Dashboard de Indicadores da Turma',
          en: 'Classroom Indicator Dashboard',
        },
        description: {
          pt: 'Métricas agregadas de retenção de conteúdo e identificação preventiva de alunos com dificuldades.',
          en: 'Aggregated learning metrics and proactive alerts identifying struggling students.',
        },
      },
      {
        title: {
          pt: 'Tutor Pedagógico com IA',
          en: 'AI Pedagogical Tutor',
        },
        description: {
          pt: 'Interface de chat para reforço escolar contextualizado à grade curricular de cada disciplina.',
          en: 'Context-aware chat assistant aligned with grade-level subjects for homework reinforcement.',
        },
      },
      {
        title: {
          pt: 'Alertas de Coordenação',
          en: 'Coordinator Alert Center',
        },
        description: {
          pt: 'Notificações antecipadas sobre faltas excessivas ou queda de rendimento para intervenção pedagógica.',
          en: 'Early warnings for excessive absences or performance drops for prompt intervention.',
        },
      },
    ],
    technicalDecisions: {
      pt: 'Combinação de TypeScript e Tailwind CSS com bibliotecas modernas de visualização de dados para renderizar dashboards limpos e responsivos sem penalizar a performance.',
      en: 'Combined TypeScript and Tailwind CSS with modern data visualization packages to produce crisp, lightweight dashboards.',
    },
  },
  {
    id: 'rs-sistemas',
    title: 'RS Sistemas & Eletrônicos',
    description: {
      pt: 'Landing page e catálogo institucional para empresa de sistemas e eletrônicos, com design responsivo, alta performance e interface moderna.',
      en: 'Institutional landing page and commercial catalog for a security systems and electronics enterprise, featuring responsive UI and high performance.',
    },
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
    role: {
      pt: 'Desenvolvedor Frontend & UI Designer',
      en: 'Frontend Developer & UI Designer',
    },
    overview: {
      pt: 'Website institucional e catálogo digital desenvolvido para posicionar a marca no mercado corporativo, destacando soluções de automação comercial, equipamentos de segurança e serviços especializados.',
      en: 'Corporate digital presence and equipment catalog built to position the brand in enterprise markets, showcasing commercial automation and security solutions.',
    },
    highlights: [
      {
        pt: 'Identidade visual sólida transmitindo autoridade e modernidade técnica.',
        en: 'Polished brand identity conveying technological authority and corporate credibility.',
      },
      {
        pt: 'Otimização agressiva de performance para carregamento rápido mesmo em redes móveis 3G/4G.',
        en: 'Aggressive asset and bundle optimization for fast page loads over cellular 3G/4G networks.',
      },
      {
        pt: 'Canais diretos de conversão e orçamento via WhatsApp e formulários interativos.',
        en: 'Direct lead conversion channels through WhatsApp integrations and quote forms.',
      },
    ],
    features: [
      {
        title: {
          pt: 'Apresentação Institucional e Serviços',
          en: 'Corporate Presentation & Services',
        },
        description: {
          pt: 'Seções estruturadas para detalhar escopo de atendimento corporativo e projetos entregues.',
          en: 'Structured sections explaining commercial service offerings and executed installations.',
        },
      },
      {
        title: {
          pt: 'Catálogo de Equipamentos e Soluções',
          en: 'Equipment & Hardware Catalog',
        },
        description: {
          pt: 'Listagem de produtos categorizados com fichas técnicas e especificações objetivas.',
          en: 'Categorized equipment catalog with technical specifications and product overviews.',
        },
      },
      {
        title: {
          pt: 'Canal de Atendimento Imediato',
          en: 'Direct Lead Inquiry',
        },
        description: {
          pt: 'Integração de CTAs estratégicos para contato direto com a equipe técnica de vendas.',
          en: 'Strategic call-to-actions directly linking prospects to technical sales representatives.',
        },
      },
    ],
    technicalDecisions: {
      pt: 'Desenvolvimento componentizado em React e TypeScript, aplicando boas práticas de acessibilidade, tags semânticas e imagens comprimidas em WebP para máxima fluidez.',
      en: 'Modular React and TypeScript implementation adhering to web accessibility standards, semantic tags, and WebP compression.',
    },
  },
];

export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'IA & Python' },
];

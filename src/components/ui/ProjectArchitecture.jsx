import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Workflow,
  Sparkles,
  Terminal,
  Activity,
  Layers,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Badge } from './badge';

export default function ProjectArchitecture({ architecture, projectTitle = 'Projeto' }) {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'pt').startsWith('en')
    ? 'en'
    : 'pt';

  const [activeTab, setActiveTab] = useState('services');

  if (!architecture) return null;

  const { services = [], campaignFlow = [], aiPipeline = [] } = architecture;

  const getLocalized = (val) => {
    if (!val) return '';
    if (typeof val === 'object') return val[currentLang] || val.pt || val.en || '';
    return val;
  };

  return (
    <section style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
      {/* Header da Arquitetura */}
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '0.6rem',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '14px',
              height: '1px',
              background: 'var(--accent)',
              flexShrink: 0,
            }}
          />
          {t('architecture.badge', 'Engenharia de Sistemas & Microsserviços')}
        </div>
        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            color: '#f0f0f0',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}
        >
          {t('architecture.title', 'Arquitetura de Produção & Pipelines')}
        </h2>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            lineHeight: 1.6,
          }}
        >
          {t('architecture.subtitle', { title: projectTitle, defaultValue: `Estrutura técnica e topologia distribuída do ${projectTitle}. Navegue entre os containers Docker orquestrados e os pipelines de mensageria assíncrona e inteligência artificial.` })}
        </p>
      </div>

      {/* Abas de Navegação */}
      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '1rem',
        }}
      >
        <button
          onClick={() => setActiveTab('services')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            padding: '0.55rem 1.1rem',
            borderRadius: '6px',
            border: `1px solid ${activeTab === 'services' ? 'var(--accent)' : 'var(--border)'}`,
            background: activeTab === 'services' ? 'rgba(184, 247, 60, 0.1)' : 'var(--bg-secondary)',
            color: activeTab === 'services' ? 'var(--accent)' : 'var(--text-secondary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontWeight: activeTab === 'services' ? 700 : 400,
          }}
        >
          <Server size={15} />
          <span>{t('architecture.tabs.services', '7 Serviços Docker')}</span>
        </button>

        <button
          onClick={() => setActiveTab('campaign')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            padding: '0.55rem 1.1rem',
            borderRadius: '6px',
            border: `1px solid ${activeTab === 'campaign' ? 'var(--accent)' : 'var(--border)'}`,
            background: activeTab === 'campaign' ? 'rgba(184, 247, 60, 0.1)' : 'var(--bg-secondary)',
            color: activeTab === 'campaign' ? 'var(--accent)' : 'var(--text-secondary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontWeight: activeTab === 'campaign' ? 700 : 400,
          }}
        >
          <Workflow size={15} />
          <span>{t('architecture.tabs.campaign', 'Pipeline Assíncrono (Asynq + SSE)')}</span>
        </button>

        <button
          onClick={() => setActiveTab('ai')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            padding: '0.55rem 1.1rem',
            borderRadius: '6px',
            border: `1px solid ${activeTab === 'ai' ? 'var(--accent)' : 'var(--border)'}`,
            background: activeTab === 'ai' ? 'rgba(184, 247, 60, 0.1)' : 'var(--bg-secondary)',
            color: activeTab === 'ai' ? 'var(--accent)' : 'var(--text-secondary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontWeight: activeTab === 'ai' ? 700 : 400,
          }}
        >
          <Sparkles size={15} />
          <span>{t('architecture.tabs.ai', 'Pipeline de IA (Google Gemini)')}</span>
        </button>
      </div>

      {/* Conteúdo Dinâmico */}
      <AnimatePresence mode="wait">
        {activeTab === 'services' && (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {services.map((srv, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Header do Card */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Terminal size={17} color="var(--accent)" />
                    <span
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: '#f0f0f0',
                      }}
                    >
                      {srv.name}
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="font-mono text-xs font-semibold"
                  >
                    :{srv.port}
                  </Badge>
                </div>

                {/* Badge de Tech */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Layers size={13} color="var(--text-secondary)" />
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.78rem',
                      color: '#a0a0a0',
                    }}
                  >
                    {srv.tech}
                  </span>
                </div>

                {/* Role / Responsabilidade */}
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: 0,
                    marginTop: 'auto',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingTop: '0.75rem',
                  }}
                >
                  {getLocalized(srv.role)}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'campaign' && (
          <motion.div
            key="campaign"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.5rem',
              }}
            >
              <Activity size={20} color="var(--accent)" />
              <h3
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#f0f0f0',
                  margin: 0,
                }}
              >
                {t('architecture.campaignTitle', 'Fluxo de Disparo em Lote & Telemetria em Tempo Real')}
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: 1.6,
              }}
            >
              {t('architecture.campaignDesc')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {campaignFlow.map((step, idx) => {
                const stepText = getLocalized(step);
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      padding: '1.1rem 1.3rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#080808',
                        background: 'var(--accent)',
                        borderRadius: '50%',
                        width: '26px',
                        height: '26px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      {idx + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.92rem',
                        color: '#e0e0e0',
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {stepText.replace(/^\d+\.\s*/, '')}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'ai' && (
          <motion.div
            key="ai"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.5rem',
              }}
            >
              <Sparkles size={20} color="var(--accent)" />
              <h3
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#f0f0f0',
                  margin: 0,
                }}
              >
                {t('architecture.aiTitle', 'Pipeline de Enriquecimento de Dados & Geração de Dossiês')}
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: 1.6,
              }}
            >
              {t('architecture.aiDesc')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {aiPipeline.map((step, idx) => {
                const stepText = getLocalized(step);
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      padding: '1.1rem 1.3rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        background: 'rgba(184, 247, 60, 0.1)',
                        border: '1px solid var(--border-accent)',
                        borderRadius: '50%',
                        width: '26px',
                        height: '26px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      {idx + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.92rem',
                        color: '#e0e0e0',
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {stepText.replace(/^\d+\.\s*/, '')}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import TechIcon from '../ui/TechIcon';
import { experiences } from '../../data/experience';

function formatPeriod(period, t) {
  const fmt = (str) => {
    const [y, m] = str.split('-');
    const monthKey = parseInt(m, 10).toString();
    const monthName = t(`experience.months.${monthKey}`, m);
    return `${monthName} ${y}`;
  };
  const currentLabel = t('experience.current', 'Atual');
  return `${fmt(period.start)} — ${period.end ? fmt(period.end) : currentLabel}`;
}

function getLocalizedField(field, lang) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.pt || field.en || '';
}

function ExperienceCard({ exp, index, lang, t }) {
  const [ref, isVisible] = useScrollAnimation(0.15);
  const role = getLocalizedField(exp.role, lang);
  const type = getLocalizedField(exp.type, lang);
  const description = getLocalizedField(exp.description, lang);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s`,
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
      }}
    >
      {/* Timeline dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: exp.current ? '14px' : '12px',
          height: exp.current ? '14px' : '12px',
          borderRadius: '50%',
          background: exp.current ? 'var(--accent)' : 'var(--text-muted)',
          border: exp.current ? '2px solid var(--accent)' : '2px solid var(--text-muted)',
          position: 'relative',
          boxShadow: exp.current ? '0 0 0 4px var(--accent-glow)' : 'none',
          animation: exp.current ? 'pulse 2s ease-in-out infinite' : 'none',
          marginTop: '6px',
        }} />
      </div>

      {/* Card */}
      <div style={{
        flex: 1,
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--border-accent)';
          e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--text-primary)' }}>
              {role}
            </h3>
            <p style={{ color: 'var(--accent)', fontSize: 'var(--text-sm)', fontWeight: 500, marginTop: '2px' }}>
              {exp.company}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-secondary)',
              background: 'var(--bg-elevated)',
              padding: '2px 8px',
              borderRadius: '4px',
            }}>
              {formatPeriod(exp.period, t)}
            </span>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <span style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: type === 'CLT' ? '#60a5fa' : 'var(--accent)',
                background: type === 'CLT' ? 'rgba(96,165,250,0.1)' : 'var(--accent-glow)',
                padding: '2px 8px',
                borderRadius: '4px',
              }}>
                {type}
              </span>
              {exp.current && (
                <span style={{
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'JetBrains Mono, monospace',
                  color: 'var(--accent)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  ● {t('experience.current', 'Atual')}
                </span>
              )}
            </div>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7, marginBottom: '1rem' }}>
          {description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
          {exp.tags.map(tag => (
            <TechIcon key={tag} techName={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'pt').startsWith('en') ? 'en' : 'pt';

  return (
    <section id="experience" style={{ padding: 'var(--section-padding)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--padding-x)' }}>
        <SectionHeader
          label={t('experience.sectionNumber', '04')}
          title={t('experience.sectionTitle', 'Experiência')}
        />

        <div style={{ marginTop: '3rem', position: 'relative' }}>
          {/* Linha vertical central (à esquerda dos cards) */}
          <div style={{
            position: 'absolute',
            left: '6px',
            top: '0',
            bottom: '0',
            width: '1px',
            background: 'linear-gradient(to bottom, var(--accent-glow), var(--border), transparent)',
          }} />

          <div style={{ paddingLeft: '0' }}>
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} lang={currentLang} t={t} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 4px var(--accent-glow); }
          50% { box-shadow: 0 0 0 8px transparent; }
        }
      `}</style>
    </section>
  );
}

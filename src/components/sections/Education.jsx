import { useTranslation } from 'react-i18next';
import { GraduationCap, Award, ExternalLink, Trophy } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import { Badge } from '../ui/badge';
import { academicEducation, certifications } from '../../data/education';

function getLocalizedField(field, lang) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.pt || field.en || '';
}

function AcademicItem({ item, index, lang, t }) {
  const [ref, isVisible] = useScrollAnimation(0.12);
  const isInProgress = item.status === 'in_progress';
  const degree = getLocalizedField(item.degree, lang);
  const period = getLocalizedField(item.period, lang);
  const description = getLocalizedField(item.description, lang);
  const statusLabel = item.statusLabel
    ? getLocalizedField(item.statusLabel, lang)
    : (isInProgress ? t('education.status.in_progress', 'Em andamento') : t('education.status.completed', 'Concluído'));

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'flex-start',
        position: 'relative',
      }}
    >
      {/* Timeline Marker */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, marginTop: '6px' }}>
        <div
          style={{
            width: isInProgress ? '14px' : '12px',
            height: isInProgress ? '14px' : '12px',
            borderRadius: '50%',
            background: isInProgress ? 'var(--accent)' : 'var(--text-muted)',
            border: isInProgress ? '2px solid var(--accent)' : '2px solid var(--text-muted)',
            boxShadow: isInProgress ? '0 0 0 4px var(--accent-glow)' : 'none',
            animation: isInProgress ? 'pulse-education 2s ease-in-out infinite' : 'none',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Card Content */}
      <article
        style={{
          flex: 1,
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-accent)';
          e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '240px' }}>
            {/* Institution Logo */}
            <div
              style={{
                width: '60px',
                height: '52px',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 8px',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35)',
              }}
            >
              <img
                src={item.logo}
                alt={`Logo da instituição ${item.institution}`}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>

            <div>
              <h4
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {degree}
              </h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '4px' }}>
                {item.website ? (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--accent)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                    aria-label={`${item.institution} - ${t('education.viewWebsite', 'Instituição')} (abre em nova aba)`}
                  >
                    <span>{item.institution}</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                ) : (
                  <span style={{ color: 'var(--accent)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                    {item.institution}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Badges & Period */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
            {isInProgress ? (
              <Badge
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  background: 'var(--accent)',
                  color: '#080808',
                  border: '1px solid var(--accent)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '4px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                }}
                aria-label={`Status: ${statusLabel}`}
              >
                {statusLabel}
              </Badge>
            ) : (
              <Badge
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  background: 'var(--bg-elevated)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '4px',
                }}
                aria-label={`Status: ${statusLabel}`}
              >
                {statusLabel}
              </Badge>
            )}
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 'var(--text-xs)',
                color: 'var(--text-secondary)',
                background: 'var(--bg-elevated)',
                padding: '2px 8px',
                borderRadius: '4px',
              }}
            >
              {period}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1rem',
          }}
        >
          {description}
        </p>

        {/* Achievement Card (Hackathon) */}
        {item.achievement && (
          <div
            style={{
              margin: '1.25rem 0',
              padding: '1.2rem',
              borderRadius: '8px',
              background: 'var(--bg-elevated)',
              border: '1px solid rgba(184, 247, 60, 0.25)',
              position: 'relative',
              transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-accent)';
              e.currentTarget.style.boxShadow = '0 0 16px var(--accent-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(184, 247, 60, 0.25)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(184, 247, 60, 0.08)',
                  border: '1px solid rgba(184, 247, 60, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--accent)',
                }}
                aria-hidden="true"
              >
                <Trophy size={20} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                  <h5
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}
                  >
                    {getLocalizedField(item.achievement.title, lang)}
                  </h5>
                  <Badge
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      background: 'rgba(184, 247, 60, 0.1)',
                      color: 'var(--accent)',
                      border: '1px solid var(--border-accent)',
                      padding: '0.15rem 0.55rem',
                      borderRadius: '4px',
                    }}
                  >
                    {getLocalizedField(item.achievement.badge, lang)}
                  </Badge>
                  <Badge
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)',
                      padding: '0.15rem 0.55rem',
                      borderRadius: '4px',
                    }}
                  >
                    {item.achievement.team}
                  </Badge>
                </div>

                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    margin: '0 0 0.75rem 0',
                  }}
                >
                  {getLocalizedField(item.achievement.description, lang)}
                </p>

                {item.achievement.url && (
                  <a
                    href={item.achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s ease, transform 0.2s ease',
                      width: 'fit-content',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                      e.currentTarget.style.transform = 'translateX(2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                    aria-label={`${getLocalizedField(item.achievement.title, lang)} - ${t('education.viewAchievementArticle', 'Ver notícia oficial no SEPROSC')} (abre em nova aba)`}
                  >
                    <span>{t('education.viewAchievementArticle', 'Ver notícia oficial no SEPROSC')}</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Skills learned */}
        {item.skills && item.skills.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.9rem' }}>
            {item.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}

function CertificationCard({ cert, index, lang, t }) {
  const [ref, isVisible] = useScrollAnimation(0.12);
  const title = getLocalizedField(cert.title, lang);
  const date = getLocalizedField(cert.date, lang);
  const description = getLocalizedField(cert.description, lang);

  return (
    <article
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`,
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transitionProperty: 'border-color, box-shadow, opacity, transform',
        transitionDuration: '0.25s, 0.25s, 0.6s, 0.6s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-accent)';
        e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1rem' }}>
          {/* Issuer Logo Container */}
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '8px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              flexShrink: 0,
            }}
          >
            <img
              src={cert.logo}
              alt={`Logo da certificadora ${cert.issuer}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>

          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-secondary)',
              background: 'var(--bg-elevated)',
              padding: '2px 8px',
              borderRadius: '4px',
            }}
          >
            {date}
          </span>
        </div>

        <h4
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: 'var(--text-base)',
            color: 'var(--text-primary)',
            margin: '0 0 4px 0',
            lineHeight: 1.3,
          }}
        >
          {title}
        </h4>

        <p
          style={{
            color: 'var(--accent)',
            fontSize: 'var(--text-xs)',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 600,
            margin: '0 0 0.75rem 0',
          }}
        >
          {cert.issuer}
        </p>

        <p
          style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: '1rem',
          }}
        >
          {description}
        </p>

        {cert.skills && cert.skills.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
            {cert.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  padding: '1px 6px',
                  borderRadius: '3px',
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'var(--text-xs)',
            color: 'var(--accent)',
            textDecoration: 'none',
            paddingTop: '0.5rem',
            borderTop: '1px solid var(--border)',
            transition: 'color 0.2s ease',
            width: 'fit-content',
          }}
          aria-label={`${title} - ${t('education.viewCredential', 'Ver credencial')} (abre em nova aba)`}
        >
          <span>{t('education.viewCredential', 'Ver credencial')}</span>
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}

export default function Education() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language && i18n.language.startsWith('pt') ? 'pt' : 'en';

  return (
    <section id="education" style={{ padding: '6rem 0', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--padding-x)' }}>
        <SectionHeader
          label={t('education.sectionNumber', '05')}
          title={t('education.sectionTitle', 'Formação & Certificações')}
        />

        {t('education.sectionSubtitle') && (
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-base)',
              maxWidth: '680px',
              marginTop: '-2rem',
              marginBottom: '3.5rem',
              lineHeight: 1.6,
            }}
          >
            {t('education.sectionSubtitle')}
          </p>
        )}

        {/* --- Sub-seção 1: Formação Acadêmica --- */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <GraduationCap size={22} style={{ color: 'var(--accent)' }} aria-hidden="true" />
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.2rem, 3vw, var(--text-xl))',
                color: 'var(--text-primary)',
                margin: 0,
              }}
            >
              {t('education.academicTitle', 'Formação Acadêmica')}
            </h3>
          </div>
          <Badge
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              background: 'rgba(184, 247, 60, 0.1)',
              color: 'var(--accent)',
              border: '1px solid var(--border-accent)',
              padding: '0.2rem 0.5rem',
              borderRadius: '4px',
            }}
          >
            {t('education.academicBadge', 'Graduação & Técnico')}
          </Badge>
        </div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', marginBottom: '4.5rem' }}>
          {/* Linha vertical conectora */}
          <div
            style={{
              position: 'absolute',
              left: '6px',
              top: '6px',
              bottom: '24px',
              width: '1px',
              background: 'linear-gradient(to bottom, var(--accent), var(--border) 70%, transparent)',
            }}
            aria-hidden="true"
          />

          <div>
            {academicEducation.map((item, i) => (
              <AcademicItem key={item.id} item={item} index={i} lang={currentLang} t={t} />
            ))}
          </div>
        </div>

        {/* --- Sub-seção 2: Certificações Complementares --- */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={22} style={{ color: 'var(--accent)' }} aria-hidden="true" />
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.2rem, 3vw, var(--text-xl))',
                color: 'var(--text-primary)',
                margin: 0,
              }}
            >
              {t('education.certificationsTitle', 'Certificações')}
            </h3>
          </div>
          <Badge
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              background: 'rgba(184, 247, 60, 0.1)',
              color: 'var(--accent)',
              border: '1px solid var(--border-accent)',
              padding: '0.2rem 0.5rem',
              borderRadius: '4px',
            }}
          >
            {t('education.certificationsBadge', 'Credenciais Técnicas')}
          </Badge>
        </div>

        {/* Grid de Certificações */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} index={i} lang={currentLang} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-education {
          0%, 100% { box-shadow: 0 0 0 4px var(--accent-glow); }
          50% { box-shadow: 0 0 0 8px transparent; }
        }
      `}</style>
    </section>
  );
}

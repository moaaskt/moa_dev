import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Layers,
  Cpu,
  CheckCircle2,
  Lock,
  Code2,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import TechIcon from '../ui/TechIcon';
import FuzzyText from '../ui/FuzzyText';
import ProjectGallery from '../ui/ProjectGallery';
import ProjectArchitecture from '../ui/ProjectArchitecture';
import { Badge } from '../ui/badge';
import { projects } from '../../data/projects';

// Helper utilitário para extrair texto no idioma ativo
const getLocalized = (val, lang) => {
  if (!val) return '';
  if (typeof val === 'object' && !Array.isArray(val)) {
    return val[lang] || val.pt || val.en || '';
  }
  return val;
};

export default function ProjectDetailPage({ projectId }) {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'pt').startsWith('en') ? 'en' : 'pt';

  const currentIndex = useMemo(() => {
    return projects.findIndex((p) => p.id === projectId);
  }, [projectId]);

  const project = currentIndex !== -1 ? projects[currentIndex] : null;

  const prevProject = useMemo(() => {
    if (currentIndex <= 0) return null;
    return projects[currentIndex - 1];
  }, [currentIndex]);

  const nextProject = useMemo(() => {
    if (currentIndex === -1 || currentIndex >= projects.length - 1) return null;
    return projects[currentIndex + 1];
  }, [currentIndex]);

  useEffect(() => {
    if (project) {
      document.title = t('projectDetail.metaTitle', {
        title: project.title,
        defaultValue: `${project.title} — Case Study | Moacir Neto (moa_dev)`,
      });
    } else {
      document.title = t('projectDetail.notFoundMetaTitle', 'Projeto não encontrado | Moacir Neto');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = 'Moacir Neto | Engenheiro de Software & Desenvolvedor Full Stack';
    };
  }, [project, projectId, t]);

  if (!project) {
    return (
      <div
        style={{
          minHeight: '80vh',
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem var(--padding-x)',
          textAlign: 'center',
        }}
      >
        <h1 className="sr-only">{t('projectDetail.notFoundHeading', '404 - Projeto não encontrado')}</h1>
        <div style={{ fontSize: "clamp(4rem, 12vw, 8rem)", lineHeight: 1 }}>
          <FuzzyText
            fontSize="clamp(4rem, 12vw, 8rem)"
            fontFamily="Syne, sans-serif"
            fontWeight={700}
            color="#b8f73c"
            enableHover={true}
            baseIntensity={0.18}
            hoverIntensity={0.5}
            trigger="hover"
          >
            404
          </FuzzyText>
        </div>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            maxWidth: '500px',
            marginTop: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {t('projectDetail.notFoundDesc', {
            id: projectId,
            defaultValue: `O identificador de projeto "${projectId}" não corresponde a nenhum item do nosso catálogo atual.`,
          })}
        </p>
        <a
          href="#/projetos"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--accent)',
            color: '#080808',
            padding: '0.6rem 1.4rem',
            borderRadius: '4px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.9rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={16} />
          {t('projectDetail.viewAllProjects', 'Ver todos os projetos')}
        </a>
      </div>
    );
  }

  return (
    <article
      style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        paddingTop: '6rem',
        paddingBottom: '8rem',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '0 var(--padding-x)',
        }}
      >
        {/* Navigation Breadcrumbs & Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <a
            href="#/projetos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.85rem',
              textDecoration: 'none',
              padding: '0.4rem 0.8rem',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              background: 'var(--bg-secondary)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--border-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            <ArrowLeft size={16} />
            {t('projectDetail.backToAll', 'Voltar para todos os projetos')}
          </a>

          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <a href="#/" style={{ color: 'inherit', textDecoration: 'none' }}>
              {t('projectDetail.breadcrumbs.home', 'Início')}
            </a>
            <span>/</span>
            <a href="#/projetos" style={{ color: 'inherit', textDecoration: 'none' }}>
              {t('projectDetail.breadcrumbs.projects', 'Projetos')}
            </a>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>{project.title}</span>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: '3rem' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '1rem',
            }}
          >
            <Badge
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#080808',
                background: 'var(--accent)',
                border: '1px solid var(--accent)',
                padding: '0.25rem 0.65rem',
                borderRadius: '4px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
              }}
            >
              {t(`allProjects.categories.${project.category}`, project.category)}
            </Badge>

            <Badge
              variant="outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '0.25rem 0.65rem',
                borderRadius: '4px',
              }}
            >
              <Calendar size={13} />
              {project.year}
            </Badge>

            {project.private ? (
              <Badge
                variant="outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: '#eab308',
                  background: 'rgba(234, 179, 8, 0.08)',
                  border: '1px solid rgba(234, 179, 8, 0.3)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '4px',
                }}
              >
                <Lock size={12} />
                {t('projectDetail.corporateCase', 'Case Privado / Corporativo')}
              </Badge>
            ) : (
              <Badge
                variant="outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  border: '1px solid var(--border)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '4px',
                }}
              >
                <Code2 size={13} />
                {t('projectDetail.publicCode', 'Código Público')}
              </Badge>
            )}
          </div>

          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              color: '#f0f0f0',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '800px',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            {getLocalized(project.description, currentLang)}
          </p>

          {/* Action Buttons Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--accent)',
                  color: '#080808',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  padding: '0.7rem 1.4rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {t('projectDetail.liveProject', 'Acessar Projeto Online')}
                <ExternalLink size={16} />
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--bg-secondary)',
                  color: '#f0f0f0',
                  border: '1px solid var(--border)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                  padding: '0.7rem 1.4rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = '#f0f0f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <SiGithub size={17} />
                {t('projectDetail.githubRepo', 'Repositório no GitHub')}
              </a>
            )}
          </div>
        </motion.header>

        {/* Main Media Showcase */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            style={{
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--bg-secondary)',
              marginBottom: '3.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }}
          >
            <img
              src={project.image}
              alt={t('projectDetail.imageAlt', {
                title: project.title,
                defaultValue: `Visão geral da interface de ${project.title}`,
              })}
              style={{
                width: '100%',
                maxHeight: '560px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>
        )}

        {/* Content Layout: Main Editorial Column + Technical Sidebar */}
        <div
          className="project-layout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: '3rem',
            alignItems: 'start',
            marginBottom: '4rem',
          }}
        >
          {/* Main Editorial Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Overview Section */}
            {project.overview && (
              <section>
                <h2
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1.6rem',
                    color: '#f0f0f0',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t('projectDetail.overviewTitle', 'Visão Geral & Desafio')}
                </h2>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '1.05rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                  }}
                >
                  {getLocalized(project.overview, currentLang)}
                </p>
              </section>
            )}

            {/* Highlights Section */}
            {project.highlights && project.highlights.length > 0 && (
              <section>
                <h2
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1.6rem',
                    color: '#f0f0f0',
                    fontWeight: 700,
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t('projectDetail.highlightsTitle', 'Principais Conquistas Técnicas')}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        padding: '1rem 1.25rem',
                        borderRadius: '8px',
                      }}
                    >
                      <CheckCircle2
                        size={20}
                        color="var(--accent)"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <p
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.95rem',
                          color: '#e0e0e0',
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {getLocalized(highlight, currentLang)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Features Section */}
            {project.features && project.features.length > 0 && (
              <section>
                <h2
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1.6rem',
                    color: '#f0f0f0',
                    fontWeight: 700,
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t('projectDetail.featuresTitle', 'Módulos & Funcionalidades')}
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.25rem',
                  }}
                >
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        padding: '1.5rem',
                        borderRadius: '8px',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'Syne, sans-serif',
                          fontSize: '1.15rem',
                          color: '#f0f0f0',
                          fontWeight: 700,
                          marginBottom: '0.6rem',
                        }}
                      >
                        {getLocalized(feature.title, currentLang)}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {getLocalized(feature.description, currentLang)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Decisions */}
            {project.technicalDecisions && (
              <section>
                <h2
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1.6rem',
                    color: '#f0f0f0',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t('projectDetail.technicalDecisionsTitle', 'Arquitetura & Decisões Técnicas')}
                </h2>
                <div
                  style={{
                    background: 'var(--bg-secondary)',
                    borderLeft: '3px solid var(--accent)',
                    borderTop: '1px solid var(--border)',
                    borderRight: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    padding: '1.5rem',
                    borderRadius: '0 8px 8px 0',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {getLocalized(project.technicalDecisions, currentLang)}
                  </p>
                </div>
              </section>
            )}
          </div>

          {/* Technical Metadata Sidebar */}
          <aside
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              position: 'sticky',
              top: '5rem',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.4rem',
                }}
              >
                <Layers size={14} />
                {t('projectDetail.rolePerformed', 'Papel Desempenhado')}
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: '#f0f0f0',
                }}
              >
                {getLocalized(project.role, currentLang) || t('projectDetail.defaultRole', 'Desenvolvedor Full Stack')}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                }}
              >
                <Cpu size={14} />
                {t('projectDetail.stackAndTools', 'Stack & Ferramentas')}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <TechIcon techName={tag} />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Architecture Section */}
        {project.architecture && (
          <ProjectArchitecture architecture={project.architecture} projectTitle={project.title} />
        )}

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <ProjectGallery items={project.gallery} projectTitle={project.title} />
        )}

        {/* Project Navigation Footer (Prev / Next) */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {prevProject ? (
            <a
              href={`#/projeto/${prevProject.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                textDecoration: 'none',
                maxWidth: '260px',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                }}
              >
                <ArrowLeft size={14} />
                {t('projectDetail.prevProject', 'Projeto Anterior')}
              </span>
              <span
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#f0f0f0',
                }}
              >
                {prevProject.title}
              </span>
            </a>
          ) : (
            <div />
          )}

          <a
            href="#/projetos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              padding: '0.9rem 2rem',
              borderRadius: '8px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(184, 247, 60, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            }}
          >
            <span>{t('projectDetail.viewAllProjects', 'Ver todos os projetos')}</span>
            <span style={{ color: 'var(--accent)', transition: 'transform 0.2s ease' }}>→</span>
          </a>

          {nextProject ? (
            <a
              href={`#/projeto/${nextProject.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '0.3rem',
                textDecoration: 'none',
                maxWidth: '260px',
                textAlign: 'right',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                }}
              >
                {t('projectDetail.nextProject', 'Próximo Projeto')}
                <ArrowRight size={14} />
              </span>
              <span
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#f0f0f0',
                }}
              >
                {nextProject.title}
              </span>
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </article>
  );
}

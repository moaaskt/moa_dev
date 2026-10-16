import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, X } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import ProjectCard from '../ui/ProjectCard';
import { projects, categories } from '../../data/projects';

export default function AllProjectsPage() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const currentLang = (i18n.resolvedLanguage || i18n.language || 'pt').startsWith('en')
    ? 'en'
    : 'pt';

  useEffect(() => {
    document.title = t('allProjects.metaTitle', 'Todos os Projetos | Moacir Neto (moa_dev)');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = 'Moacir Neto | Engenheiro de Software & Desenvolvedor Full Stack';
    };
  }, [t, currentLang]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;

      const normalizedQuery = searchQuery.trim().toLowerCase();
      if (!normalizedQuery) return matchesCategory;

      const description =
        typeof project.description === 'object'
          ? project.description[currentLang] || project.description.pt
          : project.description;

      const role =
        typeof project.role === 'object'
          ? project.role[currentLang] || project.role.pt
          : project.role;

      const matchesSearch =
        project.title.toLowerCase().includes(normalizedQuery) ||
        (description && description.toLowerCase().includes(normalizedQuery)) ||
        (project.tags && project.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))) ||
        (role && role.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, currentLang]);

  const handleClearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <div
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
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <a
            href="#/"
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
            {t('allProjects.backToHome', 'Voltar para o início')}
          </a>
        </motion.div>

        {/* Page Header */}
        <div style={{ marginBottom: '3rem' }}>
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
              marginBottom: '0.75rem',
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
            {t('allProjects.badge', 'Catálogo Completo')}
          </div>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#f0f0f0',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            {t('allProjects.title', 'Todos os Projetos')}
          </h1>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              maxWidth: '650px',
              lineHeight: 1.6,
            }}
          >
            {t('allProjects.subtitle')}
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-secondary)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('allProjects.searchPlaceholder', 'Buscar por nome, tag ou tecnologia...')}
              aria-label={t('allProjects.searchAria', 'Buscar projetos por nome ou tecnologia')}
              style={{
                width: '100%',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                padding: '0.8rem 2.8rem 0.8rem 2.8rem',
                color: '#f0f0f0',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label={t('allProjects.clearSearchAria', 'Limpar busca')}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills & Counter */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              {categories.map(({ id, label }) => {
                const isActive = activeCategory === id;
                const catLabel = t(`allProjects.categories.${id}`, label);

                return (
                  <button
                    key={id}
                    onClick={() => setActiveCategory(id)}
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '0.45rem 1rem',
                      borderRadius: '4px',
                      border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                      background: isActive ? 'var(--accent)' : 'transparent',
                      color: isActive ? '#080808' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      fontWeight: isActive ? 600 : 400,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'var(--border-accent)';
                        e.currentTarget.style.color = 'var(--accent)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }
                    }}
                  >
                    {catLabel}
                  </button>
                );
              })}
            </div>

            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
              }}
            >
              <Trans
                i18nKey="allProjects.showingCount"
                values={{ count: filteredProjects.length, total: projects.length }}
                components={{ 1: <strong style={{ color: 'var(--accent)' }} /> }}
              />
            </span>
          </div>
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px dashed var(--border)',
              borderRadius: '8px',
              padding: '4rem 2rem',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.25rem',
                color: '#f0f0f0',
                marginBottom: '0.5rem',
              }}
            >
              {t('allProjects.emptyTitle', 'Nenhum projeto encontrado')}
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                marginBottom: '1.5rem',
              }}
            >
              {t('allProjects.emptyDesc', { query: searchQuery, defaultValue: `Não localizamos resultados para "${searchQuery}".` })}
            </p>
            <button
              onClick={handleClearFilters}
              style={{
                background: 'transparent',
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                padding: '0.5rem 1.25rem',
                borderRadius: '4px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.color = '#080808';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--accent)';
              }}
            >
              {t('allProjects.clearFilters', 'Limpar filtros de busca')}
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="all-projects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .all-projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import { projects, categories } from '../../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = projects
    .filter((p) => activeFilter === 'all' || p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{ padding: 'var(--section-padding)', background: 'var(--bg-primary)' }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--padding-x)' }}>
        <SectionHeader number="02" title="Projetos" />

        {/* Filter buttons */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map(({ id, label }) => {
            const isActive = activeFilter === id;
            return (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
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
                {label}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--grid-gap)',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={project.featured ? { gridColumn: '1 / -1' } : {}}
                className={project.featured ? 'project-featured-wrapper' : ''}
              >
                <ProjectCard project={project} featured={project.featured} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <style>{`
          @media (max-width: 767px) {
            .project-featured-wrapper { grid-column: unset !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function CodePlaceholder() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--bg-elevated)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)',
      }}
    >
      <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </div>
  );
}

function CardLinks({ github, live }) {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '1rem' }}>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver no GitHub"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-secondary)',
            transition: 'color 0.25s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          <GithubIcon size={15} />
          GitHub
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver projeto ao vivo"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-secondary)',
            transition: 'color 0.25s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          <ExternalLink size={14} />
          Live
        </a>
      )}
    </div>
  );
}

function TagPills({ tags }) {
  return (
    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
      {tags.slice(0, 3).map((tag) => (
        <span
          key={tag}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.06em',
            color: 'var(--text-secondary)',
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid var(--border)',
            padding: '0.2rem 0.5rem',
            borderRadius: '3px',
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    background: 'var(--bg-secondary)',
    border: `1px solid ${hovered ? 'var(--border-accent)' : 'var(--border)'}`,
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: featured ? 'row' : 'column',
    transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
    boxShadow: hovered ? '0 0 30px var(--accent-glow)' : 'none',
    transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
    cursor: 'default',
  };

  const imageContainerStyle = {
    position: 'relative',
    flexShrink: 0,
    ...(featured
      ? { width: '45%', minHeight: '240px' }
      : { aspectRatio: '16/9', width: '100%' }),
    overflow: 'hidden',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={featured ? 'project-card-featured' : ''}
    >
      {/* Image */}
      <div style={imageContainerStyle}>
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: hovered ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 0.4s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.4)',
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.25s ease',
              }}
            />
          </>
        ) : (
          <CodePlaceholder />
        )}
        {/* Tags overlay */}
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
          <TagPills tags={project.tags} />
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <h3
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--text-lg)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-muted)',
              marginLeft: '0.5rem',
              flexShrink: 0,
            }}
          >
            {project.year}
          </span>
        </div>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: '0.5rem',
          }}
        >
          {project.description}
        </p>

        <CardLinks github={project.links.github} live={project.links.live} />
      </div>

      <style>{`
        @media (max-width: 767px) {
          .project-card-featured { flex-direction: column !important; }
          .project-card-featured > div:first-child { width: 100% !important; aspect-ratio: 16/9; min-height: unset !important; }
        }
      `}</style>
    </div>
  );
}

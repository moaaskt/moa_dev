import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const pillStyle = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '0.65rem',
  letterSpacing: '0.06em',
  color: '#b8f73c',
  background: '#161616',
  border: '1px solid rgba(184,247,60,0.3)',
  padding: '0.25rem 0.6rem',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
};

const extraPillStyle = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '0.65rem',
  letterSpacing: '0.06em',
  color: 'var(--text-muted)',
  background: '#161616',
  border: '1px solid rgba(255,255,255,0.1)',
  padding: '0.25rem 0.6rem',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
};

function CodePlaceholder() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#0f0f0f',
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

function TagPills({ tags }) {
  const visible = tags.slice(0, 3);
  const extra = tags.length - 3;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
      {visible.map((tag) => (
        <span key={tag} title={tag} style={pillStyle}>{tag}</span>
      ))}
      {extra > 0 && (
        <span style={extraPillStyle}>+{extra}</span>
      )}
    </div>
  );
}

function LinkButton({ href, label, icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 'var(--text-sm)',
        color: hovered ? 'var(--accent)' : 'var(--text-secondary)',
        transition: 'color 0.25s ease',
        textDecoration: 'none',
      }}
    >
      {icon}
      {label}
    </a>
  );
}

export default function ProjectCard({ project, featured = false }) {
  const [hovered, setHovered] = useState(false);

  const wrapperStyle = {
    background: 'var(--bg-secondary)',
    border: `1px solid ${hovered ? 'var(--border-accent)' : 'var(--border)'}`,
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: featured ? 'row' : 'column',
    height: '100%',
    ...(featured ? { minHeight: '280px' } : {}),
    transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
    boxShadow: hovered ? '0 0 30px var(--accent-glow)' : 'none',
    transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
    cursor: 'default',
  };

  const imageWrapperStyle = featured
    ? {
        flexShrink: 0,
        width: '50%',
        alignSelf: 'stretch',
        overflow: 'hidden',
        position: 'relative',
      }
    : {
        width: '100%',
        aspectRatio: '16/9',
        flexShrink: 0,
        overflow: 'hidden',
        position: 'relative',
      };

  return (
    <div
      style={wrapperStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={featured ? 'project-card-featured' : ''}
    >
      {/* Image / Placeholder */}
      <div style={imageWrapperStyle}>
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
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
                pointerEvents: 'none',
              }}
            />
          </>
        ) : (
          <CodePlaceholder />
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: featured ? '1.5rem' : '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* Title + Year */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          <h3
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--text-lg)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-muted)',
              flexShrink: 0,
              paddingTop: '2px',
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: featured ? 3 : 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            margin: 0,
          }}
        >
          {project.description}
        </p>

        {/* Footer: tags above, links below */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <TagPills tags={project.tags} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {project.links.github && (
              <LinkButton
                href={project.links.github}
                label="GitHub"
                icon={<GithubIcon size={15} />}
              />
            )}
            {project.links.live && (
              <LinkButton
                href={project.links.live}
                label="Live"
                icon={<ExternalLink size={14} />}
              />
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .project-card-featured {
            flex-direction: column !important;
          }
          .project-card-featured > div:first-child {
            width: 100% !important;
            aspect-ratio: 16/9 !important;
          }
        }
      `}</style>
    </div>
  );
}

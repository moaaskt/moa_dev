import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import TechIcon from './TechIcon';

const extraPillStyle = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '0.65rem',
  letterSpacing: '0.06em',
  color: 'var(--text-muted)',
  background: '#161616',
  border: '1px solid rgba(255,255,255,0.1)',
  padding: '0.2rem 0.55rem',
  borderRadius: '3px',
  whiteSpace: 'nowrap',
};

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function TagIcons({ tags }) {
  const visible = tags.slice(0, 6);
  const extra = tags.length - 6;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
      {visible.map((tag) => (
        <TechIcon key={tag} techName={tag} />
      ))}
      {extra > 0 && (
        <span style={extraPillStyle}>+{extra}</span>
      )}
    </div>
  );
}

function CodePlaceholder() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#161616',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#444',
      }}
    >
      <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
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
        fontSize: '0.85rem',
        color: hovered ? '#b8f73c' : '#888',
        transition: 'color 0.25s ease',
        textDecoration: 'none',
      }}
    >
      {icon}
      {label}
    </a>
  );
}

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-secondary)',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 30px rgba(184,247,60,0.1)' : 'none',
        transition: 'all 0.25s ease',
        cursor: 'default',
      }}
    >
      {/* Image / Placeholder */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16/9',
          flexShrink: 0,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
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
          padding: '1.5rem',
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
              fontSize: '1.2rem',
              color: '#f0f0f0',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#444',
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
            fontSize: '0.9rem',
            color: '#888',
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            margin: 0,
          }}
        >
          {project.description}
        </p>

        {/* Footer */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: '1px solid #1a1a1a',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <TagIcons tags={project.tags} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
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
    </div>
  );
}

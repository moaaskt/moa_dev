import { useState } from 'react';
import { TECH_ICONS } from '../../data/techIcons';

const textPillStyle = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '0.65rem',
  letterSpacing: '0.06em',
  color: '#666',
  background: '#0f0f0f',
  border: '1px solid #333',
  padding: '0.2rem 0.55rem',
  borderRadius: '3px',
  whiteSpace: 'nowrap',
};

export default function TechIcon({ techName }) {
  const [hovered, setHovered] = useState(false);
  const entry = TECH_ICONS[techName];

  if (!entry) {
    return <span style={textPillStyle}>{techName}</span>;
  }

  const IconComponent = entry.icon;

  return (
    <div
      title={techName}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: hovered ? 'scale(1.2)' : 'scale(1)',
        filter: hovered ? `drop-shadow(0 0 6px ${entry.color})` : 'none',
        transition: 'all 0.2s ease',
        cursor: 'default',
      }}
    >
      <IconComponent size={20} color={entry.color} />
    </div>
  );
}

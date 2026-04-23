import { useState } from 'react';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiReact,
  SiJavascript, SiPhp, SiPython, SiMysql, SiPostgresql,
  SiNodedotjs, SiFirebase, SiDocker, SiWordpress,
  SiSupabase, SiCodeigniter, SiHtml5, SiCss,
  SiGooglegemini,
  SiYoutube, SiBootstrap, SiOpenai,
  SiHuggingface, SiPuppeteer, SiPostman,
} from 'react-icons/si';

export const TECH_ICONS = {
  'Next.js':       { icon: SiNextdotjs,    color: '#ffffff' },
  'TypeScript':    { icon: SiTypescript,   color: '#3178C6' },
  'Tailwind':      { icon: SiTailwindcss,  color: '#06B6D4' },
  'React':         { icon: SiReact,        color: '#61DAFB' },
  'JavaScript':    { icon: SiJavascript,   color: '#F7DF1E' },
  'PHP':           { icon: SiPhp,          color: '#777BB4' },
  'Python':        { icon: SiPython,       color: '#3776AB' },
  'MySQL':         { icon: SiMysql,        color: '#4479A1' },
  'PostgreSQL':    { icon: SiPostgresql,   color: '#4169E1' },
  'Node.js':       { icon: SiNodedotjs,    color: '#339933' },
  'Firebase':      { icon: SiFirebase,     color: '#FFCA28' },
  'Docker':        { icon: SiDocker,       color: '#2496ED' },
  'WordPress':     { icon: SiWordpress,    color: '#21759B' },
  'Supabase':      { icon: SiSupabase,     color: '#3ECF8E' },
  'CodeIgniter 4': { icon: SiCodeigniter,  color: '#EF4223' },
  'CodeIgniter':   { icon: SiCodeigniter,  color: '#EF4223' },
  'HTML':          { icon: SiHtml5,        color: '#E34F26' },
  'CSS':           { icon: SiCss,          color: '#1572B6' },
  'Google Gemini': { icon: SiGooglegemini, color: '#8E75B2' },
  'YouTube API':   { icon: SiYoutube,      color: '#FF0000' },
  'Bootstrap':     { icon: SiBootstrap,    color: '#7952B3' },
  'IA Generativa': { icon: SiOpenai,       color: '#b8f73c' },
  'NLP':           { icon: SiHuggingface,  color: '#FFD21E' },
  'Web Scraping':  { icon: SiPuppeteer,    color: '#40B5A4' },
  'REST API':      { icon: SiPostman,      color: '#FF6C37' },
};

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

import { useState } from 'react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiPhp, SiPython, SiCodeigniter,
  SiPostgresql, SiMysql, SiFirebase, SiSupabase,
  SiDocker, SiWordpress, SiGit, SiGithub,
} from 'react-icons/si';
import SectionHeader from '../ui/SectionHeader';

const CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      { label: 'React',      Icon: SiReact,       color: '#61DAFB' },
      { label: 'Next.js',    Icon: SiNextdotjs,    color: '#f0f0f0' },
      { label: 'TypeScript', Icon: SiTypescript,   color: '#3178C6' },
      { label: 'JavaScript', Icon: SiJavascript,   color: '#F7DF1E' },
      { label: 'HTML5',      Icon: SiHtml5,        color: '#E34F26' },
      { label: 'CSS3',       Icon: SiCss,          color: '#1572B6' },
      { label: 'Tailwind',   Icon: SiTailwindcss,  color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { label: 'Node.js',     Icon: SiNodedotjs,   color: '#339933' },
      { label: 'PHP',         Icon: SiPhp,         color: '#777BB4' },
      { label: 'Python',      Icon: SiPython,      color: '#3776AB' },
      { label: 'CodeIgniter', Icon: SiCodeigniter, color: '#EF4223' },
    ],
  },
  {
    title: 'Banco de Dados',
    skills: [
      { label: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { label: 'MySQL',      Icon: SiMysql,      color: '#4479A1' },
      { label: 'Firebase',   Icon: SiFirebase,   color: '#FFCA28' },
      { label: 'Supabase',   Icon: SiSupabase,   color: '#3ECF8E' },
    ],
  },
  {
    title: 'Ferramentas',
    skills: [
      { label: 'Docker',    Icon: SiDocker,    color: '#2496ED' },
      { label: 'WordPress', Icon: SiWordpress, color: '#21759B' },
      { label: 'Git',       Icon: SiGit,       color: '#F05032' },
      { label: 'GitHub',    Icon: SiGithub,    color: '#f0f0f0' },
    ],
  },
];

function SkillIcon({ label, Icon, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem',
        cursor: 'default',
        transform: hovered ? 'scale(1.2)' : 'scale(1)',
        transition: 'transform 0.2s ease',
      }}
    >
      <Icon size={28} color={color} />
      <span style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.65rem',
        color: hovered ? '#b8f73c' : '#555',
        transition: 'color 0.2s ease',
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
    </div>
  );
}

function CategoryGroup({ title, skills }) {
  return (
    <div style={{
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '1.5rem',
    }}>
      <p style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.7rem',
        color: '#444',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        margin: '0 0 0.75rem 0',
      }}>
        {title}
      </p>
      <div style={{
        width: '20px',
        height: '2px',
        background: 'var(--accent)',
        marginBottom: '1.25rem',
      }} />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
        {skills.map((s) => <SkillIcon key={s.label} {...s} />)}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--padding-x)' }}>
        <SectionHeader number="03" title="Conhecimentos" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          marginTop: '3rem',
        }}
          className="skills-grid"
        >
          {CATEGORIES.map((cat) => (
            <CategoryGroup key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

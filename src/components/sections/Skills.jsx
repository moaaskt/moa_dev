import { useState } from 'react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiPhp, SiLaravel, SiNestjs, SiGo, SiPython, SiCodeigniter, SiRabbitmq,
  SiPostgresql, SiMysql, SiFirebase, SiSupabase,
  SiDocker, SiPostman, SiGit, SiGithub, SiLinux, SiWordpress,
  SiCplusplus, SiEspressif, SiArduino,
} from 'react-icons/si';
import { TbWifi, TbSettings, TbCpu } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../ui/SectionHeader';

const CATEGORIES = [
  {
    key: 'frontend',
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
    key: 'backend',
    skills: [
      { label: 'Node.js',     Icon: SiNodedotjs,   color: '#339933' },
      { label: 'PHP',         Icon: SiPhp,         color: '#777BB4' },
      { label: 'Laravel',     Icon: SiLaravel,     color: '#FF2D20' },
      { label: 'NestJS',      Icon: SiNestjs,      color: '#E0234E' },
      { label: 'Golang',      Icon: SiGo,          color: '#00ADD8' },
      { label: 'Python',      Icon: SiPython,      color: '#3776AB' },
      { label: 'CodeIgniter', Icon: SiCodeigniter, color: '#EF4223' },
      { label: 'RabbitMQ',    Icon: SiRabbitmq,    color: '#FF6600' },
      { label: 'C++',         Icon: SiCplusplus,   color: '#00599C' },
    ],
  },
  {
    key: 'database',
    skills: [
      { label: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { label: 'MySQL',      Icon: SiMysql,      color: '#4479A1' },
      { label: 'Firebase',   Icon: SiFirebase,   color: '#FFCA28' },
      { label: 'Supabase',   Icon: SiSupabase,   color: '#3ECF8E' },
    ],
  },
  {
    key: 'tools',
    skills: [
      { label: 'Docker',    Icon: SiDocker,    color: '#2496ED' },
      { label: 'Postman',   Icon: SiPostman,   color: '#FF6C37' },
      { label: 'Git',       Icon: SiGit,       color: '#F05032' },
      { label: 'GitHub',    Icon: SiGithub,    color: '#f0f0f0' },
      { label: 'Linux',     Icon: SiLinux,     color: '#e4edf4ff' },
      { label: 'WordPress', Icon: SiWordpress, color: '#21759B' },
    ],
  },
  {
    key: 'iot',
    skills: [
      { label: 'ESP32',      Icon: SiEspressif,  color: '#E7352B' },
      { label: 'Arduino',    Icon: SiArduino,    color: '#00979D' },
      { label: 'C++',        Icon: SiCplusplus,  color: '#00599C' },
      { label: 'IoT',        Icon: TbWifi,       color: '#06B6D4' },
      { label: 'Automação',  Icon: TbSettings,   color: '#06B6D4' },
      { label: 'Sensores',   Icon: TbCpu,        color: '#06B6D4' },
      { label: 'Eletrônica', Icon: TbCpu,        color: '#b8f73c' },
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
        padding: '0.5rem',
        borderRadius: '6px',
        transition: 'transform 0.2s ease, background 0.2s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        background: hovered ? 'rgba(255,255,255,0.03)' : 'transparent',
      }}
    >
      <div style={{
        fontSize: '1.75rem',
        color: hovered ? color : 'var(--text-secondary)',
        transition: 'color 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Icon size={28} />
      </div>
      <span style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.7rem',
        color: hovered ? 'var(--text-primary)' : 'var(--text-muted)',
        transition: 'color 0.2s ease',
        textAlign: 'center',
      }}>
        {label}
      </span>
    </div>
  );
}

function CategoryGroup({ title, skills }) {
  return (
    <div style={{
      background: 'var(--bg-primary)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '1.5rem',
      height: '100%',
    }}>
      <p style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: 700,
        fontSize: 'var(--text-base)',
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        marginBottom: '0.25rem',
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
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--padding-x)' }}>
        <SectionHeader
          number={t('skills.sectionNumber', '03')}
          title={t('skills.sectionTitle', 'Skills')}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          marginTop: '3rem',
        }}
          className="skills-grid"
        >
          {CATEGORIES.map((cat, i) => {
            const title = t(`skills.categories.${cat.key}`);
            return (
              <div
                key={cat.key}
                style={
                  CATEGORIES.length % 2 !== 0 && i === CATEGORIES.length - 1
                    ? { gridColumn: '1 / -1' }
                    : {}
                }
              >
                <CategoryGroup title={title} skills={cat.skills} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

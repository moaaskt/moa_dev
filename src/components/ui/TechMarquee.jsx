import {
  SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiNodedotjs, SiPython, SiPhp, SiPostgresql,
  SiTailwindcss, SiFirebase, SiMysql, SiDocker, SiSupabase, SiWordpress, SiCodeigniter, SiHtml5, SiCss,
} from 'react-icons/si';

const ROW1 = [
  { label: 'React',      Icon: SiReact,       color: '#61DAFB' },
  { label: 'TypeScript', Icon: SiTypescript,   color: '#3178C6' },
  { label: 'JavaScript', Icon: SiJavascript,   color: '#F7DF1E' },
  { label: 'Next.js',    Icon: SiNextdotjs,    color: '#f0f0f0' },
  { label: 'Node.js',    Icon: SiNodedotjs,    color: '#339933' },
  { label: 'Python',     Icon: SiPython,       color: '#3776AB' },
  { label: 'PHP',        Icon: SiPhp,          color: '#777BB4' },
  { label: 'PostgreSQL', Icon: SiPostgresql,   color: '#4169E1' },
];

const ROW2 = [
  { label: 'Tailwind',    Icon: SiTailwindcss,  color: '#06B6D4' },
  { label: 'Firebase',    Icon: SiFirebase,     color: '#FFCA28' },
  { label: 'MySQL',       Icon: SiMysql,        color: '#4479A1' },
  { label: 'Docker',      Icon: SiDocker,       color: '#2496ED' },
  { label: 'Supabase',    Icon: SiSupabase,     color: '#3ECF8E' },
  { label: 'WordPress',   Icon: SiWordpress,    color: '#21759B' },
  { label: 'CodeIgniter', Icon: SiCodeigniter,  color: '#EF4223' },
  { label: 'HTML5',       Icon: SiHtml5,        color: '#E34F26' },
  { label: 'CSS3',        Icon: SiCss,          color: '#1572B6' },
];

function TechItem({ label, Icon, color }) {
  return (
    <div
      className="tech-item"
      title={label}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem', cursor: 'default', height: '60px' }}
    >
      <Icon size={24} color={color} className="tech-icon" style={{ transition: 'transform 0.2s ease', flexShrink: 0 }} />
    </div>
  );
}

function MarqueeRow({ items, reverse }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className={reverse ? 'marquee-track marquee-reverse' : 'marquee-track marquee-forward'}
        style={{ display: 'flex', width: 'max-content' }}
      >
        {tripled.map((tech, i) => (
          <TechItem key={i} {...tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div style={{
      overflow: 'hidden',
      padding: '1.5rem 0',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
      maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <MarqueeRow items={ROW1} reverse={false} />
        <MarqueeRow items={ROW2} reverse={true} />
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';

const STATS = [
  { value: '4+', label: 'Anos de experiência' },
  { value: '50+', label: 'Repositórios GitHub' },
  { value: '6+', label: 'Projetos no portfólio' },
  { value: '8mo', label: 'Experiência CLT' },
];

const TECH_TAGS = ['React', 'Node.js', 'PHP', 'Python', 'Next.js', 'Supabase'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function About() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="about"
      style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--padding-x)' }}>
        <SectionHeader number="01" title="Sobre mim" />

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left: text + tags */}
          <div>
            <motion.p
              {...fadeUp(0.1)}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.25rem',
              }}
            >
              Sou técnico em Desenvolvimento de Sistemas pelo SENAI e atuo como desenvolvedor full stack
              há mais de 4 anos — entre projetos pessoais, freelances e experiência CLT em agência digital.
            </motion.p>

            <motion.p
              {...fadeUp(0.2)}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Apaixonado por resolver problemas com código limpo e interfaces bem construídas. Gosto
              de trabalhar em toda a stack: do banco de dados até a UI. Baseado em{' '}
              <span style={{ color: 'var(--text-primary)' }}>Palhoça, SC</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--accent)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                // stack favorita
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {TECH_TAGS.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '4px',
                      transition: 'border-color 0.25s ease, color 0.25s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-accent)';
                      e.currentTarget.style.color = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: stat cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}
          >
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 'var(--text-2xl)',
                    color: 'var(--accent)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import SkillBadge from '../ui/SkillBadge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skills } from '../../data/skills';

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="skills"
      style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--padding-x)' }}>
        <SectionHeader number="03" title="Conhecimentos" />

        <div
          ref={ref}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          {skills.map(({ category, items }, groupIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
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
                {category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + skillIndex * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <SkillBadge label={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

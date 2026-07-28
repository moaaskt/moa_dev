// 1. React, Core Hooks, and Native Packages

// 2. Third-Party Libraries (Framer Motion, Lucide Icons, etc.)
import { motion } from 'framer-motion';

// 3. Reusable UI Components & Layout Elements
import AboutPortrait from '../ui/AboutPortrait'; // eslint-disable-line no-unused-vars
import SectionHeader from '../ui/SectionHeader';
import TechIcon from '../ui/TechIcon';

// 4. Data Layer, Configuration, and Custom Hooks / Utilities
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// 5. CSS Stylesheets, Custom Fonts, and Module CSS (if any)

const FAVORITE_STACK = ['React', 'PHP', 'Python', 'Next.js'];

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
          className="about-grid"
          style={{ alignItems: 'center' }}
        >
          {/* Biography and Tech Tags Container */}
          <div className="about-content">
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
              Sou Técnico em Desenvolvimento de Sistemas pelo SENAI e venho construindo uma trajetória prática no desenvolvimento web, criando projetos full stack, integrações e soluções que resolvem problemas reais.
            </motion.p>

            <motion.p
              {...fadeUp(0.2)}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.25rem',
              }}
            >
              Tenho experiência com PHP, JavaScript, React, Python, Docker, bancos de dados e APIs. Gosto de atuar em toda a stack: da regra de negócio e modelagem de dados até interfaces responsivas e bem organizadas.
            </motion.p>

            <motion.p
              {...fadeUp(0.3)}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Minha evolução como dev vem de projetos reais, estudo constante e manutenção de sistemas em produção, onde aprendi a investigar bugs, entender impacto no usuário e entregar correções com responsabilidade.
            </motion.p>

            {/* Favorite Stack Section */}
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
                  marginBottom: '1rem',
                }}
              >
                // stack favorita
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {FAVORITE_STACK.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      cursor: 'default',
                      transition: 'border-color 0.25s ease, transform 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-accent)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <TechIcon techName={tech} />
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Profile Portrait Container */}
          <div className="about-photo-wrapper">
            <motion.div
              {...fadeUp(0.25)}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            >
              <AboutPortrait />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

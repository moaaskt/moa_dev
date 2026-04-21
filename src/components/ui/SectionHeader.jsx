import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function SectionHeader({ number, label, title, centered }) {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: '3.5rem', textAlign: centered ? 'center' : 'left' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', justifyContent: centered ? 'center' : 'flex-start' }}>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'var(--text-xs)',
            color: 'var(--accent)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          {label || number}
        </span>
        <span
          style={{
            display: 'block',
            width: '40px',
            height: '1px',
            background: 'var(--accent)',
            flexShrink: 0,
          }}
        />
      </div>
      <h2
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, var(--text-2xl))',
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
    </motion.div>
  );
}

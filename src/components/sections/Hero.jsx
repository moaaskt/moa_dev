import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const TYPING_TEXT = 'Desenvolvedor Full Stack Jr.';

function useTypingCursor(text, speed = 80) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayed, done };
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 480) return;

    let animId;
    let timeoutId;

    // Defer canvas initialization to avoid blocking FCP / TBT on first paint
    const initCanvas = () => {
      const canvas = vantaRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const resize = () => {
        canvas.width = canvas.offsetWidth || window.innerWidth;
        canvas.height = canvas.offsetHeight || window.innerHeight;
      };
      window.addEventListener('resize', resize);
      resize();

      const particleCount = window.innerWidth >= 768 ? 100 : 50;
      const particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * (canvas.width || window.innerWidth),
        y: Math.random() * (canvas.height || window.innerHeight),
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.2,
      }));

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(184, 247, 60, ${p.opacity})`;
          ctx.fill();
          p.x += p.dx;
          p.y += p.dy;
          if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });
        animId = requestAnimationFrame(draw);
      };

      draw();
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(initCanvas, { timeout: 1200 });
    } else {
      timeoutId = setTimeout(initCanvas, 600);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  const { displayed, done } = useTypingCursor(TYPING_TEXT, 70);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '0 var(--padding-x)',
        background: 'var(--bg-primary)',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Particle background layer */}
      <canvas
        ref={vantaRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block', zIndex: 0 }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px' }}>
        {/* Label */}
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'var(--text-sm)',
            color: 'var(--accent)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Olá, eu sou
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.35)}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 9vw, 6rem)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}
        >
          Moacir Neto
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          {...fadeUp(0.5)}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)',
            color: 'var(--text-secondary)',
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            minHeight: '2.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
          }}
        >
          {displayed}
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1.2em',
              background: 'var(--accent)',
              marginLeft: '2px',
              animation: done ? 'blink 1s step-end infinite' : 'none',
              opacity: 1,
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.65)}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 2.5rem',
          }}
        >
          Full Stack Jr. com experiência prática em sistemas de produção — da correção de bugs críticos de negócio à construção de integrações e SaaS multi-tenant com IA.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(0.8)}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent)',
              color: '#080808',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: 'var(--text-sm)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.85rem 2rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.25s ease, transform 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-dim)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Ver Projetos
          </a>

          <a
            href="https://github.com/moaaskt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar perfil de Moacir Neto no GitHub"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: 'var(--text-sm)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.85rem 2rem',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              transition: 'border-color 0.25s ease, color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
          color: 'var(--text-muted)',
          animation: 'scrollBounce 2s ease-in-out infinite',
        }}
        aria-hidden="true"
      >
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          scroll
        </span>
        <ChevronDown size={16} />
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../ui/LanguageSelector';

const NAV_ITEMS = [
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'github', href: '#github-projects' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Não atualiza active se estiver em páginas dedicadas (ex: #/projetos ou #/projeto/:id)
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        return;
      }

      // Se estiver próximo ao rodapé da página, ativa a última seção (Contato)
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActive('#contact');
        return;
      }

      // Threshold de visibilidade considerando a altura da navbar (~120px)
      const scrollPosition = window.scrollY + 160;

      let currentSection = '';
      for (const { href } of NAV_ITEMS) {
        const el = document.querySelector(href);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentSection = href;
          }
        }
      }

      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Executa uma vez no carregamento para posicionar corretamente se já houver scroll inicial
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [drawerOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    if (drawerOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [drawerOpen]);

  const handleLinkClick = (href) => {
    setActive(href);
    setDrawerOpen(false);

    // Se estiver em uma sub-página (ex: #/projetos ou #/projeto/:id), garante scroll após mudança de rota
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1rem var(--padding-x)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease',
          background: scrolled ? 'rgba(8, 8, 8, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1.3rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
          }}
        >
          moa<span style={{ color: 'var(--accent)' }}>(dev)</span>
        </a>

        {/* Desktop Container (Links + Language Selector) */}
        <div
          className="nav-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <ul
            style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
              alignItems: 'center',
            }}
          >
            {NAV_ITEMS.map(({ key, href }) => {
              const label = t(`nav.${key}`);
              return (
                <li key={href} style={{ position: 'relative' }}>
                  <a
                    href={href}
                    onClick={() => handleLinkClick(href)}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: 'var(--text-sm)',
                      color: active === href ? 'var(--accent)' : 'var(--text-secondary)',
                      transition: 'color 0.25s ease',
                      paddingBottom: '4px',
                    }}
                    onMouseEnter={(e) => {
                      if (active !== href) e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      if (active !== href) e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {label}
                    {active === href && (
                      <motion.span
                        layoutId="nav-underline"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: 'var(--accent)',
                          borderRadius: '2px',
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Language Selector */}
          <LanguageSelector id="desktop" />
        </div>

        {/* Mobile Header Actions (Language Selector + Hamburger) */}
        <div
          className="nav-mobile-actions"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <LanguageSelector id="mobile-header" />
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label={t('nav.openMenu', 'Abrir menu')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                zIndex: 200,
              }}
            />
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '75vw',
                maxWidth: '320px',
                background: 'var(--bg-secondary)',
                borderLeft: '1px solid var(--border)',
                zIndex: 300,
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem 1.5rem',
              }}
            >
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label={t('nav.closeMenu', 'Fechar menu')}
                style={{
                  alignSelf: 'flex-end',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                }}
              >
                <X size={24} aria-hidden="true" />
              </button>
              <nav>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {NAV_ITEMS.map(({ key, href }, i) => {
                    const label = t(`nav.${key}`);
                    return (
                      <motion.li
                        key={href}
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <a
                          href={href}
                          onClick={() => handleLinkClick(href)}
                          style={{
                            fontFamily: 'Syne, sans-serif',
                            fontWeight: 700,
                            fontSize: 'var(--text-xl)',
                            color: active === href ? 'var(--accent)' : 'var(--text-primary)',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {label}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                <LanguageSelector id="mobile-drawer" isFullWidth />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-actions { display: flex !important; }
        }
      `}</style>
    </>
  );
}

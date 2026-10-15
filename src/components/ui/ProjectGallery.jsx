import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function ProjectGallery({ items = [], projectTitle = 'Projeto' }) {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = useMemo(() => {
    const set = new Set();
    items.forEach((item) => {
      if (item.category) set.add(item.category);
    });
    return ['Todas', ...Array.from(set)];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Todas') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  }, [lightboxIndex, filteredItems.length]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  }, [lightboxIndex, filteredItems.length]);

  // Teclado (ESC, Esquerda, Direita) e bloqueio de scroll
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  if (!items || items.length === 0) return null;

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      {/* Header da Galeria */}
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '0.6rem',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '14px',
              height: '1px',
              background: 'var(--accent)',
              flexShrink: 0,
            }}
          />
          Capturas Reais do Sistema
        </div>
        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            color: '#f0f0f0',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}
        >
          Galeria & Interface em Produção
        </h2>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            lineHeight: 1.6,
          }}
        >
          Explore as telas e fluxos reais do sistema {projectTitle}. Clique em qualquer imagem para
          visualizar os detalhes técnicos e as métricas em tela cheia com alta resolução.
        </p>
      </div>

      {/* Filtros de Categoria */}
      {categories.length > 2 && (
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '4px',
                  border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                  background: isActive ? 'var(--accent)' : 'var(--bg-secondary)',
                  color: isActive ? '#080808' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontWeight: isActive ? 700 : 400,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--border-accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid de Imagens */}
      <motion.div
        layout
        className="gallery-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id || index}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
              onClick={() => setLightboxIndex(index)}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
              }}
              className="gallery-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Thumbnail Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  background: '#121212',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  className="gallery-thumb"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(8, 8, 8, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                  }}
                  className="gallery-overlay"
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'var(--accent)',
                      color: '#080808',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '4px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                    }}
                  >
                    <Maximize2 size={14} />
                    Expandir
                  </span>
                </div>
              </div>

              {/* Informações da Imagem */}
              <div
                style={{
                  padding: '1rem 1.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#f0f0f0',
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  {item.category && (
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        color: 'var(--accent)',
                        background: 'rgba(184, 247, 60, 0.08)',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '3px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.category}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal em Tela Cheia */}
      <AnimatePresence>
        {lightboxIndex !== null && currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.94)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              zIndex: 99999,
              display: 'flex',
              flexDirection: 'column',
              padding: '1.25rem 2rem',
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            {/* Topbar do Lightbox */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.8rem',
                    color: 'var(--accent)',
                    border: '1px solid var(--border-accent)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    background: 'rgba(184, 247, 60, 0.08)',
                  }}
                >
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <span
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: '#f0f0f0',
                  }}
                >
                  {currentLightboxItem.title}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                aria-label="Fechar visualização em tela cheia"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  borderRadius: '6px',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Imagem Central e Controles de Navegação */}
            <div
              style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 0,
              }}
            >
              {/* Botão Anterior */}
              <button
                onClick={showPrev}
                aria-label="Imagem anterior"
                style={{
                  position: 'absolute',
                  left: '1rem',
                  zIndex: 2,
                  background: 'rgba(20, 20, 20, 0.8)',
                  border: '1px solid var(--border)',
                  color: '#f0f0f0',
                  borderRadius: '50%',
                  width: '46px',
                  height: '46px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = '#f0f0f0';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Imagem */}
              <motion.img
                key={currentLightboxItem.id || lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                style={{
                  maxWidth: '92%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              />

              {/* Botão Próximo */}
              <button
                onClick={showNext}
                aria-label="Próxima imagem"
                style={{
                  position: 'absolute',
                  right: '1rem',
                  zIndex: 2,
                  background: 'rgba(20, 20, 20, 0.8)',
                  border: '1px solid var(--border)',
                  color: '#f0f0f0',
                  borderRadius: '50%',
                  width: '46px',
                  height: '46px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = '#f0f0f0';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Descrição / Legenda Inferior */}
            <div
              style={{
                width: '100%',
                maxWidth: '850px',
                margin: '1rem auto 0 auto',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '0.85rem 1.25rem',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.9rem',
                  color: '#d0d0d0',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {currentLightboxItem.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-card:hover .gallery-thumb {
          transform: scale(1.04);
        }
        @media (max-width: 991px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

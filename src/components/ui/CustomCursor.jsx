import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const isHovering = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    console.log('[CustomCursor] mounted, width:', window.innerWidth);
    if (window.innerWidth <= 768) return;

    document.body.style.cursor = 'none';

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => { isHovering.current = true; };
    const onLeave = () => { isHovering.current = false; };

    const interactables = 'a, button, [data-cursor]';

    const addListeners = () => {
      document.querySelectorAll(interactables).forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    const loop = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.12;
      current.current.y += (pos.current.y - current.current.y) * 0.12;

      if (dotRef.current) {
        const size = isHovering.current ? 40 : 10;
        dotRef.current.style.left = `${current.current.x}px`;
        dotRef.current.style.top = `${current.current.y}px`;
        dotRef.current.style.width = `${size}px`;
        dotRef.current.style.height = `${size}px`;
        dotRef.current.style.background = isHovering.current ? 'transparent' : 'var(--accent)';
        dotRef.current.style.border = isHovering.current ? '2px solid var(--accent)' : 'none';
        dotRef.current.style.transform = `translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    addListeners();
    rafId.current = requestAnimationFrame(loop);

    // Re-scan after a tick so dynamic elements are included
    const timeout = setTimeout(addListeners, 500);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.querySelectorAll(interactables).forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      cancelAnimationFrame(rafId.current);
      clearTimeout(timeout);
      document.body.style.cursor = '';
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, border 0.2s ease',
        mixBlendMode: 'difference',
      }}
    />
  );
}

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const isHovering = useRef(false);
  const rafId = useRef(null);
  const isRunning = useRef(false);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    document.body.style.cursor = 'none';

    const loop = () => {
      const dx = pos.current.x - current.current.x;
      const dy = pos.current.y - current.current.y;

      // Smooth interpolation (LERP)
      current.current.x += dx * 0.12;
      current.current.y += dy * 0.12;

      const size = isHovering.current ? 40 : 10;

      if (dotRef.current) {
        dotRef.current.style.left = `${current.current.x}px`;
        dotRef.current.style.top = `${current.current.y}px`;
        dotRef.current.style.width = `${size}px`;
        dotRef.current.style.height = `${size}px`;
        dotRef.current.style.background = isHovering.current ? 'transparent' : 'var(--accent)';
        dotRef.current.style.border = isHovering.current ? '2px solid var(--accent)' : 'none';
        dotRef.current.style.transform = 'translate(-50%, -50%)';
      }

      // Keep animating if not fully stabilized
      if (Math.abs(dx) > 0.08 || Math.abs(dy) > 0.08) {
        rafId.current = requestAnimationFrame(loop);
      } else {
        // Snap to exact target and pause loop
        current.current = { ...pos.current };
        if (dotRef.current) {
          dotRef.current.style.left = `${pos.current.x}px`;
          dotRef.current.style.top = `${pos.current.y}px`;
        }
        isRunning.current = false;
        rafId.current = null;
      }
    };

    const startLoop = () => {
      if (!isRunning.current) {
        isRunning.current = true;
        rafId.current = requestAnimationFrame(loop);
      }
    };

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      startLoop();
    };

    const onEnter = () => {
      isHovering.current = true;
      startLoop();
    };

    const onLeave = () => {
      isHovering.current = false;
      startLoop();
    };

    const interactables = 'a, button, [data-cursor]';

    const addListeners = () => {
      document.querySelectorAll(interactables).forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove);
    addListeners();
    startLoop();

    // Re-scan after a tick so dynamic elements are included
    const timeout = setTimeout(addListeners, 500);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.querySelectorAll(interactables).forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      clearTimeout(timeout);
      document.body.style.cursor = '';
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
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

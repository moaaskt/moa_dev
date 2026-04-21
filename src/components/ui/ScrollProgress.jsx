import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let rafId;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      zIndex: 10000,
      background: 'transparent',
      pointerEvents: 'none',
    }}>
      <div
        ref={barRef}
        style={{
          height: '100%',
          background: 'var(--accent)',
          width: '0%',
          transition: 'width 0.05s linear',
          boxShadow: '0 0 8px var(--accent)',
        }}
      />
    </div>
  );
}

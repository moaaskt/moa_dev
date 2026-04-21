import { useEffect, useRef } from 'react';

export function useVanta(vantaEffect, options) {
  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);

  useEffect(() => {
    let attempts = 0;
    const MAX_ATTEMPTS = 10;

    const tryInit = () => {
      if (vantaInstance.current) return;

      if (window.VANTA && window.VANTA[vantaEffect]) {
        try {
          vantaInstance.current = window.VANTA[vantaEffect]({
            el: vantaRef.current,
            ...options,
          });
        } catch (e) {
          // WebGL not available — fallback to CSS background
        }
        return;
      }

      attempts++;
      if (attempts < MAX_ATTEMPTS) {
        setTimeout(tryInit, 100);
      }
    };

    tryInit();

    return () => {
      if (vantaInstance.current) {
        vantaInstance.current.destroy();
        vantaInstance.current = null;
      }
    };
  }, []);

  return vantaRef;
}

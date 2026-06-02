import { useEffect, useRef } from 'react';

export function useVanta(vantaEffect, options) {
  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);
  const optionsRef = useRef(options);

  // Manter opções atualizadas sem disparar novos ciclos de efeito
  useEffect(() => {
    optionsRef.current = options;
  });

  useEffect(() => {
    let attempts = 0;
    const MAX_ATTEMPTS = 10;
    let timeoutId = null;

    const tryInit = () => {
      // Abortar se a ref física não existe no DOM (proteção nula)
      if (!vantaRef.current) return;
      if (vantaInstance.current) return;

      if (window.VANTA && window.VANTA[vantaEffect]) {
        try {
          vantaInstance.current = window.VANTA[vantaEffect]({
            el: vantaRef.current,
            ...optionsRef.current,
          });
        } catch {
          // WebGL não disponível — fallback silencioso
        }
        return;
      }

      attempts++;
      if (attempts < MAX_ATTEMPTS) {
        timeoutId = setTimeout(tryInit, 100);
      }
    };

    tryInit();

    return () => {
      // Limpeza ativa de timeouts pendentes
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (vantaInstance.current) {
        vantaInstance.current.destroy();
        vantaInstance.current = null;
      }
    };
  }, [vantaEffect]);

  return vantaRef;
}

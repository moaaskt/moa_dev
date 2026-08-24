// 1. React, Core Hooks, and Native Packages

// 2. Third-Party Libraries (Framer Motion, Lucide Icons, etc.)

// 3. Reusable UI Components & Layout Elements

// 4. Data Layer, Configuration, and Custom Hooks / Utilities
import profileImg from '../../assets/moacir-profile.png';

// 5. CSS Stylesheets, Custom Fonts, and Module CSS (if any)
import '../../styles/about-portrait.css';

/**
 * Componente que renderiza a foto de perfil com recorte angular/tech,
 * moldura futurista de cantos cortados e legenda externa alinhada estilo terminal.
 */
export default function AboutPortrait() {
  return (
    <div style={{ width: '100%', maxWidth: '300px' }}>
      {/* Wrapper principal recortado e com sombreado */}
      <div className="portrait-wrapper">
        {/* Glow traseiro sutil */}
        <div className="portrait-glow" aria-hidden="true" />

        {/* Moldura externa recortada (corresponde à borda tech) */}
        <div className="portrait-tech-border">
          {/* Card interno com enquadramento da foto */}
          <div className="portrait-tech-card">
            <img
              src={profileImg}
              alt="Foto de Moacir Neto"
              className="portrait-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Legenda externa alinhada na base com estilo de terminal */}
      <div className="portrait-caption-external">
        <span className="caption-terminal-prefix">// PERFIL.DEV</span>
        <h4 className="caption-name">Moacir Neto</h4>
        <span className="caption-role">Desenvolvedor Full Stack Jr.</span>
      </div>
    </div>
  );
}

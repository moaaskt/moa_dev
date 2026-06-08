// 1. React, Core Hooks, and Native Packages

// 2. Third-Party Libraries (Framer Motion, Lucide Icons, etc.)

// 3. Reusable UI Components & Layout Elements

// 4. Data Layer, Configuration, and Custom Hooks / Utilities

// 5. CSS Stylesheets, Custom Fonts, and Module CSS (if any)

/**
 * Componente de rodapé simplificado que exibe apenas a assinatura de direitos autorais.
 */
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem var(--padding-x)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'var(--bg-primary)',
      }}
    >
      {/* Copyright Line */}
      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-muted)',
          textAlign: 'center',
        }}
      >
        Desenvolvido por{' '}
        <span style={{ color: 'var(--text-secondary)' }}>Moacir Neto</span>
        {' '}•{' '}{new Date().getFullYear()}
      </p>
    </footer>
  );
}

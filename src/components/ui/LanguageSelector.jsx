import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageSelector({ style, className, isFullWidth = false }) {
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'pt').startsWith('en')
    ? 'en'
    : 'pt';

  const handleSelectLanguage = (lang) => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang);
    }
  };

  const languages = [
    { code: 'pt', label: t('language.pt', 'PT') },
    { code: 'en', label: t('language.en', 'EN') },
  ];

  return (
    <div
      role="group"
      aria-label={t('language.ariaLabel', 'Selecionar idioma')}
      className={className}
      style={{
        display: isFullWidth ? 'flex' : 'inline-flex',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid var(--border)',
        borderRadius: '9999px',
        padding: '3px',
        width: isFullWidth ? '100%' : 'auto',
        ...style,
      }}
    >
      {languages.map((lang) => {
        const isActive = currentLang === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => handleSelectLanguage(lang.code)}
            aria-pressed={isActive}
            style={{
              flex: isFullWidth ? 1 : 'none',
              position: 'relative',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: isFullWidth ? '8px 12px' : '4px 10px',
              borderRadius: '9999px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: isFullWidth ? 'var(--text-sm)' : '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: isActive ? '#080808' : 'var(--text-secondary)',
              transition: 'color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none',
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            {isActive && (
              <motion.span
                layoutId="active-language-pill"
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '9999px',
                  background: 'var(--accent)',
                  zIndex: -1,
                }}
              />
            )}
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}

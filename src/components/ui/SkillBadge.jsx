export default function SkillBadge({ label }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-secondary)',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
        padding: '0.4rem 0.9rem',
        borderRadius: '4px',
        cursor: 'default',
        transition: 'border-color 0.25s ease, color 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.color = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--text-secondary)';
      }}
    >
      {label}
    </span>
  );
}

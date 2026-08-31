import { useState, useEffect } from 'react';
import { SiGithub } from 'react-icons/si';
import { TbGitCommit } from 'react-icons/tb';
import { ExternalLink, RefreshCw } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TechIcon from '../ui/TechIcon';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchRepoCommits(repoName) {
  try {
    // Tenta primeiro com autor moaaskt
    let res = await fetch(`https://api.github.com/repos/moaaskt/${repoName}/commits?author=moaaskt&per_page=1`);
    if (!res.ok) {
      // Fallback sem parâmetro de autor caso a rota retorne erro
      res = await fetch(`https://api.github.com/repos/moaaskt/${repoName}/commits?per_page=1`);
      if (!res.ok) return null;
    }

    const linkHeader = res.headers.get('Link');
    if (linkHeader) {
      const match = linkHeader.match(/page=(\d+)>;\s*rel="last"/);
      if (match && match[1]) {
        return parseInt(match[1], 10);
      }
    }

    const data = await res.json();
    if (Array.isArray(data)) {
      if (data.length === 0) {
        // Tenta sem autor se a busca filtrada retornar 0 commits
        const fallbackRes = await fetch(`https://api.github.com/repos/moaaskt/${repoName}/commits?per_page=1`);
        if (fallbackRes.ok) {
          const fallbackLink = fallbackRes.headers.get('Link');
          if (fallbackLink) {
            const fallbackMatch = fallbackLink.match(/page=(\d+)>;\s*rel="last"/);
            if (fallbackMatch && fallbackMatch[1]) {
              return parseInt(fallbackMatch[1], 10);
            }
          }
          const fallbackData = await fallbackRes.json();
          return Array.isArray(fallbackData) ? fallbackData.length : 0;
        }
      }
      return data.length;
    }
    return 0;
  } catch (err) {
    console.error(`Erro ao buscar commits para ${repoName}:`, err);
    return null;
  }
}

function GithubCard({ repo }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-secondary)',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 30px rgba(184,247,60,0.1)' : 'none',
        transition: 'all 0.25s ease',
        cursor: 'default',
      }}
    >
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* Title + GitHub Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            marginBottom: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', minWidth: 0 }}>
            <SiGithub size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1.15rem',
                color: '#f0f0f0',
                letterSpacing: '-0.02em',
                margin: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              title={repo.name}
            >
              {repo.name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.9rem',
            color: '#888',
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            margin: '0 0 1.25rem 0',
            flex: 1,
          }}
        >
          {repo.description || 'Sem descrição'}
        </p>

        {/* Footer */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: '1px solid #1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          {/* Language & Commits info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {repo.language && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <TechIcon techName={repo.language} />
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {repo.language}
                </span>
              </div>
            )}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--accent)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
              }}
              title="Total de commits registrados"
            >
              <TbGitCommit size={16} />
              <span>{repo.commitCount !== null ? `${repo.commitCount} commits` : '—'}</span>
            </div>
          </div>

          {/* Link to Repo */}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver repositório ${repo.name} no GitHub`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.85rem',
              color: hovered ? '#b8f73c' : '#888',
              transition: 'color 0.25s ease',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            Ver no GitHub
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

const HIDDEN_REPOS = ['korp_teste_moacirneto', 'korp-teste-moacirneto'];

export default function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadGithubData() {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch('https://api.github.com/users/moaaskt/repos?sort=updated&per_page=12');
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error('Formato inválido retornado pela API');
        }

        const formattedRepos = data
          .filter((r) => !HIDDEN_REPOS.includes(r.name.toLowerCase()))
          .slice(0, 6)
          .map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description,
            language: r.language,
            html_url: r.html_url,
            commitCount: null,
          }));

        if (isMounted) {
          setRepos(formattedRepos);
          setLoading(false);
        }

        // Busca commits sequencialmente com delay de 180ms para evitar rate limiting
        for (let i = 0; i < formattedRepos.length; i++) {
          if (!isMounted) break;
          const repo = formattedRepos[i];
          await delay(180);
          const count = await fetchRepoCommits(repo.name);
          if (isMounted) {
            setRepos((prev) =>
              prev.map((item) => (item.id === repo.id ? { ...item, commitCount: count } : item))
            );
          }
        }
      } catch (err) {
        console.error('Erro ao carregar repositórios do GitHub:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    }

    loadGithubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="github-projects"
      style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--padding-x)' }}>
        <SectionHeader number="05" title="Atividade no GitHub" />

        {loading ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4rem 0',
              color: 'var(--text-secondary)',
              gap: '0.75rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.9rem',
            }}
          >
            <RefreshCw size={20} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
            <span>Carregando repositórios recentes...</span>
          </div>
        ) : error ? (
          <div
            style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontFamily: 'DM Sans, sans-serif' }}>
              Não foi possível carregar os repositórios diretamente no momento.
            </p>
            <a
              href="https://github.com/moaaskt"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--accent)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.85rem',
                textDecoration: 'none',
              }}
            >
              <SiGithub size={18} />
              Ver perfil no GitHub
            </a>
          </div>
        ) : (
          <div
            className="github-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginTop: '3rem',
            }}
          >
            {repos.map((repo) => (
              <GithubCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 767px) {
          .github-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

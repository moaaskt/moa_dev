import { useState, useEffect } from 'react';
import { SiGithub } from 'react-icons/si';
import { TbGitCommit } from 'react-icons/tb';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../ui/SectionHeader';
import TechIcon from '../ui/TechIcon';
import { FALLBACK_REPOS } from '../../data/githubFallbackRepos';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CACHE_KEY = 'moa_github_repos_v2';
const CACHE_TTL = 60 * 60 * 1000; // 1 hora de cache no localStorage
const HIDDEN_REPOS = ['korp_teste_moacirneto', 'korp-teste-moacirneto'];

function getGithubHeaders() {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
  };
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

async function fetchRepoCommits(repoName) {
  try {
    const headers = getGithubHeaders();
    let res = await fetch(`https://api.github.com/repos/moaaskt/${repoName}/commits?author=moaaskt&per_page=1`, { headers });
    if (!res.ok) {
      res = await fetch(`https://api.github.com/repos/moaaskt/${repoName}/commits?per_page=1`, { headers });
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
        const fallbackRes = await fetch(`https://api.github.com/repos/moaaskt/${repoName}/commits?per_page=1`, { headers });
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
  } catch {
    return null;
  }
}

function GithubCard({ repo, t, currentLang }) {
  const [hovered, setHovered] = useState(false);

  const description =
    typeof repo.description === 'object' && repo.description !== null
      ? repo.description[currentLang] || repo.description.pt || repo.description.en || ''
      : repo.description || t('githubProjects.noDescription', 'Sem descrição');

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
          {description}
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
              title={t('githubProjects.commitsTitle', 'Total de commits registrados')}
            >
              <TbGitCommit size={16} />
              <span>
                {repo.commitCount !== null && repo.commitCount !== undefined
                  ? t('githubProjects.commitsCount', { count: repo.commitCount, defaultValue: `${repo.commitCount} commits` })
                  : '—'}
              </span>
            </div>
          </div>

          {/* Link to Repo */}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('githubProjects.ariaViewRepo', { name: repo.name, defaultValue: `Ver repositório ${repo.name} no GitHub` })}
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
            {t('githubProjects.viewOnGithub', 'Ver no GitHub')}
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function GithubProjects() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'pt').startsWith('en')
    ? 'en'
    : 'pt';

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadGithubData() {
      // 1. Tentar ler do cache local
      let cached = null;
      try {
        const cachedRaw = localStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          cached = JSON.parse(cachedRaw);
        }
      } catch {
        cached = null;
      }

      const isCacheValid =
        cached &&
        Array.isArray(cached.data) &&
        cached.data.length > 0 &&
        Date.now() - cached.timestamp < CACHE_TTL;

      if (isCacheValid) {
        if (isMounted) {
          setRepos(cached.data);
          setLoading(false);
          setError(false);
        }
        return;
      }

      // 2. Se não houver cache válido, buscar na API do GitHub
      try {
        setLoading(true);
        setError(false);

        const res = await fetch('https://api.github.com/users/moaaskt/repos?sort=updated&per_page=12', {
          headers: getGithubHeaders(),
        });

        // Se a API bater limite (403 Rate Limit) ou outro erro
        if (!res.ok) {
          console.warn(`GitHub API indisponível (HTTP ${res.status}). Carregando repositórios salvos/fallback.`);
          const fallbackData =
            cached && Array.isArray(cached.data) && cached.data.length > 0
              ? cached.data
              : FALLBACK_REPOS;

          if (isMounted) {
            setRepos(fallbackData);
            setLoading(false);
            setError(false);
          }
          return;
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

        // Buscar commits com delay seguro
        const updatedRepos = [...formattedRepos];
        for (let i = 0; i < updatedRepos.length; i++) {
          if (!isMounted) break;
          const repo = updatedRepos[i];
          await delay(200);
          const count = await fetchRepoCommits(repo.name);
          if (count !== null) {
            updatedRepos[i] = { ...repo, commitCount: count };
            if (isMounted) {
              setRepos([...updatedRepos]);
            }
          }
        }

        // Salvar dados atualizados no cache
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              timestamp: Date.now(),
              data: updatedRepos,
            })
          );
        } catch {
          // Ignora erro de cota de localStorage
        }
      } catch (err) {
        console.warn('Erro ao carregar repositórios do GitHub. Utilizando dados de fallback:', err.message);
        const fallbackData =
          cached && Array.isArray(cached.data) && cached.data.length > 0
            ? cached.data
            : FALLBACK_REPOS;

        if (isMounted) {
          setRepos(fallbackData);
          setLoading(false);
          setError(false);
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
        <SectionHeader
          number={t('githubProjects.sectionNumber', '05')}
          title={t('githubProjects.sectionTitle', 'Atividade no GitHub')}
        />

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
            <span>{t('githubProjects.loading', 'Carregando repositórios recentes...')}</span>
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
              {t('githubProjects.errorNotice', 'Não foi possível carregar os repositórios diretamente no momento.')}
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
              {t('githubProjects.viewProfile', 'Ver perfil no GitHub')}
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
              <GithubCard key={repo.id} repo={repo} t={t} currentLang={currentLang} />
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

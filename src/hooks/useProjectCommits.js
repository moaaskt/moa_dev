import { useState, useEffect, useCallback } from 'react';
import { parseGithubUrl, sanitizeCommit } from '../utils/githubUtils';

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hora de cache

/**
 * Retorna os headers padrão para requisições na API do GitHub
 */
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

/**
 * Hook para buscar commits de um projeto com cache no localStorage
 *
 * @param {Object} project Objeto de projeto com links e flag private
 * @param {number} maxCommits Quantidade máxima de commits (default: 4)
 * @returns {{
 *   commits: Array,
 *   loading: boolean,
 *   error: string|null,
 *   isPrivate: boolean,
 *   repoInfo: { owner: string, repo: string }|null,
 *   refetch: Function
 * }}
 */
export function useProjectCommits(project, maxCommits = 4) {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isPrivate = Boolean(project?.private);
  const githubUrl = project?.links?.github;
  const repoInfo = parseGithubUrl(githubUrl);

  const fetchCommits = useCallback(async () => {
    // Caso 1: Projeto privado ou sem repositório GitHub
    if (isPrivate || !repoInfo) {
      setLoading(false);
      setCommits([]);
      setError(null);
      return;
    }

    const { owner, repo } = repoInfo;
    const cacheKey = `moa_commits_${owner}_${repo}`;

    // Caso 2: Verificar cache existente no localStorage
    try {
      const cachedRaw = localStorage.getItem(cacheKey);
      if (cachedRaw) {
        const cachedData = JSON.parse(cachedRaw);
        const age = Date.now() - (cachedData.timestamp || 0);

        if (age < CACHE_TTL_MS && Array.isArray(cachedData.commits)) {
          setCommits(cachedData.commits.slice(0, maxCommits));
          setLoading(false);
          return;
        }
      }
    } catch {
      // Ignora falhas de parse de cache
    }

    // Caso 3: Buscar da API do GitHub
    setLoading(true);
    setError(null);

    try {
      const headers = getGithubHeaders();
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${maxCommits}`;

      const res = await fetch(apiUrl, { headers });

      if (res.status === 404) {
        // Repositório privado ou inexistente
        setError('not_found');
        setLoading(false);
        return;
      }

      if (res.status === 403 || res.status === 429) {
        // Rate limit atingido - tenta recuperar cache antigo caso exista
        try {
          const cachedRaw = localStorage.getItem(cacheKey);
          if (cachedRaw) {
            const cachedData = JSON.parse(cachedRaw);
            if (Array.isArray(cachedData.commits)) {
              setCommits(cachedData.commits.slice(0, maxCommits));
              setLoading(false);
              return;
            }
          }
        } catch {
          // ignora
        }
        setError('rate_limit');
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError('fetch_failed');
        setLoading(false);
        return;
      }

      const data = await res.json();
      if (Array.isArray(data)) {
        const sanitized = data.map(sanitizeCommit).filter(Boolean);
        setCommits(sanitized.slice(0, maxCommits));

        // Salvar no localStorage
        try {
          localStorage.setItem(
            cacheKey,
            JSON.stringify({
              timestamp: Date.now(),
              commits: sanitized,
            })
          );
        } catch {
          // localStorage cheio ou desabilitado
        }
      } else {
        setCommits([]);
      }
    } catch (err) {
      setError(err.message || 'network_error');
    } finally {
      setLoading(false);
    }
  }, [isPrivate, repoInfo?.owner, repoInfo?.repo, maxCommits]);

  useEffect(() => {
    fetchCommits();
  }, [fetchCommits]);

  return {
    commits,
    loading,
    error,
    isPrivate,
    repoInfo,
    refetch: fetchCommits,
  };
}


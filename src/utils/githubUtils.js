/**
 * Utilitários para extração e manipulação de metadados do GitHub
 */

/**
 * Extrai { owner, repo } a partir de uma URL do GitHub
 * Suporta formatos:
 * - https://github.com/owner/repo
 * - https://github.com/owner/repo.git
 * - https://github.com/owner/repo/
 *
 * @param {string} url
 * @returns {{ owner: string, repo: string } | null}
 */
export function parseGithubUrl(url) {
  if (!url || typeof url !== 'string') return null;

  try {
    const trimmed = url.trim().replace(/\.git\/?$/, '').replace(/\/+$/, '');
    const urlObj = new URL(trimmed);

    if (!urlObj.hostname.includes('github.com')) {
      return null;
    }

    const segments = urlObj.pathname.split('/').filter(Boolean);
    if (segments.length >= 2) {
      return {
        owner: segments[0],
        repo: segments[1],
      };
    }

    return null;
  } catch {
    // Fallback com regex caso URL não seja absoluta
    const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (match) {
      return {
        owner: match[1],
        repo: match[2].replace(/\.git$/, '').replace(/\/$/, ''),
      };
    }
    return null;
  }
}

/**
 * Sanitiza um commit bruto retornado pela API do GitHub
 *
 * @param {Object} rawCommit
 * @returns {Object}
 */
export function sanitizeCommit(rawCommit) {
  if (!rawCommit) return null;

  const sha = rawCommit.sha || '';
  const fullMessage = rawCommit.commit?.message || 'Update';
  const firstLineMessage = fullMessage.split('\n')[0].trim();

  const authorName =
    rawCommit.author?.login ||
    rawCommit.commit?.author?.name ||
    'moaaskt';

  const authorAvatar = rawCommit.author?.avatar_url || null;
  const date = rawCommit.commit?.author?.date || new Date().toISOString();
  const htmlUrl = rawCommit.html_url || `https://github.com/commits/${sha}`;

  return {
    sha: sha.substring(0, 7),
    fullSha: sha,
    message: firstLineMessage,
    author: authorName,
    avatar: authorAvatar,
    date,
    htmlUrl,
  };
}


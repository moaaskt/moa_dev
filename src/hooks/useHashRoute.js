import { useState, useEffect, useCallback } from 'react';

/**
 * Normaliza e parseia a rota atual a partir do window.location.hash.
 * 
 * Rotas suportadas:
 * - '' | '#' | '#/'            -> { route: 'home', params: {} }
 * - '#/projetos'               -> { route: 'projects_list', params: {} }
 * - '#/projeto/:id'            -> { route: 'project_detail', params: { id } }
 * - Outros padrões não mapeados -> { route: 'not_found', params: {} }
 */
function parseHash(hashString) {
  const cleanHash = (hashString || window.location.hash || '').replace(/^#\/?/, '').trim();

  if (!cleanHash || cleanHash === '') {
    return { route: 'home', params: {} };
  }

  const segments = cleanHash.split('/').filter(Boolean);

  if (segments[0] === 'projetos' && segments.length === 1) {
    return { route: 'projects_list', params: {} };
  }

  if (segments[0] === 'projeto' && segments.length === 2) {
    return { route: 'project_detail', params: { id: decodeURIComponent(segments[1]) } };
  }

  // Se for uma âncora da home (ex: #about, #skills, #contact)
  if (['about', 'projects', 'skills', 'experience', 'github-projects', 'contact'].includes(segments[0])) {
    return { route: 'home', params: { anchor: segments[0] } };
  }

  return { route: 'not_found', params: { path: cleanHash } };
}

export function useHashRoute() {
  const [currentRoute, setCurrentRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash(window.location.hash);
      setCurrentRoute(parsed);

      // Scroll para o topo suave caso mude de página principal/sub-página
      if (parsed.route === 'projects_list' || parsed.route === 'project_detail') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (parsed.route === 'home' && !parsed.params.anchor) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((target) => {
    const formatted = target.startsWith('#') ? target : `#${target.startsWith('/') ? target : `/${target}`}`;
    window.location.hash = formatted;
  }, []);

  return {
    route: currentRoute.route,
    params: currentRoute.params,
    navigate,
    isHome: currentRoute.route === 'home',
    isProjectsList: currentRoute.route === 'projects_list',
    isProjectDetail: currentRoute.route === 'project_detail',
  };
}

export default useHashRoute;

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubRepoCard } from "@/components/sub/github-repo-card";
import { FaGithub as FaGithubIcon } from "react-icons/fa";


interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  fork: boolean;
  updated_at: string;
  commits_count?: number | null;
}

const GITHUB_USERNAME = "moaaskt";
const MAX_REPOS = 6;

export const GithubActivity = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchReposAndCommits = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 1. Buscar repositórios públicos do usuário
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
        );

        if (!response.ok) {
          if (response.status === 403) {
            throw new Error("Limite de requisições excedido na API do GitHub. Tente mais tarde.");
          }
          throw new Error(`Erro na API do GitHub: Status ${response.status}`);
        }

        const data: Repository[] = await response.json();
        
        // Filtrar forks e pegar os mais recentes
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, MAX_REPOS);

        // Definir inicialmente sem commits para não atrasar o render visual
        setRepos(filtered.map(r => ({ ...r, commits_count: null })));
        setLoading(false);

        // 2. Buscar commits em background (de forma otimizada para evitar rate limit)
        // Usamos uma estratégia lazy de buscar individualmente e atualizar o estado progressivamente
        filtered.forEach(async (repo, index) => {
          try {
            // Requisição com per_page=1 permite extrair o header Link que contém a quantidade total via paginação
            const commitsRes = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=1`,
              { method: "GET" }
            );

            if (commitsRes.ok) {
              let totalCommits = 1;
              const linkHeader = commitsRes.headers.get("Link");
              if (linkHeader) {
                // Link header exemplo: <...page=2>; rel="next", <...page=42>; rel="last"
                const match = linkHeader.match(/page=(\d+)>;\s*rel="last"/);
                if (match && match[1]) {
                  totalCommits = parseInt(match[1], 10);
                } else {
                  // Se não houver "last", mas houver "next", tentamos contar os itens retornados ou inferir
                  const list = await commitsRes.json();
                  totalCommits = list.length;
                }
              } else {
                const list = await commitsRes.json();
                totalCommits = Array.isArray(list) ? list.length : 0;
              }

              setRepos((prev) =>
                prev.map((r) =>
                  r.id === repo.id ? { ...r, commits_count: totalCommits } : r
                )
              );
            }
          } catch (e) {
            console.error(`Erro ao buscar commits de ${repo.name}:`, e);
          }
        });

      } catch (err: any) {
        setError(err.message || "Erro de rede ao carregar repositórios.");
        setLoading(false);
      }
    };

    fetchReposAndCommits();
  }, []);

  return (
    <section
      id="github"
      className="flex flex-col items-center justify-center py-20 px-5 md:px-20 z-[20] w-full"
    >
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600 pb-12">
        GitHub Activity
      </h2>

      {loading && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-[220px] w-full rounded-xl border border-[#064e3b]/30 bg-[#000f0a]/50 p-6 animate-pulse flex flex-col justify-between"
            >
              <div>
                <div className="h-6 w-2/3 bg-emerald-500/10 rounded-md mb-4" />
                <div className="h-4 w-full bg-emerald-500/5 rounded-md mb-2" />
                <div className="h-4 w-5/6 bg-emerald-500/5 rounded-md mb-2" />
              </div>
              <div className="h-8 w-full bg-emerald-500/10 rounded-md mt-auto" />
            </div>
          ))}
        </div>
      )}

      {!loading && error && repos.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl border border-red-900/30 bg-red-950/10 backdrop-blur-md max-w-lg mx-auto">
          <p className="text-gray-300 mb-6 text-sm md:text-base">{error}</p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600/20 border border-emerald-500 text-emerald-400 font-semibold hover:bg-emerald-600/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 text-sm"
          >
            <FaGithubIcon size={18} />
            Ver GitHub
          </a>
        </div>
      )}

      {!loading && !error && repos.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl border border-[#064e3b] bg-[#000f0a] backdrop-blur-md max-w-lg mx-auto">
          <p className="text-gray-300 mb-6 text-sm">Nenhum repositório público encontrado.</p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600/20 border border-emerald-500 text-emerald-400 font-semibold hover:bg-emerald-600/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 text-sm"
          >
            <FaGithubIcon size={18} />
            Ver GitHub
          </a>
        </div>
      )}

      {!loading && repos.length > 0 && (
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 relative py-10"
        >
          {repos.map((repo, idx) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer noopener"
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-emerald-950/20 block rounded-2xl border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.1)]"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.1 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="rounded-xl h-full w-full overflow-hidden border border-[#064e3b] bg-[#000f0a] backdrop-blur-md group-hover:border-emerald-500/30 relative z-20 transition-all duration-300">
                <GithubRepoCard
                  name={repo.name}
                  description={repo.description}
                  language={repo.language}
                  commits={repo.commits_count ?? null}
                  updatedAt={repo.updated_at}
                  repoLink={repo.html_url}
                />
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

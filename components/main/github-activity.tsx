"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GithubRepoCard } from "@/components/sub/github-repo-card";
import { FaGithub } from "react-icons/fa";
import { Variants } from "framer-motion";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
}

const GITHUB_USERNAME = "moaaskt";
const MAX_REPOS = 6;

export const GithubActivity = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
        );

        if (!response.ok) {
          if (response.status === 403) {
            throw new Error("Limite de requisições excedido. Tente novamente mais tarde.");
          }
          throw new Error(`Erro na API do GitHub: Status ${response.status}`);
        }

        const data: Repository[] = await response.json();
        
        // Filtrar forks e ordenar por data de atualização descrescente
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, MAX_REPOS);

        setRepos(filtered);
      } catch (err: any) {
        setError(err.message || "Erro de rede ao carregar repositórios.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Animações Framer Motion com tipagem explícita
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };


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

      {!loading && error && (
        <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl border border-red-900/30 bg-red-950/10 backdrop-blur-md max-w-lg mx-auto">
          <p className="text-gray-300 mb-6 text-sm md:text-base">{error}</p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600/20 border border-emerald-500 text-emerald-400 font-semibold hover:bg-emerald-600/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 text-sm"
          >
            <FaGithub size={18} />
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
            <FaGithub size={18} />
            Ver GitHub
          </a>
        </div>
      )}

      {!loading && !error && repos.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10"
        >
          {repos.map((repo) => (
            <motion.div key={repo.id} variants={itemVariants} className="h-full">
              <GithubRepoCard
                name={repo.name}
                description={repo.description}
                language={repo.language}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
                updatedAt={repo.updated_at}
                repoLink={repo.html_url}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { GoGitCommit } from "react-icons/go";

interface GithubRepoCardProps {
  name: string;
  description: string | null;
  language: string | null;
  commits: number | null;
  updatedAt: string;
  repoLink: string;
}

// Mapeamento de linguagem do GitHub para o asset correspondente na pasta public/skills/
const LANGUAGE_ICON_MAP: Record<string, string> = {
  typescript: "ts.png",
  javascript: "js.png",
  python: "python.svg",
  php: "php.svg",
  go: "go.png",
  html: "html.png",
  css: "css.png",
  dockerfile: "docker.png",
  shell: "linux.svg",
};

export const GithubRepoCard = ({
  name,
  description,
  language,
  commits,
  updatedAt,
  repoLink,
}: GithubRepoCardProps) => {
  const formattedDate = new Date(updatedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const langLower = language?.toLowerCase() || "";
  const iconSrc = LANGUAGE_ICON_MAP[langLower];

  return (
    <div className="flex flex-col justify-between h-full w-full p-6 text-left">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2 text-white group-hover:text-emerald-400 transition-colors duration-300">
            <FaGithub size={20} className="flex-shrink-0" />
            <h3 className="font-bold text-lg leading-tight line-clamp-1">
              {name}
            </h3>
          </div>
          <span className="text-[10px] font-semibold px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 whitespace-nowrap">
            Público
          </span>
        </div>

        <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
          {description || "Sem descrição disponível para este repositório."}
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Linguagem Principal com ícone real */}
          {language && (
            <div className="flex items-center gap-2">
              {iconSrc ? (
                <Image
                  src={`/skills/${iconSrc}`}
                  alt={language}
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                  unoptimized={iconSrc.endsWith(".svg")}
                />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              )}
              <span className="text-xs text-gray-300 font-medium">{language}</span>
            </div>
          )}

          {/* Quantidade de Commits real */}
          {commits !== null && (
            <div className="flex items-center gap-1.5 text-xs text-gray-300" title="Total de commits">
              <GoGitCommit className="text-emerald-500" size={16} />
              <span>{commits} {commits === 1 ? "commit" : "commits"}</span>
            </div>
          )}
        </div>

        <div className="border-t border-[#064e3b]/50 pt-3 flex items-center justify-between text-[11px] text-gray-500">
          <span>Atualizado em: {formattedDate}</span>
          <span className="text-emerald-500/80 group-hover:text-emerald-400 font-semibold transition-colors duration-300 flex items-center gap-1">
            Ver código &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};

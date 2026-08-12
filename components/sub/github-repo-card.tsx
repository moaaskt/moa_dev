"use client";

import { FaStar, FaCodeBranch, FaGithub } from "react-icons/fa";

interface GithubRepoCardProps {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  repoLink: string;
}

export const GithubRepoCard = ({
  name,
  description,
  language,
  stars,
  forks,
  updatedAt,
  repoLink,
}: GithubRepoCardProps) => {
  const formattedDate = new Date(updatedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <a
      href={repoLink}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex flex-col justify-between h-full w-full overflow-hidden rounded-xl border border-[#064e3b] bg-[#000f0a] backdrop-blur-md p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-1"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2 text-white group-hover:text-emerald-400 transition-colors">
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
        {/* Info row */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
          {language && (
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <span className="text-gray-300">{language}</span>
            </div>
          )}

          <div className="flex items-center gap-1" title="Estrelas">
            <FaStar className="text-emerald-500/60" size={13} />
            <span className="text-gray-300">{stars}</span>
          </div>

          <div className="flex items-center gap-1" title="Forks">
            <FaCodeBranch className="text-emerald-500/60" size={13} />
            <span className="text-gray-300">{forks}</span>
          </div>
        </div>

        <div className="border-t border-[#064e3b]/50 pt-3 flex items-center justify-between text-[11px] text-gray-500">
          <span>Atualizado em: {formattedDate}</span>
          <span className="text-emerald-500/80 group-hover:text-emerald-400 font-semibold transition-colors flex items-center gap-1">
            Ver código &rarr;
          </span>
        </div>
      </div>
    </a>
  );
};

import React from 'react';
import { useTranslation } from 'react-i18next';
import { GitBranch, GitCommit, ExternalLink, ShieldCheck, Lock, AlertCircle, RefreshCw } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import CiStatusBadge from './CiStatusBadge';
import { useProjectCommits } from '../../hooks/useProjectCommits';
import { formatRelativeTime } from '../../utils/dateUtils';

/**
 * ProjectGitActivity
 * Painel lateral sofisticado no estilo Shadcn/ui para exibir status de CI/CD e
 * histórico recente de commits na página de detalhes de cada projeto.
 *
 * @param {{ project: Object }} props
 */
export default function ProjectGitActivity({ project }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'pt';

  const { commits, loading, error, isPrivate, repoInfo, refetch } = useProjectCommits(project, 4);

  // Status visual de CI
  let ciStatus = 'passing';
  let ciLabel = t('projectDetail.gitActivity.statusPassing', 'Build Passing');

  if (isPrivate) {
    ciStatus = 'protected';
    ciLabel = t('projectDetail.gitActivity.statusProtected', 'Repositório Protegido');
  } else if (error === 'rate_limit') {
    ciStatus = 'running';
    ciLabel = t('projectDetail.gitActivity.statusRunning', 'Workflow Ativo');
  } else if (error && commits.length === 0) {
    ciStatus = 'failed';
    ciLabel = t('projectDetail.gitActivity.statusFailed', 'Build Offline');
  }

  return (
    <Card className="border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden shadow-md">
      <CardHeader className="p-3 pb-2.5 flex flex-row items-center justify-between gap-2 space-y-0 border-b border-[var(--border)]/40 bg-[var(--bg-primary)]/20">
        <div className="flex items-center gap-1.5 text-[var(--accent)] font-mono text-[11px] font-semibold uppercase tracking-wider min-w-0">
          <GitBranch size={13} className="shrink-0" />
          <span className="truncate">{t('projectDetail.gitActivity.title', 'Atividade Git')}</span>
        </div>
        <CiStatusBadge status={ciStatus} label={ciLabel} />
      </CardHeader>

      <CardContent className="p-3.5 pt-3">
        {/* Caso 1: Projeto com código privado / proprietário */}
        {isPrivate ? (
          <div className="flex flex-col gap-2 rounded-md border border-zinc-800 bg-zinc-900/70 p-3 text-left shadow-sm">
            <div className="flex items-center gap-2 text-zinc-200 font-mono text-xs font-semibold">
              <Lock size={13} className="shrink-0 text-zinc-400" />
              <span>{t('projectDetail.gitActivity.protectedBadge', 'Código Proprietário')}</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-sans leading-relaxed m-0">
              {t(
                'projectDetail.gitActivity.protectedDesc',
                'Código-fonte corporativo sob conformidade técnica, NDA e controle de acesso restrito.'
              )}
            </p>
          </div>
        ) : loading ? (
          /* Caso 2: Carregando commits */
          <div className="flex flex-col gap-2.5 py-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-2.5 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-[var(--border)] mt-1.5 shrink-0" />
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="h-3.5 bg-[var(--border)]/60 rounded w-4/5" />
                  <div className="h-2.5 bg-[var(--border)]/40 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : commits && commits.length > 0 ? (
          /* Caso 3: Lista de commits reais */
          <div className="flex flex-col">
            <div className="relative pl-3.5 border-l border-[var(--border)]/70 flex flex-col gap-3 py-0.5">
              {commits.map((commit) => (
                <div key={commit.fullSha || commit.sha} className="group relative flex flex-col gap-1">
                  {/* Ponto indicador da timeline */}
                  <span className="absolute -left-[18px] top-1 h-2 w-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-colors" />

                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={commit.htmlUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-zinc-300 bg-zinc-900/90 hover:bg-zinc-800/90 hover:text-[var(--accent)] hover:border-[var(--accent)] px-2 py-0.5 rounded border border-zinc-800 transition-all duration-150 select-none shadow-sm"
                      title={t('projectDetail.gitActivity.viewCommit', 'Ver commit no GitHub')}
                    >
                      <GitCommit size={11} className="shrink-0 text-zinc-400" />
                      <span>{commit.sha}</span>
                      <ExternalLink size={9} className="opacity-60 shrink-0" />
                    </a>
                    <span className="text-[11px] font-sans text-[var(--text-secondary)]">
                      {formatRelativeTime(commit.date, currentLang)}
                    </span>
                  </div>

                  <p
                    className="text-[12px] font-sans text-[#f0f0f0] group-hover:text-[var(--accent)] transition-colors line-clamp-2 leading-snug m-0 text-left"
                    title={commit.message}
                  >
                    {commit.message}
                  </p>
                </div>
              ))}
            </div>

            {/* Link para repositório completo */}
            {project?.links?.github && (
              <div className="mt-3 pt-2.5 border-t border-[var(--border)]/40 flex items-center justify-between">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <span>{t('projectDetail.gitActivity.viewAllCommits', 'Ver histórico no GitHub')}</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            )}
          </div>
        ) : (
          /* Caso 4: Sem commits ou erro */
          <div className="flex flex-col items-center justify-center py-2 text-center text-[var(--text-secondary)]">
            <AlertCircle size={16} className="mb-1 text-neutral-400" />
            <p className="text-[12px] m-0">
              {error === 'rate_limit'
                ? t('projectDetail.gitActivity.rateLimit', 'Limite de consultas da API atingido. Exibindo dados locais.')
                : t('projectDetail.gitActivity.noCommits', 'Nenhum commit recente encontrado.')}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}


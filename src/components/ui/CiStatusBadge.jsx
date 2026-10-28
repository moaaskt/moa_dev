import * as React from 'react';
import { cn } from '../../utils/cn';

/**
 * CiStatusBadge
 * Indicador visual sóbrio no padrão sólido da Shadcn UI.
 * Suporta estados: passing, running, protected, failed
 */
export default function CiStatusBadge({
  status = 'passing',
  label = 'Build Passing',
  className,
}) {
  const isPassing = status === 'passing';
  const isRunning = status === 'running';
  const isProtected = status === 'protected';
  const isFailed = status === 'failed';

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-sans font-medium tracking-normal transition-colors select-none border border-zinc-800/80 bg-secondary text-secondary-foreground shadow-sm',
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {isRunning && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-400" />
        )}
        <span
          className={cn(
            'relative inline-flex rounded-full h-2 w-2',
            isPassing && 'bg-emerald-500',
            isRunning && 'bg-amber-400',
            isProtected && 'bg-zinc-400',
            isFailed && 'bg-rose-500'
          )}
        />
      </span>
      <span className="text-zinc-200 font-medium">{label}</span>
    </div>
  );
}

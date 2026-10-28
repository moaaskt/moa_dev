import * as React from 'react';
import { cn } from '../../utils/cn';

/**
 * CiStatusBadge
 * Indicador visual moderno de status de pipeline/build com animação pulsante.
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
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide transition-all select-none border',
        isPassing &&
          'bg-emerald-950/40 text-emerald-400 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]',
        isRunning &&
          'bg-amber-950/40 text-amber-300 border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.15)]',
        isProtected &&
          'bg-blue-950/40 text-blue-300 border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.15)]',
        isFailed &&
          'bg-rose-950/40 text-rose-400 border-rose-500/30 shadow-[0_0_12px_rgba(244,63,94,0.15)]',
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {(isPassing || isRunning) && (
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              isPassing && 'bg-emerald-400',
              isRunning && 'bg-amber-400'
            )}
          />
        )}
        <span
          className={cn(
            'relative inline-flex rounded-full h-2 w-2',
            isPassing && 'bg-emerald-400',
            isRunning && 'bg-amber-400',
            isProtected && 'bg-blue-400',
            isFailed && 'bg-rose-400'
          )}
        />
      </span>
      <span>{label}</span>
    </div>
  );
}


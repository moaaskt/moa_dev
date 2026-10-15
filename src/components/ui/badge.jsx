import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow,border-color,background-color] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        // Custom colors e design tokens do moa_dev
        accent:
          'border-[var(--border-accent)] bg-[rgba(184,247,60,0.08)] text-[var(--accent)] font-mono tracking-wider uppercase [a&]:hover:bg-[rgba(184,247,60,0.18)]',
        warning:
          'border-[rgba(234,179,8,0.3)] bg-[rgba(234,179,8,0.08)] text-amber-400 font-mono tracking-wider uppercase [a&]:hover:bg-[rgba(234,179,8,0.18)]',
        muted:
          'border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] font-mono [a&]:hover:border-[var(--border-accent)] [a&]:hover:text-[var(--accent)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? 'span' : (props.href ? 'a' : 'span');

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants };
export default Badge;

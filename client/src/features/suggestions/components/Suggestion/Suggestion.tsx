import * as React from 'react';
import { cx } from 'class-variance-authority';
import { MoveRight } from 'lucide-react';
import { Typography } from '@/components/ui';

type SuggestionProps = React.ComponentPropsWithRef<'button'> & {
  incorrect: string;
  correct: string;
};

const Suggestion = React.forwardRef<HTMLButtonElement, SuggestionProps>(
  ({ incorrect, correct, type = 'button', className, ...props }, ref) => (
    <button
      type={type}
      className={cx(
        'space-y-2 rounded-xl border border-primary bg-surface p-4 ring-offset-bg-surface transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
        className,
      )}
      ref={ref}
      {...props}
    >
      <Typography variant="body-xs" asChild>
        <div className="text-left text-muted">Kelime</div>
      </Typography>
      <Typography variant="body-md" asChild>
        <div className="flex items-center gap-3">
          <span className="line-through">{incorrect}</span>
          <MoveRight size={20} strokeWidth={1.5} className="icon-secondary" />
          <span className="rounded-lg bg-fill-brand px-2 py-1 text-brand-on-bg-fill">
            {correct}
          </span>
        </div>
      </Typography>
    </button>
  ),
);

Suggestion.displayName = 'Suggestion';

export default Suggestion;

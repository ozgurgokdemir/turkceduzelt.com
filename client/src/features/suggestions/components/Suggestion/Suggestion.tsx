import * as React from 'react';
import { cx } from 'class-variance-authority';
import { MoveRight } from 'lucide-react';
import { Typography } from '@/components/ui';

type SuggestionProps = React.ComponentPropsWithRef<'button'> & {
  variant: 'word' | 'sentence';
  incorrect: string;
  correct: string;
  showTag?: boolean;
};

const Suggestion = React.forwardRef<HTMLButtonElement, SuggestionProps>(
  (
    {
      variant,
      incorrect,
      correct,
      showTag = true,
      type = 'button',
      className,
      ...props
    },
    ref,
  ) => (
    <button
      type={type}
      className={cx(
        'rounded-xl border border-primary bg-surface p-4 text-left ring-offset-bg-surface transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
        variant === 'word' ? 'space-y-2' : 'space-y-3',
        className,
      )}
      ref={ref}
      {...props}
    >
      {showTag && (
        <Typography variant="body-xs" asChild>
          <div className="text-muted">
            {variant === 'word' ? 'Kelime' : 'Cümle'}
          </div>
        </Typography>
      )}
      {variant === 'word' ? (
        <Typography variant="body-md" asChild>
          <div className="flex items-center gap-3">
            <span className="line-through">{incorrect}</span>
            <MoveRight size={20} strokeWidth={1.5} className="icon-secondary" />
            <span className="rounded-lg bg-fill-brand px-2 py-1 text-brand-on-bg-fill">
              {correct}
            </span>
          </div>
        </Typography>
      ) : (
        <Typography variant={showTag ? 'body-md' : 'body-sm'} asChild>
          <div className="space-y-2">
            {!showTag && (
              <div className="text-muted line-through">{incorrect}</div>
            )}
            <div className="text-primary">{correct}</div>
          </div>
        </Typography>
      )}
    </button>
  ),
);

Suggestion.displayName = 'Suggestion';

export default Suggestion;

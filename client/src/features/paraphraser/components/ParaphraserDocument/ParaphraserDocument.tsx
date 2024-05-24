import * as React from 'react';
import { cx } from 'class-variance-authority';
import { WordingOptions } from '@/features/paraphraser';

type DocumentProps = React.ComponentPropsWithoutRef<'div'>;

function Document({ className, children, ...props }: DocumentProps) {
  return (
    <div
      className={cx(
        'flex flex-col overflow-hidden rounded-xl border border-primary bg-surface',
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-end gap-1 border-b border-primary px-1">
        <WordingOptions className="h-11" />
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

export default Document;

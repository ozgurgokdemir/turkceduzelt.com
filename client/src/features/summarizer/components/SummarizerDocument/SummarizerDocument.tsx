import * as React from 'react';
import { cx } from 'class-variance-authority';
import { Typography } from '@/components/ui';

type DocumentProps = React.ComponentPropsWithoutRef<'div'>;

function Document({ className, ...props }: DocumentProps) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-xl border border-primary bg-surface',
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-end gap-1 border-b border-primary p-1">
        <div className="h-9"></div>
      </div>
      <Typography variant="body-md" className="p-6"></Typography>
    </div>
  );
}

export default Document;

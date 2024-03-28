import * as React from 'react';
import { cx } from 'class-variance-authority';

type ButtonGroupProps = React.ComponentPropsWithRef<'div'>;

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, children, ...props }, ref) => (
    <div
      className={cx(
        'flex items-center gap-1 rounded-xl border border-primary p-1',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  ),
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;

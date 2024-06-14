import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cx } from 'class-variance-authority';

const Link = React.forwardRef<
  React.ElementRef<typeof RouterLink>,
  React.ComponentPropsWithRef<typeof RouterLink>
>(({ className, children, ...props }, ref) => (
  <RouterLink
    ref={ref}
    className={cx(
      'text-brand hover:text-brand-hover hover:underline',
      className,
    )}
    {...props}
  >
    {children}
  </RouterLink>
));

Link.displayName = 'Link';

export default Link;

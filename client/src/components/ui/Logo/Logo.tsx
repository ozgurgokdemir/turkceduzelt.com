import * as React from 'react';
import { Link } from 'react-router-dom';
import { cx } from 'class-variance-authority';

const Logo = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, children, ...props }, ref) => (
  <Link
    ref={ref}
    className={cx(
      'inline-flex items-center gap-3 whitespace-nowrap rounded-lg ring-offset-bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  >
    {children}
  </Link>
));

Logo.displayName = 'Logo';

export default Logo;

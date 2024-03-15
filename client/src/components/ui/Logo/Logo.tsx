import * as React from 'react';
import { cx } from 'class-variance-authority';

type LogoProps = React.ComponentPropsWithRef<'a'>;

const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ href = '/', className, ...props }, ref) => (
    <a
      href={href}
      className={cx(
        'inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg font-sans text-2xl leading-8 text-primary ring-offset-bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="font-extralight">türkçe</span>
      <span className="font-medium">düzelt</span>
    </a>
  ),
);

Logo.displayName = 'Logo';

export default Logo;

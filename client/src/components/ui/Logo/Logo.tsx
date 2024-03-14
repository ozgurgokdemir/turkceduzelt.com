import * as React from 'react';
import { cx } from 'class-variance-authority';

type LogoProps = React.ComponentPropsWithRef<'a'>;

const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ href = '/', className, ...props }, ref) => (
    <a
      href={href}
      className={cx('font-sans text-2xl leading-8 text-primary', className)}
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

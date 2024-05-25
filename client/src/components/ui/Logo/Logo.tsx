import * as React from 'react';
import { Link } from 'react-router-dom';
import { cx } from 'class-variance-authority';
import { ImlaiIcon } from '@/assets';
import { Typography } from '@/components/ui';

type LogoProps = React.ComponentPropsWithRef<'a'>;

const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ href = '/', className, ...props }, ref) => (
    <Link
      to={href}
      className={cx(
        'inline-flex items-center gap-3 whitespace-nowrap rounded-lg ring-offset-bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
        className,
      )}
      ref={ref}
      {...props}
    >
      <ImlaiIcon className="size-8" />
      <Typography variant="heading-2xl" asChild>
        <span className="bg-gradient-to-b from-[#71717a] to-[#09090b] bg-clip-text font-brand text-transparent">
          imlai
        </span>
      </Typography>
    </Link>
  ),
);

Logo.displayName = 'Logo';

export default Logo;

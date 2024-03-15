import type { LucideIcon } from 'lucide-react';
import * as React from 'react';
import { cx } from 'class-variance-authority';

type NavLinkProps = React.ComponentPropsWithRef<'a'> & {
  title: string;
  icon: LucideIcon;
  active?: boolean;
  disabled?: boolean;
};

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      title,
      icon: Icon,
      active = false,
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => (
    <a
      className={cx(
        'inline-flex h-12 items-center gap-4 whitespace-nowrap rounded-lg px-4 ring-offset-bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
        active ? 'bg-surface-active' : 'bg-surface hover:bg-surface-hover',
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    >
      <Icon size={20} strokeWidth={1.5} className="icon-primary" />
      {title}
    </a>
  ),
);

NavLink.displayName = 'NavLink';

export default NavLink;

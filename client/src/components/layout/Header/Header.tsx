import * as React from 'react';
import { cx } from 'class-variance-authority';
import { Logo, Avatar } from '@/components/ui';

type HeaderProps = React.ComponentPropsWithoutRef<'header'>;

function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cx(
        'fixed left-0 right-0 top-0 z-30 flex h-header items-center justify-between border-b border-primary bg-surface px-6',
        className,
      )}
      {...props}
    >
      <Logo />
      <Avatar>
        <Avatar.Image
          src="https://github.com/ozgurgokdemir.png"
          alt="@ozgurgokdemir"
        />
        <Avatar.Fallback>ÖG</Avatar.Fallback>
      </Avatar>
    </header>
  );
}

export default Header;

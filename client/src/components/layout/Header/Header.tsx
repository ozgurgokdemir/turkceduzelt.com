import * as React from 'react';
import { cx } from 'class-variance-authority';
import { Logo, Button } from '@/components/ui';

type HeaderProps = React.ComponentPropsWithoutRef<'header'>;

function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cx(
        'fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-primary bg-surface px-6',
        className,
      )}
      {...props}
    >
      <Logo />
      <Button variant="brand">Log in</Button>
    </header>
  );
}

export default Header;

import { Logo } from '@/components/layout';
import { Button } from '@/components/ui';

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-primary bg-surface px-8">
      <Logo />
      <Button variant="brand">Log in</Button>
    </header>
  );
}

export default Header;

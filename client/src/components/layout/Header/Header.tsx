import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cx } from 'class-variance-authority';
import {
  FileCheck2,
  FilePen,
  FileSearch,
  MessageSquareMore,
  Menu,
} from 'lucide-react';
import { Logo, Avatar, Button, Icon, UnderlineList } from '@/components/ui';

type HeaderProps = React.ComponentPropsWithoutRef<'header'>;

function Header({ className, ...props }: HeaderProps) {
  const { pathname } = useLocation();

  return (
    <header
      className={cx(
        'container flex h-header items-center justify-between gap-8 border-b border-primary bg-surface',
        className,
      )}
      {...props}
    >
      <Logo to="/">
        <Logo.Icon />
        <Logo.Text />
      </Logo>
      <UnderlineList active={pathname} asChild>
        <nav className="hidden h-full items-center gap-1 space-x-1 md:flex">
          <UnderlineList.Item value="/duzeltici" asChild>
            <Link
              to="/duzeltici"
              data-state={pathname === '/duzeltici' ? 'active' : 'inactive'}
              className="group flex h-full items-center gap-3 px-4 text-muted transition-colors data-[state=active]:text-primary"
            >
              <Icon
                icon={FileCheck2}
                variant="muted"
                className="transition-colors group-data-[state=active]:icon-brand"
              />
              Düzeltici
            </Link>
          </UnderlineList.Item>
          <UnderlineList.Item value="/sekillendirici" asChild>
            <Link
              to="/sekillendirici"
              data-state={
                pathname === '/sekillendirici' ? 'active' : 'inactive'
              }
              className="group flex h-full items-center gap-3 px-4 text-muted transition-colors data-[state=active]:text-primary"
            >
              <Icon
                icon={FilePen}
                variant="muted"
                className="transition-colors group-data-[state=active]:icon-brand"
              />
              Şekillendirici
            </Link>
          </UnderlineList.Item>
          <UnderlineList.Item value="/ozetleyici" asChild>
            <Link
              to="/ozetleyici"
              data-state={pathname === '/ozetleyici' ? 'active' : 'inactive'}
              className="group flex h-full items-center gap-3 px-4 text-muted transition-colors data-[state=active]:text-primary"
            >
              <Icon
                icon={FileSearch}
                variant="muted"
                className="transition-colors group-data-[state=active]:icon-brand"
              />
              Özetleyici
            </Link>
          </UnderlineList.Item>
        </nav>
      </UnderlineList>
      <div className="hidden items-center gap-6 md:inline-flex">
        <Button variant="outline">
          <Icon icon={MessageSquareMore} variant="secondary" />
          Bize ulaşın
        </Button>
        <Avatar>
          <Avatar.Image
            src="https://github.com/ozgurgokdemir.png"
            alt="@ozgurgokdemir"
          />
          <Avatar.Fallback>ÖG</Avatar.Fallback>
        </Avatar>
      </div>
      <button className="md:hidden">
        <Icon icon={Menu} variant="primary" size="lg" />
      </button>
    </header>
  );
}

export default Header;

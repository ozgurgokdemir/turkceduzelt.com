import * as React from 'react';
import { Link } from 'react-router-dom';
import { cx } from 'class-variance-authority';
import {
  FileCheck2,
  FilePen,
  FileSearch,
  MessageSquareMore,
  Menu,
} from 'lucide-react';
import { Logo, Avatar, Button, Icon } from '@/components/ui';

type HeaderProps = React.ComponentPropsWithoutRef<'header'>;

const navLinks = [
  { href: '/duzeltici', title: 'Düzeltici', icon: FileCheck2 },
  { href: '/sekillendirici', title: 'Şekillendirici', icon: FilePen },
  { href: '/ozetleyici', title: 'Özetleyici', icon: FileSearch },
];

function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cx(
        'container flex h-header items-center justify-between gap-8 border-b border-primary bg-surface',
        className,
      )}
      {...props}
    >
      <Logo />
      <nav className="hidden h-full space-x-1 md:inline-block">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            to={link.href}
            className="group inline-flex h-full items-center"
          >
            <Button variant="ghost" asChild>
              <div className="group-hover:bg-surface-hover">
                <Icon icon={link.icon} variant="secondary" />
                {link.title}
              </div>
            </Button>
          </Link>
        ))}
      </nav>
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

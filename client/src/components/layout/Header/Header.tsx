import * as React from 'react';
import { cx } from 'class-variance-authority';
import {
  FileCheck2,
  FilePen,
  FileSearch,
  MessageSquareMore,
} from 'lucide-react';
import { Logo, Avatar, Button } from '@/components/ui';

type HeaderProps = React.ComponentPropsWithoutRef<'header'>;

const navLinks = [
  { href: '', title: 'Düzeltici', icon: FileCheck2 },
  { href: '', title: 'Şekillendirici', icon: FilePen },
  { href: '', title: 'Özetleyici', icon: FileSearch },
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
      <nav className="h-full space-x-1">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="group inline-flex h-full items-center"
          >
            <Button variant="ghost" asChild>
              <div className="group-hover:bg-surface-hover">
                <link.icon
                  size={20}
                  strokeWidth={1.5}
                  className="icon-secondary"
                />
                {link.title}
              </div>
            </Button>
          </a>
        ))}
      </nav>
      <div className="inline-flex items-center gap-6">
        <Button variant="outline">
          <MessageSquareMore
            size={20}
            strokeWidth={1.5}
            className="icon-secondary"
          />
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
    </header>
  );
}

export default Header;

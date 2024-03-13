import * as React from 'react';
import { cx } from 'class-variance-authority';
import {
  FileCheck2,
  FilePen,
  FileSearch,
  MessageSquareMore,
  type LucideIcon,
} from 'lucide-react';
import { NavLink, Separator } from '@/components/ui';

type Link = {
  href: string;
  title: string;
  icon: LucideIcon;
  active?: boolean;
};

const features: Link[] = [
  { href: '', title: 'Metin düzeltici', icon: FileCheck2, active: true },
  { href: '', title: 'Metin şekillendirici', icon: FilePen },
  { href: '', title: 'Metin özetleyici', icon: FileSearch },
];

const misc: Link[] = [
  { href: '', title: 'Bize ulaşın', icon: MessageSquareMore },
];

const navGroups: Link[][] = [features, misc];

type SidebarProps = React.ComponentPropsWithoutRef<'aside'>;

function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <aside className={cx('border-r border-primary', className)} {...props}>
      <nav className="px-8 py-6">
        {navGroups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <ul className="space-y-1">
              {group.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <NavLink {...link} className="w-full" />
                </li>
              ))}
            </ul>
            {groupIndex !== navGroups.length - 1 && (
              <Separator className="my-3" />
            )}
          </React.Fragment>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;

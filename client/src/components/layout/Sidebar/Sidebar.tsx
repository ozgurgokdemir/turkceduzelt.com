import * as React from 'react';
import { cx } from 'class-variance-authority';
import {
  FileCheck2,
  FilePen,
  FileSearch,
  MessageSquareMore,
} from 'lucide-react';
import { Separator } from '@/components/ui';
import SidebarItem, { type SidebarItemProps } from './SidebarItem';

const features: SidebarItemProps[] = [
  { href: '', title: 'Metin düzeltici', icon: FileCheck2, active: true },
  { href: '', title: 'Metin şekillendirici', icon: FilePen },
  { href: '', title: 'Metin özetleyici', icon: FileSearch },
];

const misc: SidebarItemProps[] = [
  { href: '', title: 'Bize ulaşın', icon: MessageSquareMore },
];

const navGroups: SidebarItemProps[][] = [features, misc];

type SidebarProps = React.ComponentPropsWithoutRef<'aside'>;

function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <aside className={cx('border-r border-primary', className)} {...props}>
      <nav className="p-6">
        {navGroups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <ul className="space-y-1">
              {group.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <SidebarItem {...link} />
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

import * as React from 'react';
import { Header, Sidebar } from '@/components/layout';

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="pt-16">
      <Header />
      <div className="relative grid grid-cols-[var(--width-sidebar)_1fr]">
        <Sidebar className="sticky top-16 h-screen-without-header" />
        {children}
      </div>
    </div>
  );
}

export default AppLayout;

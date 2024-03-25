import * as React from 'react';
import { Header } from '@/components/layout';

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="pt-16">
      <Header className="fixed left-0 right-0 top-0 z-30" />
      {children}
    </div>
  );
}

export default AppLayout;

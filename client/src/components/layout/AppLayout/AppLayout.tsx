import * as React from 'react';
import { Header, Sidebar } from '@/components/layout';
import { EditorProvider } from '@/features/editor';

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <EditorProvider>
      <div className="pt-16">
        <Header />
        <div className="relative grid grid-cols-[var(--width-sidebar)_1fr]">
          <Sidebar className="sticky top-16 h-screen-without-header" />
          {children}
        </div>
      </div>
    </EditorProvider>
  );
}

export default AppLayout;

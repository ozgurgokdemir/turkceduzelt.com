import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout';

function AppLayout() {
  return (
    <div className="pt-16">
      <Header className="fixed left-0 right-0 top-0 z-30" />
      <Outlet />
    </div>
  );
}

export default AppLayout;

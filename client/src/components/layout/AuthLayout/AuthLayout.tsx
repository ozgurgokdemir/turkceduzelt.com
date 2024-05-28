import { Button, Icon, Typography } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="min-w-96 space-y-12">
        <header className="flex items-center gap-3">
          <Button variant="filled" size="icon" radius="full">
            <Icon variant="primary" icon={ArrowLeft} />
          </Button>
          <Typography variant="heading-2xl" asChild>
            <span className="bg-gradient-to-b from-[#71717a] to-[#09090b] bg-clip-text font-brand text-transparent">
              imlai
            </span>
          </Typography>
        </header>
        <Outlet />
      </div>
    </main>
  );
}

export default AuthLayout;

import { Button, Icon, Logo } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <main className="relative grid h-screen w-full">
      <div className="sticky top-0 w-full space-y-12 px-6 py-12 xs:max-w-[27rem] xs:place-self-center">
        <header className="flex items-center gap-3">
          <Button variant="filled" size="icon" radius="full" asChild>
            <Link to="/">
              <Icon variant="primary" icon={ArrowLeft} />
            </Link>
          </Button>
          <Logo.Text />
        </header>
        <Outlet />
      </div>
    </main>
  );
}

export default AuthLayout;

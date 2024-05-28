import { Button } from '@/components/ui';
import { GoogleIcon } from '@/features/auth';

function GoogleAuthButton() {
  return (
    <Button variant="outline" tone="neutral" size="lg" className="w-full">
      <GoogleIcon className="size-5" />
      Google ile devam et
    </Button>
  );
}

export default GoogleAuthButton;

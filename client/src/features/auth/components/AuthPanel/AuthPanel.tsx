import * as React from 'react';
import { Button, Link, Separator, Typography } from '@/components/ui';
import { GoogleIcon } from '@/features/auth';

type AuthPanelProps = {
  heading: string;
  subheading: string;
  form: React.ComponentType;
  footerText: string;
  footerLink: {
    to: string;
    text: string;
  };
};

function AuthPanel({
  heading,
  subheading,
  form: Form,
  footerText,
  footerLink,
}: AuthPanelProps) {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <Typography variant="heading-2xl" asChild>
          <h1 className="text-primary">{heading}</h1>
        </Typography>
        <Typography variant="body-md" asChild>
          <p className="text-secondary">{subheading}</p>
        </Typography>
      </header>
      <Button variant="outline" tone="neutral" size="lg" className="w-full">
        <GoogleIcon className="size-5" />
        Google ile devam et
      </Button>
      <Typography variant="body-sm" asChild>
        <div className="flex items-center gap-2 text-muted">
          <Separator className="flex-1" />
          veya
          <Separator className="flex-1" />
        </div>
      </Typography>
      <Form />
      <Typography variant="body-sm" className="text-secondary">
        {footerText} <Link to={footerLink.to}>{footerLink.text}</Link>
      </Typography>
    </div>
  );
}

export default AuthPanel;

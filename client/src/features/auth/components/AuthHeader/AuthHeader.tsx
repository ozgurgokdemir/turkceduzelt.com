import { Typography } from '@/components/ui';

type AuthHeaderProps = {
  heading: string;
  subheading: string;
};

function AuthHeader({ heading, subheading }: AuthHeaderProps) {
  return (
    <header className="space-y-2">
      <Typography variant="heading-2xl" asChild>
        <h1 className="text-primary">{heading}</h1>
      </Typography>
      <Typography variant="body-md" asChild>
        <p className="text-secondary">{subheading}</p>
      </Typography>
    </header>
  );
}

export default AuthHeader;

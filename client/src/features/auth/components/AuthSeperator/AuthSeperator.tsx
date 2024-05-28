import { Separator, Typography } from '@/components/ui';

function AuthSeperator() {
  return (
    <Typography variant="body-sm" asChild>
      <div className="flex items-center gap-2 text-muted">
        <Separator className="flex-1" />
        veya
        <Separator className="flex-1" />
      </div>
    </Typography>
  );
}

export default AuthSeperator;

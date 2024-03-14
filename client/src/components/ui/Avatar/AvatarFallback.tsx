import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cx } from 'class-variance-authority';
import { Typography } from '@/components/ui';

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <Typography variant="body-sm" asChild>
    <AvatarPrimitive.Fallback
      className={cx(
        'flex h-full w-full items-center justify-center rounded-full bg-fill text-muted',
        className,
      )}
      ref={ref}
      {...props}
    />
  </Typography>
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export default AvatarFallback;

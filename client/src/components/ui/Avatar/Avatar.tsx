import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cx } from 'class-variance-authority';

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    className={cx(
      'relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full',
      className,
    )}
    ref={ref}
    {...props}
  />
));

Avatar.displayName = AvatarPrimitive.Root.displayName;

export default Avatar;

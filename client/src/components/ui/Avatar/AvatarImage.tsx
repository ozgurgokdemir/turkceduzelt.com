import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cx } from 'class-variance-authority';

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    className={cx('aspect-square h-full w-full', className)}
    ref={ref}
    {...props}
  />
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export default AvatarImage;

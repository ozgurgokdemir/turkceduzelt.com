import * as React from 'react';
import { cx } from 'class-variance-authority';
import { ImlaiIcon } from '@/assets';

const LogoIcon = React.forwardRef<
  React.ElementRef<typeof ImlaiIcon>,
  React.ComponentPropsWithRef<typeof ImlaiIcon>
>(({ className, ...props }, ref) => (
  <ImlaiIcon ref={ref} className={cx('size-8', className)} {...props} />
));

LogoIcon.displayName = 'LogoIcon';

export default LogoIcon;

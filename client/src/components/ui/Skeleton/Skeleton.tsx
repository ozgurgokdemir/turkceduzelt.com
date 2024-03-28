import * as React from 'react';
import { cx } from 'class-variance-authority';

type SkeletonProps = React.ComponentPropsWithRef<'div'>;

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cx('animate-pulse rounded-xl bg-fill', className)}
      ref={ref}
      {...props}
    />
  ),
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;

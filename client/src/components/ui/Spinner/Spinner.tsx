import * as React from 'react';
import { cx } from 'class-variance-authority';

type SpinnerProps = React.ComponentPropsWithRef<'svg'> & {
  size?: 'sm' | 'md' | 'lg';
};

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ size = 'md', className }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx(
        `animate-spin ${size === 'md' ? 'size-5' : size === 'lg' ? 'size-6' : 'size-4'}`,
        className,
      )}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
);

Spinner.displayName = 'Spinner';

export default Spinner;

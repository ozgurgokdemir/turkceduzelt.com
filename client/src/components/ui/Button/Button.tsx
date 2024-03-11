import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Typography } from '@/components/ui';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-lg ring-offset-bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        filled: 'bg-fill text-primary hover:bg-fill-hover',
        outline: 'border border-primary text-primary hover:bg-fill',
        ghost: 'text-primary hover:bg-fill',
        brand: 'bg-fill-brand text-brand-on-bg-fill hover:bg-fill-brand-hover',
        success:
          'bg-fill-success text-success-on-bg-fill hover:bg-fill-success-hover',
        critical:
          'bg-fill-critical text-critical-on-bg-fill hover:bg-fill-critical-hover',
      },
      size: {
        default: 'h-9 px-4',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'default',
    },
  },
);

type ButtonProps = React.ComponentPropsWithRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, variant, size, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Typography variant="body-sm" asChild>
        <Component
          className={buttonVariants({ variant, size, className })}
          ref={ref}
          {...props}
        />
      </Typography>
    );
  },
);

Button.displayName = 'Button';

export default Button;

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Typography } from '@/components/ui';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-3 whitespace-nowrap ring-offset-bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        filled: '',
        outline: 'border',
        ghost: '',
      },
      tone: {
        neutral: '',
        brand: '',
        success: '',
        critical: '',
      },
      size: {
        md: 'h-9 px-4',
        lg: 'h-12 px-6',
        icon: 'h-9 w-9',
      },
      radius: {
        default: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        variant: 'filled',
        tone: 'neutral',
        className: 'bg-fill text-primary hover:bg-fill-hover',
      },
      {
        variant: 'filled',
        tone: 'brand',
        className:
          'bg-fill-brand text-brand-on-bg-fill hover:bg-fill-brand-hover',
      },
      {
        variant: 'filled',
        tone: 'success',
        className:
          'bg-fill-success text-success-on-bg-fill hover:bg-fill-success-hover',
      },
      {
        variant: 'filled',
        tone: 'critical',
        className:
          'bg-fill-critical text-critical-on-bg-fill hover:bg-fill-critical-hover',
      },
      {
        variant: 'outline',
        tone: 'neutral',
        className:
          'border-primary bg-surface text-primary hover:bg-surface-hover',
      },
      {
        variant: 'outline',
        tone: 'brand',
        className: 'border-brand bg-surface text-brand hover:bg-surface-brand',
      },
      {
        variant: 'outline',
        tone: 'success',
        className:
          'border-success bg-surface text-success hover:bg-surface-success',
      },
      {
        variant: 'outline',
        tone: 'critical',
        className:
          'border-critical bg-surface text-critical hover:bg-surface-critical',
      },
      {
        variant: 'ghost',
        tone: 'neutral',
        className: 'text-primary hover:bg-fill',
      },
      {
        variant: 'ghost',
        tone: 'brand',
        className: 'text-brand hover:bg-surface-brand',
      },
      {
        variant: 'ghost',
        tone: 'success',
        className: 'text-success hover:bg-surface-success',
      },
      {
        variant: 'ghost',
        tone: 'critical',
        className: 'text-critical hover:bg-surface-critical',
      },
    ],
    defaultVariants: {
      variant: 'outline',
      tone: 'neutral',
      size: 'md',
      radius: 'default',
    },
  },
);

type ButtonProps = React.ComponentPropsWithRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild = false, variant, tone, size, radius, className, ...props },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Typography variant={size === 'md' ? 'body-sm' : 'body-md'} asChild>
        <Component
          className={buttonVariants({ variant, tone, size, radius, className })}
          ref={ref}
          {...props}
        />
      </Typography>
    );
  },
);

Button.displayName = 'Button';

export default Button;

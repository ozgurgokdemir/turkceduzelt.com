import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const typographyVariants = cva('font-sans', {
  variants: {
    variant: {
      display: 'text-5xl font-semibold leading-none tracking-dense',
      'heading-4xl': 'text-4xl font-medium leading-10 tracking-dense',
      'heading-3xl': 'text-3xl font-medium leading-9 tracking-dense',
      'heading-2xl': 'text-2xl font-medium leading-8 tracking-dense',
      'heading-xl': 'text-xl font-medium leading-7 tracking-dense',
      'body-lg': 'text-lg font-regular leading-7 tracking-normal',
      'body-md': 'text-base font-regular leading-6 tracking-normal',
      'body-sm': 'text-sm font-regular leading-5 tracking-normal',
      'body-xs': 'text-xs font-regular leading-4 tracking-normal',
    },
  },
  defaultVariants: {
    variant: 'body-md',
  },
});

type TypographyProps = React.ComponentPropsWithRef<'p'> &
  VariantProps<typeof typographyVariants> & {
    asChild?: boolean;
  };

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ variant, asChild = false, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'p';

    return (
      <Component
        className={typographyVariants({ variant, className })}
        ref={ref}
        {...props}
      />
    );
  },
);

Typography.displayName = 'Typography';

export default Typography;

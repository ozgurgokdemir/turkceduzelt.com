import type { LucideIcon, LucideProps } from 'lucide-react';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const iconVariants = cva(null, {
  variants: {
    variant: {
      primary: 'icon-primary',
      secondary: 'icon-secondary',
      muted: 'icon-muted',
      brand: 'icon-brand',
      success: 'icon-success',
      critical: 'icon-critical',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type IconProps = LucideProps &
  VariantProps<typeof iconVariants> & {
    icon: LucideIcon;
    size?: 'sm' | 'md' | 'lg';
  };

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      icon: Icon,
      variant,
      size = 'md',
      strokeWidth = 1.5,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Icon
        className={iconVariants({ variant, className })}
        size={size === 'md' ? 20 : size === 'lg' ? 24 : 16}
        strokeWidth={strokeWidth}
        ref={ref}
        {...props}
      />
    );
  },
);

Icon.displayName = 'Icon';

export default Icon;

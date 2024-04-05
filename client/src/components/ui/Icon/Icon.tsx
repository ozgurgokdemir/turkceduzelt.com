import type { LucideIcon, LucideProps } from 'lucide-react';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const iconVariants = cva(null, {
  variants: {
    variant: {
      primary: 'icon-primary',
      secondary: 'icon-secondary',
      muted: 'icon-muted',
      brand: '',
      success: '',
      critical: '',
    },
    onBgFill: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'brand',
      onBgFill: false,
      className: 'icon-brand',
    },
    {
      variant: 'brand',
      onBgFill: true,
      className: 'icon-brand-on-bg-fill',
    },
    {
      variant: 'success',
      onBgFill: false,
      className: 'icon-success',
    },
    {
      variant: 'success',
      onBgFill: true,
      className: 'icon-success-on-bg-fill',
    },
    {
      variant: 'critical',
      onBgFill: false,
      className: 'icon-critical',
    },
    {
      variant: 'critical',
      onBgFill: true,
      className: 'icon-critical-on-bg-fill',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    onBgFill: false,
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
      onBgFill,
      size = 'md',
      strokeWidth = 1.5,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Icon
        className={iconVariants({ variant, onBgFill, className })}
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

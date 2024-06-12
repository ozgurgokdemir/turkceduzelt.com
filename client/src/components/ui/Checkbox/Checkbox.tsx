import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cx } from 'class-variance-authority';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cx(
      'peer h-4 w-4 shrink-0 rounded-[0.25rem] border border-primary ring-offset-bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-bg-fill-brand data-[state=checked]:bg-fill-brand data-[state=checked]:text-brand-on-bg-fill',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cx(
        'relative flex size-full items-center justify-center text-current',
      )}
    >
      <Check className="absolute size-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;

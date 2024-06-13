import * as React from 'react';
import { Typography } from '@/components/ui';

type LogoTextProps = React.ComponentPropsWithRef<'span'> & {
  typography?: React.ComponentPropsWithoutRef<typeof Typography>['variant'];
};

const LogoText = React.forwardRef<React.ElementRef<'span'>, LogoTextProps>(
  ({ typography = 'heading-2xl', ...props }, ref) => (
    <Typography variant={typography} asChild>
      <span
        ref={ref}
        className="bg-gradient-to-b from-[#71717a] to-[#09090b] bg-clip-text font-brand text-transparent"
        {...props}
      >
        imlai
      </span>
    </Typography>
  ),
);

LogoText.displayName = 'LogoText';

export default LogoText;

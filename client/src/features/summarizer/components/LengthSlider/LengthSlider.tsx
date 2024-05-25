import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cx } from 'class-variance-authority';
import { Typography } from '@/components/ui';
import { useSummarizer } from '@/features/summarizer';

type LengthSliderProps = React.ComponentPropsWithoutRef<'div'>;

function LengthSlider({ className, ...props }: LengthSliderProps) {
  const { length, setLength } = useSummarizer();

  const [isKeyboardFocus, setIsKeyboardFocus] = React.useState(false);

  const thumbRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const thumbElement = thumbRef.current;
    if (!thumbElement?.parentElement) return;
    thumbElement.parentElement.classList.add('transition-[left]');
  }, []);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const keys = ['Tab', 'ArrowLeft', 'ArrowRight'];
      if (!keys.includes(event.key)) return;
      setIsKeyboardFocus(true);
    }

    function handleMouseDown() {
      setIsKeyboardFocus(false);
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  function handleValueChange(value: number[]) {
    setLength(value[0]);
  }

  return (
    <Typography variant="body-sm" className="text-primary" asChild>
      <div className={cx('flex items-center gap-3', className)} {...props}>
        Kısa
        <SliderPrimitive.Root
          value={[length]}
          onValueChange={handleValueChange}
          min={0}
          max={4}
          className="relative flex h-5 w-full min-w-32 touch-none select-none items-center"
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-fill">
            <SliderPrimitive.Range className="absolute h-full bg-fill-brand transition-[right]" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb
            ref={thumbRef}
            className={cx(
              'block h-5 w-5 rounded-full border-2 border-bg-fill-brand bg-surface ring-offset-bg-surface focus-visible:outline-none',
              isKeyboardFocus &&
                'focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
            )}
          />
        </SliderPrimitive.Root>
        Uzun
      </div>
    </Typography>
  );
}

export default LengthSlider;

import * as React from 'react';
import { cx } from 'class-variance-authority';
import { Download, Copy, Trash, MoreHorizontal } from 'lucide-react';
import { Button, Separator } from '@/components/ui';

type EditorProps = React.ComponentPropsWithRef<'div'>;

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  ({ className, ...props }, ref) => {
    const [text, setText] = React.useState('');

    const toolbar = [
      {
        label: 'İndir',
        icon: Download,
        handleClick: () => {
          if (!text.trim()) return;

          const blob = new Blob([text], {
            type: 'text/plain',
          });

          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'türkçedüzelt.txt';

          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        },
      },
      {
        label: 'Kopyala',
        icon: Copy,
        handleClick: async () => {
          await navigator.clipboard.writeText(text);
        },
      },
      {
        label: 'Sil',
        icon: Trash,
        handleClick: () => {
          setText('');
        },
      },
      {
        label: 'Daha fazlası',
        icon: MoreHorizontal,
        handleClick: () => {
          // open dropdown menu
        },
      },
    ];

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setText(event.target.value);
    }

    return (
      <div
        className={cx('rounded-xl border border-primary bg-surface', className)}
        ref={ref}
        {...props}
      >
        <div className="flex items-center justify-end gap-1 border-b border-primary p-1">
          <Separator orientation="vertical" className="min-h-4" />
          {toolbar.map(({ label, icon: Icon, handleClick }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              onClick={handleClick}
            >
              <Icon size={20} strokeWidth={1.5} className="icon-primary" />
            </Button>
          ))}
        </div>
        <textarea
          value={text}
          onChange={handleChange}
          className="aspect-video w-full p-6 focus-visible:outline-none"
        ></textarea>
      </div>
    );
  },
);

Editor.displayName = 'Editor';

export default Editor;

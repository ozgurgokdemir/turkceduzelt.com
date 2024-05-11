import * as React from 'react';
import { cx } from 'class-variance-authority';
import {
  type LucideIcon,
  Download,
  Copy,
  Trash,
  Undo2,
  Redo2,
} from 'lucide-react';
import { Button, Typography } from '@/components/ui';
import { useEditor } from '@/features/editor';

type EditorProps = React.ComponentPropsWithRef<'div'>;

type ToolbarItem = React.ComponentPropsWithRef<typeof Button> & {
  label: string;
  icon: LucideIcon;
};

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  ({ className, ...props }, ref) => {
    const { text, setText } = useEditor();

    const isEmpty = !text.trim();

    const toolbarLeft: ToolbarItem[] = [
      {
        label: 'Geri al',
        icon: Undo2,
        disabled: true,
      },
      {
        label: 'Yeniden yap',
        icon: Redo2,
        disabled: true,
      },
    ];

    const toolbarRight: ToolbarItem[] = [
      {
        label: 'İndir',
        icon: Download,
        disabled: isEmpty,
        onClick: () => {
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
        disabled: isEmpty,
        onClick: () => {
          void navigator.clipboard.writeText(text);
        },
      },
      {
        label: 'Sil',
        icon: Trash,
        disabled: isEmpty,
        onClick: () => {
          setText('');
        },
      },
    ];

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setText(event.target.value);
    }

    return (
      <div
        className={cx(
          'overflow-hidden rounded-xl border border-primary bg-surface',
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex items-center justify-between gap-1 border-b border-primary p-1">
          <ul className="flex items-center gap-1">
            {toolbarLeft.map(({ label, icon: Icon, ...props }) => (
              <li key={label}>
                <Button variant="ghost" size="icon" {...props}>
                  <Icon size={20} strokeWidth={1.5} className="icon-primary" />
                </Button>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-1">
            {toolbarRight.map(({ label, icon: Icon, ...props }) => (
              <li key={label}>
                <Button variant="ghost" size="icon" {...props}>
                  <Icon size={20} strokeWidth={1.5} className="icon-primary" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Typography variant="body-md" asChild>
          <textarea
            placeholder="Yazmaya başlayın, bir metin yapıştırın, bir taslak açın veya bir metin belgesi yükleyin."
            value={text}
            onChange={handleChange}
            className="block aspect-video w-full resize-none p-6 text-primary focus-visible:outline-none"
          ></textarea>
        </Typography>
      </div>
    );
  },
);

Editor.displayName = 'Editor';

export default Editor;

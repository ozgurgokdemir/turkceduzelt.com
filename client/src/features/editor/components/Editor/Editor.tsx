import * as React from 'react';
import { cx } from 'class-variance-authority';
import {
  type LucideIcon,
  Download,
  Copy,
  Trash,
  Undo2,
  Redo2,
  Clipboard,
  Upload,
} from 'lucide-react';
import { Button, Icon, Typography } from '@/components/ui';
import { useEditor } from '@/features/editor';

type EditorProps = React.ComponentPropsWithRef<'div'>;

type ToolbarItem = React.ComponentPropsWithRef<typeof Button> & {
  label: string;
  icon: LucideIcon;
};

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  ({ className, ...props }, ref) => {
    const { text, setText } = useEditor();

    const importRef = React.useRef<HTMLInputElement>(null);

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
          void (async () => {
            await navigator.clipboard.writeText(text);
          })();
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
          'overflow-hidden rounded-xl border border-primary bg-surface @container',
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
        <div className="relative">
          <Typography variant="body-md" asChild>
            <textarea
              value={text}
              onChange={handleChange}
              className="block aspect-video w-full resize-none p-6 text-primary focus-visible:outline-none"
            ></textarea>
          </Typography>
          {isEmpty && (
            <div className="pointer-events-none absolute inset-6 space-y-6">
              <Typography variant="body-md" className="text-muted">
                Yazmaya başlayın, bir metin yapıştırın, bir taslak açın veya bir
                metin belgesi yükleyin.
              </Typography>
              <div className="flex flex-col gap-2 @[24rem]:flex-row">
                <Button
                  variant="outline"
                  className="pointer-events-auto"
                  onClick={() => {
                    void (async () => {
                      const text = await navigator.clipboard.readText();
                      setText(text);
                    })();
                  }}
                >
                  <Icon icon={Clipboard} variant="secondary" />
                  Metni yapıştır
                </Button>
                <Button
                  variant="outline"
                  className="pointer-events-auto"
                  onClick={() => {
                    importRef.current?.click();
                  }}
                >
                  <Icon icon={Upload} variant="secondary" />
                  Belgeyi yükle
                </Button>
                <input
                  ref={importRef}
                  type="file"
                  accept=".txt"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];

                    if (!file || !file.name.endsWith('.txt')) return;

                    const reader = new FileReader();

                    reader.onload = (event) => {
                      const text = event.target?.result as string;
                      setText(text);
                    };

                    reader.readAsText(file);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
);

Editor.displayName = 'Editor';

export default Editor;

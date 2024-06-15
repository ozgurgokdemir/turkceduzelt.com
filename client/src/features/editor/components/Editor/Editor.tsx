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

type EditorProps = React.ComponentPropsWithRef<'div'> & {
  renderAction?: React.ReactNode;
};

type ToolbarItem = React.ComponentPropsWithRef<typeof Button> & {
  label: string;
  icon: LucideIcon;
};

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  ({ renderAction, className, ...props }, ref) => {
    const {
      text,
      setText,
      clearText,
      downloadText,
      copyText,
      pasteText,
      triggerImport,
      importText,
    } = useEditor();

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
        onClick: downloadText,
      },
      {
        label: 'Kopyala',
        icon: Copy,
        disabled: isEmpty,
        onClick: () => {
          void (async () => {
            await copyText();
          })();
        },
      },
      {
        label: 'Sil',
        icon: Trash,
        disabled: isEmpty,
        onClick: clearText,
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
            {toolbarLeft.map(({ label, icon: Icon, disabled, ...props }) => (
              <li key={label}>
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={disabled}
                  {...props}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className={disabled ? 'icon-muted' : 'icon-primary'}
                  />
                </Button>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-1">
            {toolbarRight.map(({ label, icon: Icon, disabled, ...props }) => (
              <li key={label}>
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={disabled}
                  {...props}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className={disabled ? 'icon-muted' : 'icon-primary'}
                  />
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
              className="block min-h-[24rem] w-full resize-none p-6 text-primary focus-visible:outline-none sm:min-h-[36rem] md:min-h-[30rem] xl:min-h-[36rem]"
            ></textarea>
          </Typography>
          {isEmpty ? (
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
                      await pasteText();
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
                    triggerImport(importRef);
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
                  onChange={importText}
                />
              </div>
            </div>
          ) : (
            <div className="absolute bottom-6 right-6">{renderAction}</div>
          )}
        </div>
      </div>
    );
  },
);

Editor.displayName = 'Editor';

export default Editor;

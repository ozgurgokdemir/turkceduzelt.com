import * as React from 'react';
import UnderlineListContext, { type Item } from './underline-list-context';

type UnderlineListProviderProps = {
  children: React.ReactNode;
};

function UnderlineListProvider({ children }: UnderlineListProviderProps) {
  const [items, setItems] = React.useState<Item[]>([]);

  const addItem = React.useCallback(
    (value: Item['value'], ref: Item['ref']) => {
      setItems((prevItems) => [...prevItems, { value, ref }]);
    },
    [],
  );

  const animateUnderline = React.useCallback(
    (
      listRef: React.RefObject<HTMLElement>,
      activeItemRef: React.RefObject<HTMLElement>,
    ) => {
      if (!listRef.current || !activeItemRef.current) return;

      const listRect = listRef.current.getBoundingClientRect();
      const activeItemRect = activeItemRef.current.getBoundingClientRect();

      listRef.current.style.setProperty(
        '--underline-width',
        `${activeItemRect.width}px`,
      );
      listRef.current.style.setProperty(
        '--underline-left',
        `${activeItemRect.left - listRect.left}px`,
      );
    },
    [],
  );

  return (
    <UnderlineListContext.Provider value={{ items, addItem, animateUnderline }}>
      {children}
    </UnderlineListContext.Provider>
  );
}

export default UnderlineListProvider;

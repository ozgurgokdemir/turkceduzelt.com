import * as React from 'react';

export type Item = {
  value: string;
  ref: React.RefObject<HTMLElement>;
};

export type State = {
  items: Item[];
  addItem: (value: Item['value'], ref: Item['ref']) => void;
  animateUnderline: (
    listRef: React.RefObject<HTMLElement>,
    activeItemRef: React.RefObject<HTMLElement>,
  ) => void;
};

const UnderlineListContext = React.createContext<State | null>(null);

export default UnderlineListContext;

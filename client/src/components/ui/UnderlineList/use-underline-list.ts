import * as React from 'react';
import UnderlineListContext from './underline-list-context';

function useUnderlineList() {
  const underlineList = React.useContext(UnderlineListContext);

  if (!underlineList) {
    throw new Error(
      'useUnderlineList must be used within a UnderlineListProvider',
    );
  }

  return underlineList;
}

export default useUnderlineList;

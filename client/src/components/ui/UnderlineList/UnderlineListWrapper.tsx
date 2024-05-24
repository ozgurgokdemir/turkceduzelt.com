import * as React from 'react';
import UnderlineListProvider from './UnderlineListProvider';
import UnderlineList from './UnderlineList';

function UnderlineListWrapper(
  props: React.ComponentPropsWithoutRef<typeof UnderlineList>,
) {
  return (
    <UnderlineListProvider>
      <UnderlineList {...props} />
    </UnderlineListProvider>
  );
}
export default UnderlineListWrapper;

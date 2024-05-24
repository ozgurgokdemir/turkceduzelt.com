import UnderlineListWrapper from './UnderlineListWrapper';
import UnderlineListItem from './UnderlineListItem';

const UnderlineListCompound = Object.assign(UnderlineListWrapper, {
  Item: UnderlineListItem,
});

export default UnderlineListCompound;

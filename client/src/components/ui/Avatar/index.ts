import Avatar from './Avatar';
import AvatarImage from './AvatarImage';
import AvatarFallback from './AvatarFallback';

const AvatarCompound = Object.assign(Avatar, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

export default AvatarCompound;

export { Avatar, AvatarImage, AvatarFallback };

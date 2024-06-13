import Logo from './Logo';
import LogoIcon from './LogoIcon';
import LogoText from './LogoText';

const LogoCompound = Object.assign(Logo, {
  Icon: LogoIcon,
  Text: LogoText,
});

export default LogoCompound;

import { Link } from 'react-router-dom';
import { Typography } from '@/components/ui';

type SwitchAuthLinkProps = {
  question: string;
  link: {
    to: string;
    text: string;
  };
};

function SwitchAuthLink({ question, link }: SwitchAuthLinkProps) {
  return (
    <Typography variant="body-sm" className="text-secondary">
      {`${question} `}
      <Link to={link.to} className="text-brand hover:underline">
        {link.text}
      </Link>
    </Typography>
  );
}

export default SwitchAuthLink;

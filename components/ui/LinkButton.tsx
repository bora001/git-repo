import Link from 'next/link';
import IconButton, { IconButtonType } from './IconButton';
type LinkButtonProps = IconButtonType & {
 href: string;
};
const LinkButton = ({ href, ...rest }: LinkButtonProps) => {
 return (
  <Link href={href}>
   <IconButton {...{ ...rest }} />
  </Link>
 );
};
export default LinkButton;

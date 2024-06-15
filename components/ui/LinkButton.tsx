import Link from 'next/link';
import IconButton, { IconButtonType } from './IconButton';
import { AnchorHTMLAttributes } from 'react';
type LinkButtonProps = IconButtonType & AnchorHTMLAttributes<HTMLAnchorElement>;
const LinkButton = ({ href, target, ...rest }: LinkButtonProps) => {
 return (
  <>
   {href && (
    <Link href={href} target={target ?? '_self'}>
     <IconButton {...{ ...rest }} />
    </Link>
   )}
  </>
 );
};
export default LinkButton;

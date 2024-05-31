import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './button';

export type IconButtonType = {
 type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
 text?: string;
 icon?: ReactNode;
 className?: string;
};
const IconButton = ({ text, icon, type, className }: IconButtonType) => {
 return (
  <Button className={`space-x-4 ${className}`} type={type}>
   {icon}
   <p>{text}</p>
  </Button>
 );
};
export default IconButton;

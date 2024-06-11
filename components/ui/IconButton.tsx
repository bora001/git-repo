import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './button';

export type IconButtonType = {
 type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
 text?: string;
 icon?: ReactNode;
 className?: string;
 reverse?: boolean;
};
const IconButton = ({ text, icon, type, className, reverse }: IconButtonType) => {
 return (
  <Button
   className={`flex space-x-4 ${className} ${reverse && 'flex-row-reverse space-x-reverse'}`}
   type={type}
  >
   {icon}
   <p>{text}</p>
  </Button>
 );
};
export default IconButton;

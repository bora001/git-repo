'use client';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { githubLogin } from '@/actions/social-login';

type LoginButtonType = 'sm' | 'md';
const LoginButton = ({ type = 'sm' }: { type?: LoginButtonType }) => {
 return (
  <form action={githubLogin}>
   <Button className="space-x-4 bg-black hover:bg-blue-900" type="submit">
    <GitHubLogoIcon />
    <p>{`Sign in ${type === 'md' ? 'with Github' : ''}`}</p>
   </Button>
  </form>
 );
};
export default LoginButton;

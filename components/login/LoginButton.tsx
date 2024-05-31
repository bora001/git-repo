'use client';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { githubLogin } from '@/actions/social-login';

const LoginButton = () => {
 return (
  <form action={githubLogin}>
   <Button className="space-x-4 bg-black hover:bg-blue-900" type="submit">
    <GitHubLogoIcon />
    <p>Sign in with Github</p>
   </Button>
  </form>
 );
};
export default LoginButton;

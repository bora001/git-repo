'use client';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { githubSignIn } from '@/actions/social-signIn';

type SignInBtnType = 'sm' | 'md';
const SignInBtn = ({ type = 'sm' }: { type?: SignInBtnType }) => {
 return (
  <form action={githubSignIn}>
   <Button className="space-x-4 bg-black hover:bg-blue-900" type="submit">
    <GitHubLogoIcon />
    <p>{`Sign in ${type === 'md' ? 'with Github' : ''}`}</p>
   </Button>
  </form>
 );
};
export default SignInBtn;

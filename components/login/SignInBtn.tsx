'use client';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { githubSignIn } from '@/actions/social-signIn';
import IconButton from '../ui/IconButton';

type SignInBtnType = 'sm' | 'md';
const SignInBtn = ({ type = 'sm' }: { type?: SignInBtnType }) => {
 return (
  <form action={githubSignIn}>
   <IconButton
    type="submit"
    text={`Sign in ${type === 'md' ? 'with Github' : ''}`}
    icon={<GitHubLogoIcon />}
    className="space-x-4 bg-black hover:bg-blue-900"
   />
  </form>
 );
};
export default SignInBtn;

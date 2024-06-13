'use client';

import { ENV_CONFIG } from '@/env-config';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { githubSignIn } from '@/actions/social-signIn';
import IconButton from '../ui/IconButton';
import { useSearchParams } from 'next/navigation';

type SignInBtnType = 'sm' | 'md';
const SignInBtn = ({ type = 'sm' }: { type?: SignInBtnType }) => {
 const params = useSearchParams();

 return (
  <form action={() => githubSignIn(params.get('callback') ?? ENV_CONFIG.BASE_URL)}>
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

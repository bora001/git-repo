'use client';
import { githubSignOut } from '@/actions/social-signOut';
import IconButton from '../ui/IconButton';

const SignOutButton = () => {
 return (
  <form action={githubSignOut}>
   <IconButton type="submit" text="SignOut" className="space-x-4 bg-black hover:bg-blue-900" />
  </form>
 );
};
export default SignOutButton;

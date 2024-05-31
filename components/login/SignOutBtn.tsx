'use client';
import { githubSignOut } from '@/actions/social-signOut';
import { Button } from '../ui/button';

const SignOutButton = () => {
 return (
  <form action={githubSignOut}>
   <Button type="submit" className="bg-blue-900">
    SignOut
   </Button>
  </form>
 );
};
export default SignOutButton;

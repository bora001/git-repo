'use client';
import { Button } from '../ui/button';
import { githubSignOut } from '@/actions/social-SignOut';

const SignOutButton = () => {
 return (
  <form action={githubSignOut}>
   <Button type="submit">SignOut</Button>
  </form>
 );
};
export default SignOutButton;

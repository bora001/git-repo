'use client';
import { Button } from '../ui/button';
import { githubLogout } from '@/actions/social-logout';

const LogoutButton = () => {
 return (
  <form action={githubLogout}>
   <Button type="submit">Logout</Button>
  </form>
 );
};
export default LogoutButton;

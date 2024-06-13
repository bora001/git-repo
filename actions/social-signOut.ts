'use server';

import { signOut } from '@/auth/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function githubSignOut() {
 try {
  cookies().delete('refresh');
  cookies().delete('access');
  cookies().delete('login');
  await signOut();
 } catch (err) {
  console.log(err);
 }

 redirect('/');
}

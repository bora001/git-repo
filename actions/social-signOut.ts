'use server';

import { handler } from '@/app/api/auth/[...nextauth]/route';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function githubSignOut() {
 try {
  cookies().delete('refresh');
  cookies().delete('access');
  cookies().delete('login');
  await handler.signOut();
 } catch (err) {
  console.log(err);
 }

 redirect('/');
}

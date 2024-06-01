'use server';

import { handler } from '@/app/api/auth/[...nextauth]/route';
import { cookies } from 'next/headers';

export async function githubSignOut() {
 cookies().delete('refresh');
 cookies().delete('access');
 cookies().delete('login');
 await handler.signOut();
}

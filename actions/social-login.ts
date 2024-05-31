'use server';

import { handler } from '@/app/api/auth/[...nextauth]/route';

export async function githubLogin() {
 await handler.signIn('github');
}

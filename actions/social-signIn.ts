'use server';

import { handler } from '@/app/api/auth/[...nextauth]/route';

export async function githubSignIn() {
 await handler.signIn('github');
}

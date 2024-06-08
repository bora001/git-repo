'use server';

import { handler } from '@/app/api/auth/[...nextauth]/route';

export async function githubSignIn(callbackUrl?: string) {
 await handler.signIn('github', { redirectTo: callbackUrl ?? '/' });
}

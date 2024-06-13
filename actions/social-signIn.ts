'use server';

import { signIn } from '@/auth/auth';

export async function githubSignIn(callbackUrl?: string) {
 await signIn('github', { redirectTo: callbackUrl ?? '/' });
}

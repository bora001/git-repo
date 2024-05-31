'use server';

import { signIn } from '@/auth/auth';

export async function githubLogin() {
 await signIn('github');
}

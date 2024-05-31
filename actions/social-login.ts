'use server';

import { signIn, signOut } from '@/auth/auth';

export async function githubLogin() {
 await signIn('github');
}
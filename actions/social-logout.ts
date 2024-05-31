'use server';
import { signOut } from '@/auth/auth';
export async function githubLogout() {
 await signOut();
}

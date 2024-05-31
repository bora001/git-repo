'use server';

import { handler } from '@/app/api/auth/[...nextauth]/route';

export async function githubLogout() {
 await handler.signOut();
}

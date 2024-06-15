'use server';

import { auth } from '@/auth/auth';
import { RedirectType, redirect } from 'next/navigation';
export async function checkReturn() {
 const data = await auth();
 !data && redirect('/login', 'replace' as RedirectType);
}

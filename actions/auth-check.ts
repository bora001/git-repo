'use server';

import { isLogin } from '@/utils/useIsLogin';
import { RedirectType, redirect } from 'next/navigation';
export async function checkReturn() {
 !isLogin && redirect('/login', 'replace' as RedirectType);
}

import { cookies } from 'next/headers';

export const isLogin = cookies().has('authjs.csrf-token') && cookies().has('authjs.session-token');

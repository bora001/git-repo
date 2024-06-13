import { cookies } from 'next/headers';

export async function isLogin() {
 const hasToken = cookies().has('authjs.csrf-token') && cookies().has('authjs.session-token');

 return new Promise((resolve) =>
  setTimeout(() => {
   resolve(hasToken);
  }, 1000),
 );
}

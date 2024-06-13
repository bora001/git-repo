import { ENV_CONFIG } from '@/env-config';
import { cookies } from 'next/headers';

export async function isLogin(): Promise<boolean> {
 const hasToken =
  cookies().has(ENV_CONFIG.TOKEN_KEY as string) &&
  cookies().has(ENV_CONFIG.SECOND_TOKEN_KEY as string);
 return new Promise((resolve) =>
  setTimeout(() => {
   resolve(hasToken);
  }, 1000),
 );
}

import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { cookies } from 'next/headers';

export const { auth, handlers, signIn, signOut } = NextAuth({
 providers: [GitHub],
 callbacks: {
  signIn: async ({ profile, account }) => {
   cookies().set('access', account?.access_token ?? '');
   cookies().set('refresh', account?.refresh_token ?? '');
   cookies().set('login', (profile?.login as string) ?? '');
   return true;
  },
  session: async ({ session, token }) => {
   return session;
  },
 },
});

import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const handler = NextAuth({
 providers: [
  GitHubProvider({
   clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
   clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
   // httpshttps://www.gravatar.com/avatar/dd5dc7eee33264b6b05e6d77f3f089a3?s=64&d=robohash://github.com/settings/apps
  }),
 ],
 callbacks: {
  signIn: async () => {
   return true;
  },
  session: async ({ session, token }) => {
   return session;
  },
 },
});
export const { GET, POST } = handler.handlers;

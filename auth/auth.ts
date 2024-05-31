import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const {
 handlers: { GET, POST },
 auth,
 signIn,
 signOut,
} = NextAuth({
 providers: [
  GitHubProvider({
   clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
   clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
   // https://github.com/settings/apps
  }),
 ],
});

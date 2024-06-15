import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import { ReactQueryClientProvider } from '@/components/provider/query-provider';
import { isLogin } from '@/utils/useIsLogin';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
 title: 'Github-Repo',
 description: 'Manage Your GitHub Starred Repositories on Here!',
};

export default async function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const isLoginStatus = await isLogin();
 const user = cookies().get('login')?.value;

 return (
  <html lang="en">
   <body className={inter.className}>
    <Header isLogin={isLoginStatus} user={user} />
    <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
   </body>
  </html>
 );
}

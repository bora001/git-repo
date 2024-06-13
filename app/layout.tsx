import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import { ReactQueryClientProvider } from '@/components/provider/query-provider';
import { isLogin } from '@/utils/useIsLogin';

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

 return (
  <html lang="en">
   <body className={inter.className}>
    <Header isLogin={isLoginStatus} />
    <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
   </body>
  </html>
 );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import { ReactQueryClientProvider } from '@/components/provider/query-provider';
import { cookies } from 'next/headers';
import { auth } from '@/auth/auth';

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
 const data = await auth();
 const user = cookies().get('login')?.value;
 return (
  <html lang="en">
   <body className={inter.className}>
    <Header isLogin={!!data} user={user} />
    <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
   </body>
  </html>
 );
}

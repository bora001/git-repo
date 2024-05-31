import type { NextApiRequest } from 'next';
import { redirect } from 'next/navigation';

type handlerRequest = NextApiRequest & {
 searchParams: {
  code: string;
 };
};
export default function handler(req: handlerRequest) {
 if (req.searchParams.code) {
  console.log('welcome');
  redirect('/');
 } else {
  console.log('fail');
  redirect('/');
 }
}

'use client';
import Link from 'next/link';
import { Button } from '../ui/button';

const MypageBtn = () => {
 return (
  <Link href="/mypage">
   <Button>MyPage</Button>
  </Link>
 );
};
export default MypageBtn;

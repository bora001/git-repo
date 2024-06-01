import { GitHubLogoIcon } from '@radix-ui/react-icons';
import SignInBtn from '../login/SignInBtn';
import SignOutBtn from '../login/SignOutBtn';
import MypageBtn from '../mypage/MypageBtn';
import Link from 'next/link';

const Header = ({ isLogin = false }: { isLogin?: boolean }) => {
 return (
  <div className="flex h-header w-screen  items-center justify-between bg-blue-100 px-5 py-3">
   <Link href="/">
    <GitHubLogoIcon className="h-10 w-10 rounded-3xl bg-white" />
   </Link>

   <div className="flex justify-end space-x-4">
    {!isLogin ? (
     <SignInBtn />
    ) : (
     <>
      <MypageBtn />
      <SignOutBtn />
     </>
    )}
   </div>
  </div>
 );
};
export default Header;

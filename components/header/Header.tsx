import { GitHubLogoIcon } from '@radix-ui/react-icons';
import SignInBtn from '../login/SignInBtn';
import SignOutBtn from '../login/SignOutBtn';
import Link from 'next/link';
import LinkButton from '../ui/LinkButton';

const Header = ({ isLogin = false, user }: { isLogin?: boolean; user?: string }) => {
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
      {user && <LinkButton href={`https://github.com/${user}`} text="Mypage" target="_blank" />}
      <SignOutBtn />
     </>
    )}
   </div>
  </div>
 );
};
export default Header;

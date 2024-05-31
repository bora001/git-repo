import SignInBtn from '../login/SignInBtn';
import SignOutBtn from '../login/SignOutBtn';

const Header = ({ isLogin = false }: { isLogin?: boolean }) => {
 return (
  <div className="flex h-[300] w-screen justify-end gap-[50] space-x-4 bg-blue-100 px-5 py-3">
   {!isLogin ? <SignInBtn /> : <SignOutBtn />}
  </div>
 );
};
export default Header;

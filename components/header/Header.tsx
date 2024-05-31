import LoginButton from '../login/LoginButton';
import LogoutButton from '../login/LogoutButton';

const Header = () => {
 return (
  <div className="flex h-[300] w-screen justify-end gap-[50] space-x-4 bg-blue-100 px-5 py-3">
   <LoginButton />
   <LogoutButton />
  </div>
 );
};
export default Header;

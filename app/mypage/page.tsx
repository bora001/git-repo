import { handler } from '../api/auth/[...nextauth]/route';
import Image from 'next/image';

const index = async () => {
 const { user } = (await handler.auth()) ?? {};
 console.log(user, 'session');
 return (
  <>
   {user && (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
     <Image
      src={user.image ?? ''}
      alt="userImage"
      width={150}
      height={150}
      className="rounded-full"
     />
     <p>{user.name}</p>
    </div>
   )}
  </>
 );
};
export default index;

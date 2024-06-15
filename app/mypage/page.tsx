import Image from 'next/image';
import { auth } from '@/auth/auth';

const index = async () => {
 const { user } = (await auth()) ?? {};
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

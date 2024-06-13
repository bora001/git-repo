import SignInBtn from '@/components/login/SignInBtn';
import { Suspense } from 'react';

const page = () => {
 return (
  <Suspense>
   <div className="item-center  flex h-screen w-screen items-center justify-center">
    <SignInBtn type="md" />
   </div>
  </Suspense>
 );
};
export default page;

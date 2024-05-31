import LoginButton from '@/components/login/LoginButton';

const page = ({ searchParams }: { searchParams: { code: string } }) => {
 return (
  <div className="item-center  flex h-screen w-screen items-center justify-center">
   <LoginButton />
  </div>
 );
};
export default page;

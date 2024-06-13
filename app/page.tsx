import { StarFilledIcon } from '@radix-ui/react-icons';
import LinkButton from '@/components/ui/LinkButton';
import { auth } from '@/auth/auth';
const index = async () => {
 const session = await auth();
 console.log(session, 'session');
 return (
  <div className="flex h-screen w-full flex-wrap items-center justify-center space-x-3">
   <LinkButton href="/issues" text="Pinned Issues" icon={<StarFilledIcon color="gold" />} />
  </div>
 );
};
export default index;

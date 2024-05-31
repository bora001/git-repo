import { StarFilledIcon } from '@radix-ui/react-icons';
import { handler } from './api/auth/[...nextauth]/route';
import LinkButton from '@/components/ui/LinkButton';
const index = async () => {
 const session = await handler.auth();
 console.log(session, 'session');
 return (
  <div className="flex h-screen w-full flex-wrap items-center justify-center space-x-3">
   <LinkButton href="/issues" text="Pinned Issues" icon={<StarFilledIcon color="gold" />} />
  </div>
 );
};
export default index;

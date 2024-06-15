import { StarFilledIcon } from '@radix-ui/react-icons';
import LinkButton from '@/components/ui/LinkButton';
const index = async () => {
 return (
  <div className="flex h-screen w-full flex-wrap items-center justify-center space-x-3">
   <LinkButton href="/issues" text="Pinned Issues" icon={<StarFilledIcon color="gold" />} />
  </div>
 );
};
export default index;

import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

const page = () => {
 return (
  <div className="item-center  flex h-screen w-screen items-center justify-center">
   <Button className="space-x-4 bg-black hover:bg-blue-900">
    <GitHubLogoIcon />
    <p>Github Login</p>
   </Button>
  </div>
 );
};
export default page;

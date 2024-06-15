import { ResetIcon } from '@radix-ui/react-icons';
import LinkButton from '../../ui/LinkButton';
import { twMerge } from 'tailwind-merge';

const NoPinnedList = () => {
 return (
  <div
   className={twMerge(
    'flex h-screen flex-col items-center justify-center',
    'space-y-8 text-center font-medium text-blue-400',
   )}
  >
   <p>
    No Branches Pinned <br /> Please select a branch to pin.
   </p>
   <LinkButton
    className="flex items-center space-x-2"
    href="/"
    reverse
    text="Back to home"
    icon={<ResetIcon />}
   />
  </div>
 );
};
export default NoPinnedList;

'use client';
import { StarredRepoListType } from '@/app/issues/page';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
const StarredLink = ({ url, name, owner: { avatarUrl } }: StarredRepoListType) => {
 return (
  <div className="flex items-center justify-between">
   <div className="flex  items-center space-x-3">
    <Image src={avatarUrl} width={26} height={26} alt={`${name}_image`} className="rounded-md" />
    <p className="text-sm font-medium capitalize text-gray-700">{name}</p>
   </div>

   {/* <Link href={url} target="_blank">
    <ExternalLinkIcon className="gray h-3.5 w-3.5" />
   </Link> */}
  </div>
 );
};
export default StarredLink;
'use client';

import { SelectedRepoType } from '@/query/issues/issue-query.type';
import { formatNumber } from '@/utils/formatNumber';
import { ExternalLinkIcon, EyeOpenIcon, StarIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

const SelectedBranch = ({
 name,
 url,
 owner: { avatarUrl },
 description,
 stargazerCount,
 watchers: { totalCount: watchCount },
}: SelectedRepoType) => {
 const status = [
  {
   icon: <EyeOpenIcon />,
   count: watchCount,
  },
  {
   icon: <StarIcon />,
   count: stargazerCount,
  },
 ];

 return (
  <div className="round-container flex justify-between">
   {/* left */}
   <div>
    <div className="flex items-center space-x-2">
     {avatarUrl && (
      <Image src={avatarUrl} width={30} height={30} alt="repository image" className="rounded-sm" />
     )}
     <div className="capitalize">{name}</div>
     <Link href={url} target="_blank">
      <ExternalLinkIcon className="h-3.5 w-3.5 text-gray-600" />
     </Link>
    </div>
    <div className="mt-3 text-sm">{description}</div>
   </div>
   {/* right */}
   <div className="flex items-center space-x-2">
    {status.map((item, index) => (
     <div className="flex items-center space-x-1" key={index}>
      {item.icon}
      <p className="text-xs">{formatNumber(item.count)}</p>
     </div>
    ))}
   </div>
  </div>
 );
};
export default SelectedBranch;

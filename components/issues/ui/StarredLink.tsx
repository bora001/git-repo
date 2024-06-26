'use client';
import { StarredRepoListType } from '@/query/issues/issue-query.type';
import Image from 'next/image';
import { IssueSelectedType } from '../StarredList';
import { twMerge } from 'tailwind-merge';

interface StarredLinkType extends StarredRepoListType {
 onClick: (selected: IssueSelectedType) => void;
 isSelected: boolean;
}
const StarredLink = ({
 name,
 owner: { login, avatarUrl },
 onClick,
 isSelected,
}: StarredLinkType) => {
 return (
  <div
   className={twMerge(
    'flex items-center justify-between p-2',
    'cursor-pointer rounded-sm border border-transparent',
    isSelected && 'bg-blue-100',
   )}
   onClick={() => onClick({ name, login })}
  >
   <div className="flex  items-center space-x-3">
    <Image src={avatarUrl} width={26} height={26} alt={`${name}_image`} className="rounded-md" />
    <p className="text-sm font-medium capitalize text-gray-700">{name}</p>
   </div>
  </div>
 );
};
export default StarredLink;

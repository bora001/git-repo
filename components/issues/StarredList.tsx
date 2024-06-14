'use client';
import StarredLink from './ui/StarredLink';
import { StarredRepoListType } from '@/query/issues/issue-query.type';
import { useSearchParams } from 'next/navigation';
import useSetURL from '@/hooks/useSetURL';
import { FILTER_OPTIONS, FILTER_STATUS } from '../../app/issues/constants';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
export type IssueSelectedType = {
 name: string;
 login: string;
};
const StarredList = ({
 totalCount,
 nodes,
}: {
 totalCount: number;
 nodes: StarredRepoListType[];
}) => {
 const searchParams = useSearchParams();
 const current = searchParams.get('name');
 const { setURL } = useSetURL();
 const setSelected = ({ login, name }: IssueSelectedType) => {
  setURL({
   login,
   name,
   status: FILTER_STATUS[0].title ?? '',
   sort: FILTER_OPTIONS[0].value ?? '',
  });
 };

 const [toggle, setToggle] = useState(true);
 return (
  <div
   className={twMerge(
    'absolute h-screen space-y-3 bg-white p-10',
    'z-50 shadow-2xl transition-all duration-500',
    'lg:relative lg:left-0 lg:shadow-lg lg:duration-0',
    toggle ? 'left-[-289px]' : 'left-[0]',
   )}
  >
   <DoubleArrowRightIcon
    className={twMerge(
     'absolute block h-5 w-5',
     'right-3 top-3 z-50',
     'cursor-pointer text-blue-500',
     'lg:hidden',
     toggle && 'rotate-180',
    )}
    onClick={() => setToggle((prev) => !prev)}
   />
   <p className="ml-3 text-sm font-medium">
    Total <span className="font-bold text-blue-600">{totalCount}</span>
   </p>

   <div className="max-h-[250px] w-[250px] flex-col space-y-1 overflow-auto rounded-md border p-3">
    {nodes.length &&
     nodes.map((item) => (
      <StarredLink
       key={`${item.name}_${item.owner.avatarUrl}`}
       {...item}
       onClick={setSelected}
       isSelected={current === item.name}
      />
     ))}
   </div>
  </div>
 );
};
export default StarredList;

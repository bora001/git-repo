'use client';
import StarredLink from './ui/StarredLink';
import { StarredRepoListType } from '@/query/issues/issue-query.type';
import { useSearchParams } from 'next/navigation';
import useSetURL from '@/hooks/useSetURL';
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
  setURL({ login, name });
 };
 return (
  <div className="space-y-3 p-10">
   <p className="ml-3 text-sm font-medium">
    Total{' '}
    <span
     className="
    font-bold
    text-blue-600"
    >
     {totalCount}
    </span>
   </p>

   <div className="max-h-[250px] w-[250px] flex-col space-y-1 overflow-y-scroll rounded-md border p-3">
    {nodes.map((item) => (
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

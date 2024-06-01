'use client';
import StarredLink from './ui/StarredLink';
import { StarredRepoListType } from '@/app/issues/page';

const StarredList = ({
 totalCount,
 nodes,
}: {
 totalCount: number;
 nodes: StarredRepoListType[];
}) => {
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
   <div className="h-[250px] w-[250px] flex-col space-y-3 overflow-y-scroll rounded-md border p-4">
    {[...nodes, ...nodes].map((item) => (
     <StarredLink key={item.url} {...item} />
    ))}
   </div>
  </div>
 );
};
export default StarredList;

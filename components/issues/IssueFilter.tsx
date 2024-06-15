'use client';

import useSetURL from '@/hooks/useSetURL';
import CustomSelect from '../ui/CustomSelect';
import { Button } from '../ui/button';
import { FILTER_OPTIONS, FILTER_STATUS } from '../../app/issues/constants';
import { twMerge } from 'tailwind-merge';
import useGetSearchParams from '@/hooks/useGetSearchParams';

const IssueFilter = () => {
 const { setURL } = useSetURL();
 const { getSearchParams } = useGetSearchParams();
 const [status, sort] = getSearchParams(['status', 'sort']);

 const onChangeSelect = (option: string) => {
  setURL({ sort: option });
 };

 return (
  <div className={twMerge('flex items-end justify-between', 'max-sm:flex-col max-sm:space-y-3')}>
   <div className={twMerge('space-x-1', 'max-sm:flex max-sm:w-full')}>
    {FILTER_STATUS.map(({ title }) => (
     <Button
      className={twMerge(
       'h-8 p-3',
       'max-sm:flex-1',
       status === title ? 'bg-red-400 hover:bg-red-400' : 'bg-blue-400',
      )}
      key={title}
      onClick={(e) => setURL({ status: title })}
     >
      {title}
     </Button>
    ))}
   </div>
   <div className="max-sm:w-full">
    <CustomSelect
     onChange={onChangeSelect}
     placeholder={(FILTER_OPTIONS.filter((item) => item.value === sort)[0]?.option as string) ?? ''}
     selectObj={FILTER_OPTIONS}
    />
   </div>
  </div>
 );
};
export default IssueFilter;

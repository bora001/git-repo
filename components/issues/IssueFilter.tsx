'use client';

import useSetURL from '@/hooks/useSetURL';
import CustomSelect, { SelectItemType } from '../ui/CustomSelect';
import { Button } from '../ui/button';
import { useSearchParams } from 'next/navigation';

const IssueFilter = () => {
 const { setURL } = useSetURL();
 const params = useSearchParams();
 const status = params.get('status') ?? '';
 const FILTER_STATUS = [{ title: 'All' }, { title: 'Open' }, { title: 'Closed' }];
 const FILTER_OPTIONS: SelectItemType[] = [
  { option: 'Newest', value: 'CREATED_AT' },
  { option: 'Most Commented', value: 'COMMENTS' },
  { option: 'Recently Updated', value: 'UPDATED_AT' },
 ];
 //best match, reactions
 const onChangeSelect = (option: string) => {
  setURL({ sort: option });
 };

 return (
  <div className="flex justify-between">
   <div className="space-x-1">
    {FILTER_STATUS.map(({ title }) => (
     <Button
      className={`h-8 p-3 ${status === title ? 'bg-red-400 hover:bg-red-400' : 'bg-blue-400'}`}
      key={title}
      onClick={(e) => setURL({ status: title })}
     >
      {title}
     </Button>
    ))}
   </div>
   <div>
    <CustomSelect onChange={onChangeSelect} placeholder={'Sort'} selectObj={FILTER_OPTIONS} />
   </div>
  </div>
 );
};
export default IssueFilter;

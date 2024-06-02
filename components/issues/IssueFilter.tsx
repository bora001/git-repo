'use client';

import useSetURL from '@/hooks/useSetURL';
import CustomSelect, { SelectItemType } from '../ui/CustomSelect';
import { Button } from '../ui/button';

const IssueFilter = () => {
 const { setURL } = useSetURL();
 const FILTER_STATUS = [{ title: 'All' }, { title: 'Open' }, { title: 'Closed' }];
 const FILTER_OPTIONS: SelectItemType[] = [
  { option: 'Newest', value: 'createdAt' },
  { option: 'Most Commented', value: 'comments' },
  { option: 'Recently Updated', value: 'editedAt' },
 ];
 //best match, reactions
 const onChangeSelect = (option: string) => {
  setURL({ sort: option });
 };

 return (
  <div className="flex justify-between">
   <div className="space-x-1">
    {FILTER_STATUS.map(({ title }) => (
     <Button className="h-8 bg-blue-400 p-3" key={title} onClick={(e) => setURL({ status: title })}>
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

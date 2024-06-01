'use client';

import CustomSelect, { SelectItemType } from '../ui/CustomSelect';
import { Button } from '../ui/button';

const IssueFilter = () => {
 const FILTER_STATUS = [{ title: 'All' }, { title: 'Open' }, { title: 'Closed' }];
 const FILTER_OPTIONS: SelectItemType[] = [
  { option: 'Newest', value: 'createdAt' },
  { option: 'Most Commented', value: 'comments' },
  { option: 'Recently Updated', value: 'editedAt' },
 ];
 //best match, reactions
 return (
  <div className="flex justify-between">
   <div className="space-x-1">
    {FILTER_STATUS.map((item) => (
     <Button className="h-8 bg-blue-400 p-3" key={item.title}>
      {item.title}
     </Button>
    ))}
   </div>
   <div>
    <CustomSelect placeholder={'Sort'} selectObj={FILTER_OPTIONS} />
   </div>
  </div>
 );
};
export default IssueFilter;

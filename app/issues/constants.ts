import { SelectItemType } from '../../components/ui/CustomSelect';

export const FILTER_STATUS = [{ title: 'All' }, { title: 'Open' }, { title: 'Closed' }];
export const FILTER_OPTIONS: SelectItemType[] = [
 { option: 'Newest', value: 'CREATED_AT' },
 { option: 'Most Commented', value: 'COMMENTS' },
 { option: 'Recently Updated', value: 'UPDATED_AT' },
];

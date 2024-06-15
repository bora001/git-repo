'use client';

import { twMerge } from 'tailwind-merge';
import NotSelected from './ui/NotSelected';
import IssueTable from './IssueTable';
import IssueFilter from './IssueFilter';
import SelectedBranch from './SelectedBranch';
import { SelectedRepoType } from '@/query/issues/issue-query.type';
type IssuePageType = {
 notSelected: boolean;
 access: string;
 repository: SelectedRepoType;
};
const IssuePage = ({ notSelected, access, repository }: IssuePageType) => {
 return (
  <div
   className={twMerge(
    'flex w-full flex-col space-y-3 bg-blue-50 p-10',
    'max-sm:pl-[50px] sm:pl-[60px] md:pl-[40px]',
   )}
  >
   {notSelected ? (
    <NotSelected />
   ) : (
    <>
     <SelectedBranch {...repository} />
     <IssueFilter />
     <IssueTable {...{ access }} />
    </>
   )}
  </div>
 );
};
export default IssuePage;

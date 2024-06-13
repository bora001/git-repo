'use server';
import { checkReturn } from '@/actions/auth-check';
import { getSelectedRepoInfo } from '@/actions/issues/get-selected-repo-info';
import { getStarredRepoData } from '@/actions/issues/get-starred-repo';
import IssueFilter from '@/components/issues/IssueFilter';
import IssueTable from '@/components/issues/IssueTable';
import NoPinnedList from '@/components/issues/NoPinnedList';
import NotSelected from '@/components/issues/NotSelected';
import SelectedBranch from '@/components/issues/SelectedBranch';
import StarredList from '@/components/issues/StarredList';
import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';

const Issues = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
 await checkReturn();
 const { name, login } = searchParams ?? {};

 const notSelected = !name || !login;
 const access = cookies().get('access')?.value ?? '';
 const auth = cookies().get('login')?.value ?? '';
 const starredRepoData = await getStarredRepoData({ access, login: auth }).then((res) => {
  if (res.status === '401') {
   redirect('/login?callback=/issues', 'replace' as RedirectType);
  }
  return res;
 });

 const { nodes, totalCount } = starredRepoData?.data?.user?.starredRepositories ?? {};
 const selectedRepoData = !notSelected
  ? await getSelectedRepoInfo({
     access,
     name: searchParams.name,
     owner: searchParams.login,
    })
  : { data: {} };

 const {
  data: { repository },
 } = selectedRepoData;
 return (
  <div>
   {nodes?.length ? (
    <div className="flex h-screen w-screen">
     <StarredList {...{ totalCount, nodes }} />
     <div className="flex w-full flex-col space-y-3 bg-blue-50 p-10">
      {notSelected && <NotSelected />}
      {!notSelected && (
       <>
        <SelectedBranch {...repository} />
        <IssueFilter />
        <IssueTable {...{ access }} />
       </>
      )}
     </div>
    </div>
   ) : (
    <NoPinnedList />
   )}
  </div>
 );
};
export default Issues;

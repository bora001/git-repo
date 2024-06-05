import { checkReturn } from '@/actions/auth-check';
import { getSelectedRepoInfo } from '@/actions/issues/get-selected-repo-info';
import { getStarredRepoData } from '@/actions/issues/get-starred-repo';
import IssueFilter from '@/components/issues/IssueFilter';
import IssueTable from '@/components/issues/IssueTable';
import SelectedBranch from '@/components/issues/SelectedBranch';
import StarredList from '@/components/issues/StarredList';
import { cookies } from 'next/headers';

const Issues = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
 await checkReturn();
 const { name, login } = searchParams ?? {};
 const notSelected = !name || !login;

 const access = cookies().get('access')?.value as string;
 const auth = cookies().get('login')?.value as string;
 const starredRepoData = await getStarredRepoData({ access, login: auth });
 const selectedRepoData = !notSelected
  ? await getSelectedRepoInfo({
     access,
     name: searchParams.name,
     owner: searchParams.login,
    })
  : { data: {} };
 const { nodes, totalCount } = starredRepoData.data?.user?.starredRepositories ?? {};
 const {
  data: { repository },
 } = selectedRepoData;

 return (
  <div className="flex h-screen w-screen">
   <StarredList {...{ totalCount, nodes }} />
   <div className="w-full space-y-3 bg-blue-50 p-10">
    {!notSelected && <SelectedBranch {...repository} />}
    <IssueFilter />
    <IssueTable {...{ name, login, access }} />
   </div>
  </div>
 );
};
export default Issues;

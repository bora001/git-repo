'use server';
import { checkReturn } from '@/actions/auth-check';
import { getSelectedRepoInfo } from '@/actions/issues/get-selected-repo-info';
import { getStarredRepoData } from '@/actions/issues/get-starred-repo';
import IssuePage from '@/components/issues/IssuePage';
import NoPinnedList from '@/components/issues/ui/NoPinnedList';
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
     <IssuePage {...{ notSelected, access, repository }} />
    </div>
   ) : (
    <NoPinnedList />
   )}
  </div>
 );
};
export default Issues;

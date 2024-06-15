'use server';
import { checkReturn } from '@/actions/auth-check';
import IssuePage from '@/components/issues/IssuePage';
import NoPinnedList from '@/components/issues/ui/NoPinnedList';
import StarredList from '@/components/issues/StarredList';
import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';
import graphqlHandler from '@/actions/graphql-handler/graphql-handler';
import { GET_USER_STARRED_REPOS, SELECTED_REPOS } from '@/query/issues/issues-query';

const Issues = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
 await checkReturn();
 const { name, login } = searchParams ?? {};
 const notSelected = !name || !login;
 const access = cookies().get('access')?.value ?? '';
 const auth = cookies().get('login')?.value ?? '';
 const starredRepoData = await graphqlHandler(GET_USER_STARRED_REPOS({ login: auth }), [
  'starred',
 ]).then((res) => {
  if (res.status === '401') {
   redirect('/login?callback=/issues', 'replace' as RedirectType);
  }
  return res;
 });
 const { nodes, totalCount } = starredRepoData?.data?.user?.starredRepositories ?? {};

 const selectedRepoData = !notSelected
  ? await graphqlHandler(SELECTED_REPOS({ name, owner: searchParams.login }), ['selected'])
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

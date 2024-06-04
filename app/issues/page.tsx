import { checkReturn } from '@/actions/auth-check';
import IssueFilter from '@/components/issues/IssueFilter';
import IssueTable from '@/components/issues/IssueTable';
import SelectedBranch from '@/components/issues/SelectedBranch';
import StarredList from '@/components/issues/StarredList';
import { GET_USER_STARRED_REPOS, SELECTED_REPOS } from '@/query/issues/issues-query';
import { cookies } from 'next/headers';

const Issues = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
 await checkReturn();

 const { name, login } = searchParams ?? {};
 const notSelected = !name || !login;
 const access = cookies().get('access')?.value;
 const starredRepoData = await fetch(process.env.GRAPHQL_GITHUB_API_URL as string, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   Authorization: `Bearer ${access}`,
  },
  body: JSON.stringify({
   query: GET_USER_STARRED_REPOS,
  }),
  next: { tags: ['starred'] },
 }).then((res) => res.json());

 const selected = !notSelected
  ? await fetch(process.env.GRAPHQL_GITHUB_API_URL as string, {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access}`,
     },
     body: JSON.stringify({
      query: SELECTED_REPOS({ name: searchParams.name, owner: searchParams.login }),
     }),
     next: { tags: ['selected'] },
    }).then((res) => res.json())
  : { data: {} };

 const { nodes, totalCount } = starredRepoData.data?.user?.starredRepositories ?? {};
 const {
  data: { repository },
 } = selected;
 return (
  <div className="flex h-screen w-screen">
   <StarredList {...{ totalCount, nodes }} />
   <div className="w-full space-y-3 bg-blue-50 p-10">
    {!notSelected && <SelectedBranch {...repository} />}
    <IssueFilter />
    <IssueTable />
   </div>
  </div>
 );
};
export default Issues;

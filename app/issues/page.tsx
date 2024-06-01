import IssueFilter from '@/components/issues/IssueFilter';
import IssueTable from '@/components/issues/IssueTable';
import SelectedBranch from '@/components/issues/SelectedBranch';
import StarredList from '@/components/issues/StarredList';
import { GET_USER_STARRED_REPOS } from '@/query/issues/issues-query';
import { cookies } from 'next/headers';

const Issues = async () => {
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
 const { nodes, totalCount } = starredRepoData.data?.user?.starredRepositories ?? {};
 return (
  <div className="flex h-screen w-screen">
   <StarredList {...{ totalCount, nodes }} />
   <div className="w-full bg-blue-50">
    <SelectedBranch />
    <IssueFilter />
    <IssueTable />
   </div>
  </div>
 );
};
export default Issues;

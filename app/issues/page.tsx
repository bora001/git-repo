import IssueFilter from '@/components/issues/IssueFilter';
import IssueTable from '@/components/issues/IssueTable';
import SelectedBranch from '@/components/issues/SelectedBranch';
import StarredList from '@/components/issues/StarredList';
import { cookies } from 'next/headers';
export type StarredRepoListType = {
 name: string;
 url: string;
 owner: {
  avatarUrl: string;
 };
};
const Issues = async () => {
 const login = cookies().get('login')?.value;
 const access = cookies().get('access')?.value;

 const STARRED_URL = `${process.env.GRAPHQL_GITHUB_API_URL}`;
 const GET_USER_STARRED_REPOS = `
  query getUserStarredRepos {
   user(login: "${login}") {
    login
    starredRepositories(first: 10) {
     totalCount
     nodes {
      name
      url
      owner {
        avatarUrl
      }
      }
    }
   }
  }
 `;

 const test = await fetch(STARRED_URL, {
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
 const { nodes, totalCount } = test.data?.user?.starredRepositories ?? {};
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

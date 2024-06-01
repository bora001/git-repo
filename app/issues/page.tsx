import StarredLink, { StarredLinkType } from '@/components/issues/StarredLink';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cookies } from 'next/headers';

const Issues = async () => {
 const login = cookies().get('login')?.value;
 const access = cookies().get('access')?.value;

 const STARRED_URL = `${process.env.GRAPHQL_GITHUB_API_URL}`;
 const GET_USER_STARRED_REPOS = `
  query getUserStarredRepos {
   user(login: "${login}") {
    login
    starredRepositories(first: 10) {
     nodes {
      name
      url
      owner {
        avatarUrl
      }
     }
     totalCount
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
  <div className="space-y-3 p-10">
   <p className="ml-3 text-sm font-medium">
    Total{' '}
    <span
     className="
    font-bold
    text-blue-600"
    >
     {totalCount}
    </span>
   </p>
   <ScrollArea className="h-[250px]  w-[250px] rounded-md border p-4">
    <div className="flex-col space-y-3">
     {nodes?.map((item: StarredLinkType) => <StarredLink key={item.url} {...item} />)}
     {nodes?.map((item: StarredLinkType) => <StarredLink key={item.url} {...item} />)}
     {nodes?.map((item: StarredLinkType) => <StarredLink key={item.url} {...item} />)}
    </div>
   </ScrollArea>
  </div>
 );
};
export default Issues;

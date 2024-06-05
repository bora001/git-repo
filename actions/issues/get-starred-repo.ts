import { GET_USER_STARRED_REPOS } from '@/query/issues/issues-query';

export const getStarredRepoData = ({ access, login }: { access: string; login: string }) =>
 fetch(process.env.NEXT_PUBLIC_GRAPHQL_GITHUB_API_URL as string, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   Authorization: `Bearer ${access}`,
  },
  body: JSON.stringify({
   query: GET_USER_STARRED_REPOS({ login }),
  }),
  next: { tags: ['starred'] },
 }).then((res) => res.json());

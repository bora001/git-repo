import { GET_USER_STARRED_REPOS } from '@/query/issues/issues-query';
import { ENV_CONFIG } from '@/env-config';

export const getStarredRepoData = ({ access, login }: { access: string; login: string }) =>
 fetch(ENV_CONFIG.GRAPHQL_API as string, {
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

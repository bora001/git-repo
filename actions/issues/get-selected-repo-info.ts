import { ENV_CONFIG } from '@/env-config';
import { SELECTED_REPOS } from '@/query/issues/issues-query';

export const getSelectedRepoInfo = ({
 access,
 name,
 owner,
}: {
 access: string;
 name: string;
 owner: string;
}) =>
 fetch(ENV_CONFIG.GRAPHQL_API as string, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   Authorization: `Bearer ${access}`,
  },
  body: JSON.stringify({
   query: SELECTED_REPOS({ name, owner }),
  }),
  next: { tags: ['selected'] },
 }).then((res) => res.json());

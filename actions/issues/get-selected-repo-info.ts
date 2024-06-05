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
 fetch(process.env.GRAPHQL_GITHUB_API_URL as string, {
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

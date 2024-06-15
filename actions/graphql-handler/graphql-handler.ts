import { ENV_CONFIG } from '@/env-config';
import { cookies } from 'next/headers';

export const graphqlHandler = async (query: string, tags: string[]) => {
 const access = cookies().get('access')?.value ?? '';
 return fetch(ENV_CONFIG.GRAPHQL_API as string, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   Authorization: `Bearer ${access}`,
  },
  body: JSON.stringify({
   query,
  }),
  next: { tags },
 }).then((res) => res.json());
};
export default graphqlHandler;

import { cookies } from 'next/headers';

const login = cookies().get('login')?.value;

export const GET_USER_STARRED_REPOS = `
  query getUserStarredRepos {
   user(login: "${login}") {
    login
    starredRepositories(first: 10) {
     totalCount
     nodes {
      name
      url
      owner {
        login
        avatarUrl
      }
      }
    }
   }
  }
 `;

export const SELECTED_REPOS = ({ name, owner }: { name: string; owner: string }) => `
 query getRepoInfo {
  repository(name:"${name}",owner:"${owner}") {
    name,
    url,
    owner{
      login
      avatarUrl
    }
    description,
    stargazerCount,
    watchers{
      totalCount
    }
  }
}
`;

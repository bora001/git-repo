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
        avatarUrl
      }
      }
    }
   }
  }
 `;

export const SELECTED_REPOS = `
 query getRepoInfo {
  repository(name:"chakra-ui",owner:"chakra-ui") {
    name,
    url,
    owner{
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

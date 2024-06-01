import { cookies } from "next/headers";

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

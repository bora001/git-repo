export const GET_USER_STARRED_REPOS = ({ login }: { login: string }) => `
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

export const SELECTED_REPO_ISSUE_LIST = ({ name, owner }: { name: string; owner: string }) => `
query getRepoInfo {
    repository(name:"${name}",owner:"${owner}") {
    issues(last:10, states:OPEN){
      nodes{
 				title,
        createdAt,
        number,
        editor{
          login,
          avatarUrl
        }
        comments{
          totalCount
        }
      }
    }
  }
}
`;

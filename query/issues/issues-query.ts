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

export const SELECTED_REPO_ISSUE_LIST = ({
 name,
 owner,
 last,
 states,
 sort,
}: {
 name: string;
 owner: string;
 last: number;
 states: string;
 sort: string;
}) => `
query getRepoInfo {
    repository(name:"${name}",owner:"${owner}") {
    issues(last:${last}${states !== 'ALL' && states.length ? `,states:${states}` : ``}${sort.length > 0 ? `, orderBy:{field:${sort},direction:ASC}` : ''} ){
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

import { FILTER_STATUS } from '@/app/issues/constants';

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
 first,
 states,
 sort,
 before,
 after,
}: {
 name: string;
 owner: string;
 first: number;
 states: string;
 sort: string;
 before: string | null;
 after: string | null;
}) => `
  query getRepoInfo {
    repository(name: "${name}", owner: "${owner}") {
      issues(first: ${first}${states !== FILTER_STATUS[0].title.toUpperCase() ? `, states: ${states}` : ''}, orderBy: {field: ${sort}, direction: DESC}${before ? `, before: "${before}"` : ''}${after ? `, after: "${after}"` : ''}) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        nodes {
          title
          createdAt
          number
          editor {
            login
            avatarUrl
          }
          comments {
            totalCount
          }
        }
      }
    }
  }
`;

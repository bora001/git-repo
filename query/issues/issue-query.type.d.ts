export type StarredRepoListType = {
 name: string;
 owner: {
  login: string;
  avatarUrl: string;
 };
};

export interface SelectedRepoType extends StarredRepoListType {
 url: string;
 description: string;
 stargazerCount: number;
 watchers: {
  totalCount: number;
 };
}

export type SelectedRepoIssueListNodesType = {
 title: string;
 createdAt: string;
 number: number;
 editor: {
  login: string;
  avatarUrl: string;
 };
 comments: {
  totalCount: number;
 };
};
export type SelectedRepoIssueListType = {
 repository: {
  issues: {
   pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
   };
   nodes: SelectedRepoIssueListNodesType[];
  };
 };
};

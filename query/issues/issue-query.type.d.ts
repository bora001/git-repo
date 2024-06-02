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

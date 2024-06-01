export type StarredRepoListType = {
 name: string;
 url: string;
 owner: {
  avatarUrl: string;
 };
};

export interface SelectedRepoType extends StarredRepoListType {
 description: string;
 stargazerCount: number;
 watchers: {
  totalCount: number;
 };
}

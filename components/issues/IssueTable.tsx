'use client';
import { SelectedRepoIssueListType } from '@/query/issues/issue-query.type';
import { SELECTED_REPO_ISSUE_LIST } from '@/query/issues/issues-query';
import { useQuery } from '@tanstack/react-query';
import request, { gql } from 'graphql-request';

const IssueTable = ({
 name,
 login: owner,
 access,
}: {
 name: string;
 login: string;
 access: string;
}) => {
 const { data }: { data: SelectedRepoIssueListType | undefined } = useQuery({
  queryKey: ['issue-table'],
  enabled: !!access && !!name && !!owner,
  queryFn: () =>
   request(
    'https://api.github.com/graphql',
    gql`
     ${SELECTED_REPO_ISSUE_LIST({ name, owner })}
    `,
    { last: 10 },
    {
     Authorization: `Bearer ${access}`,
    },
   ),
 });

 console.log(data?.repository.issues.nodes, 'data');

 return <div className="round-container">{name}</div>;
};
export default IssueTable;

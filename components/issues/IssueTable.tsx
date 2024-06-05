'use client';
import { SelectedRepoIssueListType } from '@/query/issues/issue-query.type';
import { SELECTED_REPO_ISSUE_LIST } from '@/query/issues/issues-query';
import { useQuery } from '@tanstack/react-query';
import request, { gql } from 'graphql-request';
import { useMemo } from 'react';
import dayjs from 'dayjs';
import {
 createColumnHelper,
 flexRender,
 getCoreRowModel,
 useReactTable,
} from '@tanstack/react-table';
import { useSearchParams } from 'next/navigation';
import { SymbolIcon } from '@radix-ui/react-icons';

type IssueTableDataType = SelectedRepoIssueListType['repository']['issues']['nodes'];
const IssueTable = ({ access }: { access: string }) => {
 const params = useSearchParams();
 const [name, owner, states, sort] = [
  params.get('name') ?? '',
  params.get('login') ?? '',
  params.get('status')?.toUpperCase() ?? '',
  params.get('sort') ?? '',
 ];
 const isValidData = !!name.length && !!owner.length;
 const { data, isLoading, isFetching } = useQuery({
  queryKey: ['issue-table', name, owner, states, sort],
  enabled: !!access && isValidData,
  queryFn: () =>
   request(
    process.env.NEXT_PUBLIC_GRAPHQL_GITHUB_API_URL as string,
    gql`
     ${SELECTED_REPO_ISSUE_LIST({ name, owner, last: 10, states, sort })}
    `,
    {},
    {
     Authorization: `Bearer ${access}`,
    },
   ),
 });
 const tableData: any = useMemo(() => data?.repository.issues.nodes ?? [], [data]);
 const columnHelper = createColumnHelper<IssueTableDataType[]>();

 const columns: any = [
  columnHelper.accessor('number', {
   cell: (info) => info.getValue(),
   header: () => <span>No.</span>,
   size: 270,
  }),
  columnHelper.accessor('title', {
   cell: (info) => <p className="text-left">{`${info.getValue()}`}</p>,
   header: () => <span>Title</span>,
  }),
  columnHelper.accessor('createdAt', {
   header: () => 'CreatedAt',
   cell: (info) => (
    <p className="whitespace-nowrap">{dayjs(`${info.getValue()}`).format('MMM-YYYY')}</p>
   ),
  }),
  columnHelper.accessor('comments.totalCount', {
   header: () => 'Comment',
   cell: (info) => info.renderValue(),
  }),
 ];

 const table = useReactTable({
  data: tableData,
  columns,
  getCoreRowModel: getCoreRowModel(),
 });

 return (
  <div
   className={`round-container flex  ${(isFetching || isLoading) && 'min-h-[420px] items-center justify-center'} flex-1 overflow-auto`}
  >
   {isFetching || isLoading ? (
    <SymbolIcon className="h-6 w-6 animate-spin text-blue-500" />
   ) : (
    <table className="w-full overflow-hidden  rounded-md">
     <thead>
      {table.getHeaderGroups().map((headerGroup) => (
       <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
         <th key={header.id} className="bg-blue-100 px-5 py-2 text-sm">
          {header.isPlaceholder
           ? null
           : flexRender(header.column.columnDef.header, header.getContext())}
         </th>
        ))}
       </tr>
      ))}
     </thead>
     <tbody>
      {table.getRowModel().rows.map((row) => (
       <tr key={row.id}>
        {row.getVisibleCells().map((cell) => (
         <td className="px-5 py-2 text-center text-sm text-gray-800" key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
         </td>
        ))}
       </tr>
      ))}
     </tbody>
    </table>
   )}
  </div>
 );
};
export default IssueTable;

'use client';
import {
 SelectedRepoIssueListNodesType,
 SelectedRepoIssueListType,
} from '@/query/issues/issue-query.type';
import { SELECTED_REPO_ISSUE_LIST } from '@/query/issues/issues-query';
import { useQuery } from '@tanstack/react-query';
import request, { gql } from 'graphql-request';
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import {
 createColumnHelper,
 flexRender,
 getCoreRowModel,
 getPaginationRowModel,
 useReactTable,
} from '@tanstack/react-table';
import { ChatBubbleIcon, SymbolIcon } from '@radix-ui/react-icons';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { formatNumber } from '@/utils/formatNumber';
import { ENV_CONFIG } from '@/env-config';
import { twMerge } from 'tailwind-merge';
import { ISSUE_TABLE_CONSTANTS } from './constants/issue.constants';
import useGetSearchParams from '@/hooks/useGetSearchParams';

type CursorType = {
 before: null | string;
 after: null | string;
};
const IssueTable = ({ access }: { access: string }) => {
 const [pageCount, setPageCount] = useState(0);
 const [cursor, setCursor] = useState<CursorType>({
  before: null, //before cursor
  after: null, //after cursor
 });
 const { PAGE_SIZE, REQUEST_PAGES } = ISSUE_TABLE_CONSTANTS;
 const [pagination, setPagination] = useState({
  pageIndex: 0, //initial page index
  pageSize: PAGE_SIZE, //default page size
 });

 const { getSearchParams } = useGetSearchParams();
 const [name, owner, states, sort] = getSearchParams(['name', 'login', 'status', 'sort']);

 const requestParams = {
  name,
  owner,
  first: REQUEST_PAGES,
  states: states.toUpperCase(),
  sort,
  before: cursor.before,
  after: cursor.after,
 };
 const isValidData = !!name.length && !!owner.length;
 const { data, isLoading, isFetching } = useQuery({
  queryKey: ['issue-table', name, owner, states, sort, cursor.before, cursor.after],
  enabled: !!access && isValidData,
  queryFn: () =>
   request<SelectedRepoIssueListType>(
    ENV_CONFIG.GRAPHQL_API as string,
    gql`
     ${SELECTED_REPO_ISSUE_LIST(requestParams)}
    `,
    {},
    {
     Authorization: `Bearer ${access}`,
    },
   ),
 });

 const tableData = useMemo(() => data?.repository.issues.nodes ?? [], [data]);
 const columnHelper = createColumnHelper<SelectedRepoIssueListNodesType>();
 const columns = [
  columnHelper.accessor('number', {
   cell: (info) => info.getValue(),
   header: () => <span>No.</span>,
   size: 270,
  }),
  columnHelper.accessor('title', {
   cell: (info) => (
    <Link
     className="underline"
     target="_blank"
     href={`https://github.com/${owner}/${name}/issues/${info.row.original.number}`}
    >
     <p className="text-left">{`${info.getValue()}`}</p>
    </Link>
   ),
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
   cell: (info) => formatNumber(info.renderValue() ?? 0),
  }),
 ];

 const table = useReactTable({
  data: tableData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  onPaginationChange: setPagination, //update the pagination state when internal APIs mutate the pagination state
  state: {
   pagination,
  },
 });

 const { hasNextPage, hasPreviousPage, startCursor, endCursor } =
  data?.repository.issues.pageInfo ?? {};
 const handleNextPage = () => {
  setCursor((prev) => ({ before: null, after: endCursor ?? null }));
  setPageCount((prev) => prev + 1);
 };

 const handlePrevPage = () => {
  setCursor((prev) => ({ before: startCursor ?? null, after: null }));
  setPageCount((prev) => prev - 1);
 };

 const gotoPage = (index: number) => {
  table.setPageIndex(index);
 };

 const getCellWidth = (id: string) => {
  const isTitle = id.includes('title') && 'basis-[70%] sm:basis-[60%] max-sm:basis-[80%]';
  const isNumber = id.includes('number') && 'basis-[10%] max-sm:basis-[20%]';
  return isTitle || isNumber || 'basis-[10%] sm:basis-[15%]';
 };

 const cellStyling = (id: string) => {
  // mobile + common Styling
  let condition = '';
  const hiddenOnMobile = ['createdAt', 'comments_totalCount'];
  if (hiddenOnMobile.includes(id)) {
   condition = 'max-sm:hidden';
  }
  return `px-5 py-2 text-sm ${condition}`;
 };
 return (
  <div
   className={twMerge(
    'min-h-[220px] w-full  rounded-md bg-white',
    'flex flex-1 flex-col ',
    (isFetching || isLoading) && 'items-center justify-center',
   )}
  >
   {isFetching || isLoading ? (
    <SymbolIcon className="h-6 w-6 animate-spin text-blue-500" />
   ) : (
    <div className="flex h-full w-full flex-1 flex-col">
     <table className="relative top-0 flex basis-[90%] flex-col overflow-auto">
      <thead className="sticky top-0 z-10 flex h-[40px] w-full bg-white">
       {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="flex w-full">
         {headerGroup.headers.map((header) => (
          <th
           key={header.id}
           className={twMerge('bg-blue-100', cellStyling(header.id), getCellWidth(header.id))}
          >
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
        <tr key={row.id} className="flex w-full items-center">
         {row.getVisibleCells().map((cell) => {
          const isTitle = cell.column.id === 'title';
          return (
           <td
            key={cell.id}
            className={twMerge(
             'text-center text-gray-800',
             cellStyling(cell.column.id),
             getCellWidth(cell.id),
            )}
           >
            <p>{flexRender(cell.column.columnDef.cell, cell.getContext())}</p>
            {isTitle && (
             <div className=" hidden justify-between max-sm:flex ">
              <div className="flex space-x-1 text-left text-gray-400">
               <ChatBubbleIcon />
               <p>{cell.row.original.comments.totalCount}</p>
              </div>
              <p className="text-left text-gray-400">
               {dayjs(cell.row.original.createdAt).format('MMM-YYYY')}
              </p>
             </div>
            )}
           </td>
          );
         })}
        </tr>
       ))}
      </tbody>
     </table>
     <div className="m-auto mb-4 mt-3 flex w-fit basis-[10%] items-center">
      <Button variant="unstyled" onClick={handlePrevPage} disabled={!hasPreviousPage}>
       <ChevronLeft />
      </Button>
      <div className="space-x-1">
       {[...Array(Math.ceil(tableData.length / PAGE_SIZE))].map((_, index) => {
        const MAX_PAGINATION = REQUEST_PAGES / PAGE_SIZE;
        const pageNumber = index + 1;
        const isActivePagination = index === pagination.pageIndex;
        return (
         <Button
          variant={isActivePagination ? 'default' : 'unstyled'}
          key={index}
          className="h-7 w-7 rounded-full p-0"
          onClick={() => gotoPage(index)}
         >
          {MAX_PAGINATION * pageCount + pageNumber}
         </Button>
        );
       })}
      </div>
      <Button onClick={handleNextPage} disabled={!hasNextPage} variant="unstyled">
       <ChevronRight />
      </Button>
     </div>
    </div>
   )}
  </div>
 );
};
export default IssueTable;

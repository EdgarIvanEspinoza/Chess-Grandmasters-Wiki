'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import {
  ColumnDef,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
  PaginationState,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LucideSearch } from 'lucide-react';

type Grandmaster = {
  username: string;
};

type TitledPlayersResponse = {
  players: string[];
};

const LOCAL_STORAGE_KEY = 'grandmasters_search';
const LOCAL_STORAGE_PAGE_KEY = 'grandmasters_page';

export default function GrandmastersPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['grandmasters'],
    queryFn: async () => {
      const res = await axios.get<TitledPlayersResponse>(
        'https://api.chess.com/pub/titled/GM'
      );
      return res.data.players.map((username) => ({ username }));
    },
  });

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(LOCAL_STORAGE_KEY) || '';
    }
    return '';
  });

  const [pagination, setPagination] = useState<PaginationState>(() => {
    if (typeof window !== 'undefined') {
      const savedPage = localStorage.getItem(LOCAL_STORAGE_PAGE_KEY);
      return savedPage
        ? { pageIndex: Number(savedPage), pageSize: 10 }
        : { pageIndex: 0, pageSize: 10 };
    }
    return { pageIndex: 0, pageSize: 10 };
  });

  useEffect(() => {
    if (globalFilter) {
      localStorage.setItem(LOCAL_STORAGE_KEY, globalFilter);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [globalFilter]);

  useEffect(() => {
    if (!globalFilter) {
      localStorage.setItem(
        LOCAL_STORAGE_PAGE_KEY,
        String(pagination.pageIndex)
      );
    } else {
      localStorage.removeItem(LOCAL_STORAGE_PAGE_KEY);
      setPagination({ ...pagination, pageIndex: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalFilter]);

  const columns = [
    {
      accessorKey: 'username',
      header: 'Grandmaster',
      cell: ({ getValue }) => {
        const username = getValue() as string;
        return (
          <Link
            href={`/player/${username}`}
            className="text-blue-600 hover:underline"
          >
            {username}
          </Link>
        );
      },
    },
  ] satisfies ColumnDef<Grandmaster>[];

  const table = useReactTable({
    data: data || [],
    columns,
    state: { sorting, globalFilter, pagination },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      globalFilter,
      pagination,
      sorting,
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold mb-4">Chess Grandmasters</h1>

      <div className="flex items-center gap-2 mb-4 max-w-sm">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search grandmaster..."
            value={globalFilter}
            onChange={(e) => {
              setPagination({ ...pagination, pageIndex: 0 });
              setGlobalFilter(e.target.value);
            }}
            className="pr-10"
          />
          <LucideSearch
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={16}
          />
        </div>

        <Button
          variant="outline"
          onClick={() => setGlobalFilter('')}
          disabled={!globalFilter}
          size="sm"
        >
          Clear
        </Button>
      </div>

      <div className="flex justify-center gap-2 items-center">
        <Button
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          ←
        </Button>

        <span className="text-sm text-muted-foreground">
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>

        <Button
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          →
        </Button>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="cursor-pointer select-none"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() === 'asc'
                    ? ' ▲'
                    : header.column.getIsSorted() === 'desc'
                    ? ' ▼'
                    : ''}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                No data available.
              </TableCell>
            </TableRow>
          ) : (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

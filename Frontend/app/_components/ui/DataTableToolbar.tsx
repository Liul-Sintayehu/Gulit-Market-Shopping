"use client"

import { Table } from "@tanstack/react-table"

import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./DataTableViewOptions"


interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  search?: string[];
}

export function DataTableToolbar<TData>({
  table,
  search = [],
}: DataTableToolbarProps<TData>) {

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={`Search ...`}
          value={(table.getColumn(`${search}`)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(`${search}`)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
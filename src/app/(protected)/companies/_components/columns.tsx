"use client";

import { ColumnDef, RowData } from "@tanstack/react-table";
import { CompanyResource } from "@/lib/api/api-client";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompanyActions } from "./company-actions";

export const columns: ColumnDef<CompanyResource>[] = [
  {
    accessorKey: "companyName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre de la Empresa
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "taxIdentificationNumber",
    header: "RUC",
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      const company = row.original;
      return (
        <div className="text-right">
          <CompanyActions
            company={company}
            onEdit={() => table.options.meta?.onEditCompany?.(company)}
          />
        </div>
      );
    },
  },
];

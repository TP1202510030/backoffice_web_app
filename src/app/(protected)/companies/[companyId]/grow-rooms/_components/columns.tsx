"use client";

import { ColumnDef } from "@tanstack/react-table";
import { GrowRoomResource } from "@/lib/api/api-client";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GrowRoomActions } from "./grow-room-actions";

export const columns: ColumnDef<GrowRoomResource>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre de la nave de cultivo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "hasActiveCrop",
    header: "Cultivo Activo",
    cell: ({ row }) => (row.original.hasActiveCrop ? "Sí" : "No"),
  },
  {
    accessorKey: "activeCropId",
    header: "ID Cultivo Activo",
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      const growRoom = row.original;
      const { companyId } = table.options.meta as { companyId: number };

      return (
        <div className="text-right">
          <GrowRoomActions
            companyId={companyId}
            growRoom={growRoom}
            onEdit={() =>
              table.options.meta?.onEditGrowRoom &&
              table.options.meta.onEditGrowRoom(growRoom)
            }
          />
        </div>
      );
    },
  },
];

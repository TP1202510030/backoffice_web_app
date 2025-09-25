"use client";

import { ColumnDef } from "@tanstack/react-table";
import { UserResource } from "@/lib/api/api-client";
import { UserActions } from "./user-actions";

export const columns: ColumnDef<UserResource>[] = [
  {
    accessorKey: "username",
    header: "Nombre de Usuario",
  },
  {
    accessorKey: "roles",
    header: "Roles",
    cell: ({ row }) => {
      const roles = row.original.roles || [];
      return <span>{roles.join(", ")}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      const user = row.original;
      return (
        <div className="text-right">
          <UserActions
            user={user}
            onEdit={() => table.options.meta?.onEditUser?.(user)}
          />
        </div>
      );
    },
  },
];

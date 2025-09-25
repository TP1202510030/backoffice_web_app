"use client";

import { useQuery } from "@tanstack/react-query";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { UserResource } from "@/lib/api/api-client";
import { usersApi } from "@/lib/api";
import { DataTableSkeleton } from "@/components/ui/data-table-skeleton";
import React from "react";
import { Button } from "@/components/ui/button";
import { UserDialog } from "./user-dialog";

interface UserListProps {
  companyId: number;
}

export function UserList({ companyId }: UserListProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState<UserResource | null>(
    null
  );

  const { data, isLoading, isError, error } = useQuery<UserResource[]>({
    queryKey: ["users", companyId],
    queryFn: async () => {
      const response = await usersApi.getAllUsersByCompanyId(companyId);
      return response.data;
    },
    retry: false,
  });

  const openModal = (user: UserResource | null = null) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  if (isLoading) {
    return <DataTableSkeleton />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const users = data || [];

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={() => openModal()}>Crear Usuario</Button>
      </div>
      <DataTable
        columns={columns}
        data={users}
        meta={{ onEditUser: openModal }}
      />
      <UserDialog
        companyId={companyId}
        user={editingUser}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { PageUserResource, UserResource } from "@/lib/api/api-client";
import { usersApi } from "@/lib/api";
import { DataTableSkeleton } from "@/components/ui/data-table-skeleton";
import React from "react";
import { Button } from "@/components/ui/button";
import { UserDialog } from "./user-dialog";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface UserListProps {
  companyId: number;
}

export function UserList({ companyId }: UserListProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState<UserResource | null>(
    null
  );

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const page = Number(searchParams.get("page")) || 0;
  const size = Number(searchParams.get("size")) || 10;

  const { data, isLoading, isError, error } = useQuery<PageUserResource>({
    queryKey: ["users", companyId, page, size],
    queryFn: async () => {
      const response = await usersApi.getAllUsersByCompanyId(
        companyId,
        page,
        size
      );
      return response.data as unknown as PageUserResource;
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

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    router.push(`${pathname}?${params.toString()}`);
  };

  if (isLoading) {
    return <DataTableSkeleton />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const users = data?.content || [];
  const pageCount = data?.totalPages || 0;

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={() => openModal()}>Crear Usuario</Button>
      </div>
      <DataTable
        columns={columns}
        data={users}
        meta={{ onEditUser: openModal }}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        currentPage={page}
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

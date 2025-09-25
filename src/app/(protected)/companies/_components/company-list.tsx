"use client";

import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../../../../components/ui/data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { PageCompanyResource, CompanyResource } from "@/lib/api/api-client";
import React from "react";
import { DataTableSkeleton } from "../../../../components/ui/data-table-skeleton";
import { CompanyListError } from "./company-list-error";
import { CompanyDialog } from "./company-dialog";
import { companiesApi } from "@/lib/api";

export function CompanyList() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingCompany, setEditingCompany] =
    React.useState<CompanyResource | null>(null);

  const { data, isLoading, isError, error, refetch } =
    useQuery<PageCompanyResource>({
      queryKey: ["companies"],
      queryFn: async () => {
        const response = await companiesApi.getAllCompanies(0, 10);
        return response.data as unknown as PageCompanyResource;
      },
      retry: false,
    });

  const openModal = (company: CompanyResource | null = null) => {
    setEditingCompany(company);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCompany(null);
  };

  if (isLoading) {
    return <DataTableSkeleton />;
  }

  if (isError) {
    return <CompanyListError error={error} refetch={refetch} />;
  }

  const companies = data?.content || [];

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={() => openModal()}>Crear Empresa</Button>
      </div>

      <DataTable
        columns={columns}
        data={companies}
        meta={{ onEditCompany: openModal }}
      />

      <CompanyDialog
        company={editingCompany}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

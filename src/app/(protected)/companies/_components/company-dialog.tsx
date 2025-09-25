"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CompanyForm } from "./company-form";
import React from "react";
import { CompanyResource } from "@/lib/api/api-client";
import { useCreateCompany } from "@/hooks/use-create-company";
import { useUpdateCompany } from "@/hooks/use-update-company";

interface CompanyDialogProps {
  company: CompanyResource | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CompanyDialog({
  company,
  isOpen,
  onClose,
}: CompanyDialogProps) {
  const createMutation = useCreateCompany();
  const updateMutation = useUpdateCompany();

  const handleFormSubmit = (values: {
    companyName: string;
    taxIdentificationNumber: string;
  }) => {
    const payload = {
      companyName: values.companyName,
      taxIdentificationNumber: Number(values.taxIdentificationNumber),
    };

    if (company?.id) {
      updateMutation.mutate(
        { id: company.id, values: payload },
        { onSuccess: onClose }
      );
    } else {
      createMutation.mutate(payload, { onSuccess: onClose });
    }
  };

  const isPending = createMutation.isPending || updateMutation.isPending;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {company ? "Editar Empresa" : "Crear Nueva Empresa"}
          </DialogTitle>
        </DialogHeader>
        <CompanyForm
          initialData={company}
          onSubmit={handleFormSubmit}
          isPending={isPending}
        />
      </DialogContent>
    </Dialog>
  );
}

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UserForm } from "./user-form";
import React from "react";
import {
  CreateUserResource,
  PatchUserResource,
  UserResource,
} from "@/lib/api/api-client";
import { useCreateUser } from "@/hooks/use-create-user";
import { useUpdateUser } from "@/hooks/use-update-user";

interface UserDialogProps {
  companyId: number;
  user: UserResource | null;
  isOpen: boolean;
  onClose: () => void;
}

export function UserDialog({
  companyId,
  user,
  isOpen,
  onClose,
}: UserDialogProps) {
  const createMutation = useCreateUser();
  const updateMutation = useUpdateUser();

  const handleFormSubmit = (values: {
    username: string;
    password?: string;
    roles: string[];
  }) => {
    if (user?.id) {
      const payload: PatchUserResource = {
        username: values.username,
        roles: values.roles,
      };
      updateMutation.mutate(
        { userId: user.id, values: payload },
        { onSuccess: onClose }
      );
    } else {
      const payload: CreateUserResource = {
        username: values.username,
        password: values.password,
        roles: values.roles,
        companyId,
      };
      createMutation.mutate(payload, { onSuccess: onClose });
    }
  };

  const isPending = createMutation.isPending || updateMutation.isPending;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {user ? "Editar Usuario" : "Crear Nuevo Usuario"}
          </DialogTitle>
        </DialogHeader>
        <UserForm
          initialData={user}
          onSubmit={handleFormSubmit}
          isPending={isPending}
        />
      </DialogContent>
    </Dialog>
  );
}

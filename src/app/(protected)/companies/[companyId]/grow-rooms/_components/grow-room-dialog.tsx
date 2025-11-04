"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GrowRoomForm } from "./grow-room-form";
import React from "react";
import {
  CreateGrowRoomResource,
  DeviceCredentialsResource,
  GrowRoomResource,
} from "@/lib/api/api-client";
import { useCreateGrowRoom } from "@/hooks/use-create-grow-room";
import { useUpdateGrowRoom } from "@/hooks/use-update-grow-room";

interface GrowRoomDialogProps {
  companyId: number;
  growRoom: GrowRoomResource | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (credentials: DeviceCredentialsResource) => void;
}

export function GrowRoomDialog({
  companyId,
  growRoom,
  isOpen,
  onClose,
  onSuccess,
}: GrowRoomDialogProps) {
  const createMutation = useCreateGrowRoom();
  const updateMutation = useUpdateGrowRoom();

  const handleFormSubmit = (values: CreateGrowRoomResource) => {
    if (growRoom?.id) {
      updateMutation.mutate(
        { companyId, growRoomId: growRoom.id, values },
        { onSuccess: onClose }
      );
    } else {
      createMutation.mutate(
        { companyId, values },
        {
          onSuccess: (data) => {
            onClose();
            onSuccess(data);
          },
        }
      );
    }
  };

  const isPending = createMutation.isPending || updateMutation.isPending;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {growRoom
              ? "Editar Nave de Cultivo"
              : "Crear Nueva Nave de Cultivo"}
          </DialogTitle>
        </DialogHeader>
        <GrowRoomForm
          initialData={growRoom}
          onSubmit={handleFormSubmit}
          isPending={isPending}
        />
      </DialogContent>
    </Dialog>
  );
}

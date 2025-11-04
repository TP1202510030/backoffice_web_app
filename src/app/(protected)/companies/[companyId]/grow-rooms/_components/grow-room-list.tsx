"use client";

import { growRoomsApi } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import {
  PageGrowRoomResource,
  GrowRoomResource,
  DeviceCredentialsResource,
} from "@/lib/api/api-client";
import { Button } from "@/components/ui/button";
import React from "react";
import { DataTableSkeleton } from "@/components/ui/data-table-skeleton";
import { GrowRoomDialog } from "./grow-room-dialog";
import { GrowRoomListError } from "./grow-room-list-error";
import { DeviceCredentialsDialog } from "./device-credentials-dialog";

interface GrowRoomListProps {
  companyId: number;
}

export function GrowRoomList({ companyId }: GrowRoomListProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingGrowRoom, setEditingGrowRoom] =
    React.useState<GrowRoomResource | null>(null);

  const [credentials, setCredentials] =
    React.useState<DeviceCredentialsResource | null>(null);
  const [isCredentialsModalOpen, setIsCredentialsModalOpen] =
    React.useState(false);

  const { data, isLoading, isError, error, refetch } =
    useQuery<PageGrowRoomResource>({
      queryKey: ["grow-rooms", companyId],
      queryFn: async () => {
        const response = await growRoomsApi.getGrowRoomsByCompanyId(companyId);
        return response.data as unknown as PageGrowRoomResource;
      },
      retry: false,
    });

  const openModal = (growRoom: GrowRoomResource | null = null) => {
    setEditingGrowRoom(growRoom);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingGrowRoom(null);
  };

  const handleSuccess = (credentials: DeviceCredentialsResource) => {
    setCredentials(credentials);
    setIsCredentialsModalOpen(true);
  };

  const closeCredentialsModal = () => {
    setIsCredentialsModalOpen(false);
    setCredentials(null);
  };

  if (isLoading) {
    return <DataTableSkeleton />;
  }

  if (isError) {
    return <GrowRoomListError error={error} refetch={refetch} />;
  }

  const growRooms = data?.content || [];

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={() => openModal()}>Crear Nave de Cultivo</Button>
      </div>
      <DataTable
        columns={columns}
        data={growRooms}
        meta={{ onEditGrowRoom: openModal }}
      />

      <GrowRoomDialog
        companyId={companyId}
        growRoom={editingGrowRoom}
        isOpen={isModalOpen}
        onClose={closeModal}
        onSuccess={handleSuccess}
      />

      <DeviceCredentialsDialog
        credentials={credentials}
        isOpen={isCredentialsModalOpen}
        onClose={closeCredentialsModal}
      />
    </>
  );
}

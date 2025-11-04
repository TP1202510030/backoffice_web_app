import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { growRoomsApi } from "@/lib/api";
import {
  CreateGrowRoomResource,
  DeviceCredentialsResource,
} from "@/lib/api/api-client";

interface CreateGrowRoomParams {
  companyId: number;
  values: CreateGrowRoomResource;
}

export function useCreateGrowRoom() {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    DeviceCredentialsResource,
    Error,
    CreateGrowRoomParams
  >({
    mutationFn: ({ companyId, values }) => {
      return growRoomsApi
        .createGrowRoom(companyId, values)
        .then((response) => response.data);
    },
    onSuccess: (data, variables) => {
      toast.success("Nave de cultivo creada con éxito.");
      queryClient.invalidateQueries({
        queryKey: ["grow-rooms", variables.companyId],
      });
    },
    onError: (error) => {
      toast.error("Error al crear la nave de cultivo.", {
        description: error.message,
      });
    },
  });

  return mutation;
}

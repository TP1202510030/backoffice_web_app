import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { growRoomsApi } from "@/lib/api";
import { PatchGrowRoomResource } from "@/lib/api/api-client";

interface UpdateGrowRoomParams {
  companyId: number;
  growRoomId: number;
  values: PatchGrowRoomResource;
}

export function useUpdateGrowRoom() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ growRoomId, values }: UpdateGrowRoomParams) => {
      return growRoomsApi.patchGrowRoom(growRoomId, values);
    },
    onSuccess: (_, variables) => {
      toast.success("Nave de cultivo actualizada con éxito.");
      queryClient.invalidateQueries({
        queryKey: ["grow-rooms", variables.companyId],
      });
    },
    onError: (error) => {
      toast.error("Error al actualizar la nave de cultivo.", {
        description: error.message,
      });
    },
  });

  return mutation;
}

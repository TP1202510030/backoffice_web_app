import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { growRoomsApi } from "@/lib/api";

interface DeleteGrowRoomParams {
  companyId: number;
  growRoomId: number;
}

export function useDeleteGrowRoom() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (params: DeleteGrowRoomParams) => {
      return growRoomsApi.deleteGrowRoom(params.growRoomId);
    },
    onSuccess: () => {
      toast.success("Nave de cultivo eliminada con éxito.");
      queryClient.invalidateQueries({
        queryKey: ["grow-rooms"],
      });
    },
    onError: (error) => {
      toast.error("Error al eliminar la nave de cultivo.", {
        description: error.message,
      });
    },
  });

  return mutation;
}

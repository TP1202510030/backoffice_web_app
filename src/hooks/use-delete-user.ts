import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { usersApi } from "@/lib/api";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userId: number) => {
      return usersApi.deleteUser(userId);
    },
    onSuccess: () => {
      toast.success("Usuario eliminado con éxito.");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error("Error al eliminar el usuario.", {
        description: error.message,
      });
    },
  });

  return mutation;
}

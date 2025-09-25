import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { usersApi } from "@/lib/api";
import { PatchUserResource } from "@/lib/api/api-client";

interface UpdateUserParams {
  userId: number;
  values: PatchUserResource;
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ userId, values }: UpdateUserParams) => {
      return usersApi.patchUser(userId, values);
    },
    onSuccess: () => {
      toast.success("Usuario actualizado con éxito.");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error("Error al actualizar el usuario.", {
        description: error.message,
      });
    },
  });

  return mutation;
}

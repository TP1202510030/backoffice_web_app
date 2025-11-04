import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { usersApi } from "@/lib/api";
import { CreateUserResource } from "@/lib/api/api-client";

export function useCreateUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userData: CreateUserResource) => {
      return usersApi.createUser(userData);
    },
    onSuccess: () => {
      toast.success("Usuario creado con éxito.");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error("Error al crear el usuario.", {
        description: error.message,
      });
    },
  });

  return mutation;
}

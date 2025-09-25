import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { companiesApi } from "@/lib/api";
import { PatchCompanyResource } from "@/lib/api/api-client";

interface UpdateCompanyParams {
  id: number;
  values: PatchCompanyResource;
}

export function useUpdateCompany() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, values }: UpdateCompanyParams) => {
      return companiesApi.patchCompany(id, values);
    },
    onSuccess: () => {
      toast.success("Empresa actualizada con éxito.");
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
    onError: (error) => {
      toast.error("Error al actualizar la empresa.", {
        description: error.message,
      });
    },
  });

  return mutation;
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { companiesApi } from "@/lib/api";

export function useDeleteCompany() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (companyId: number) => {
      return companiesApi.deleteCompany(companyId);
    },
    onSuccess: () => {
      toast.success("Empresa eliminada con éxito.");
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
    onError: (error) => {
      toast.error("Error al eliminar la empresa.", {
        description: error.message,
      });
    },
  });

  return mutation;
}

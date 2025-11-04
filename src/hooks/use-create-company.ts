import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { companiesApi } from "@/lib/api";
import { CreateCompanyResource } from "@/lib/api/api-client";

export function useCreateCompany() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (companyData: CreateCompanyResource) => {
      return companiesApi.createCompany(companyData);
    },
    onSuccess: () => {
      toast.success("Empresa creada con éxito.");
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
    onError: (error) => {
      toast.error("Error al crear la empresa.", {
        description: error.message,
      });
    },
  });

  return mutation;
}

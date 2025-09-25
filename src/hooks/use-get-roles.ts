import { useQuery } from "@tanstack/react-query";
import { RoleResource } from "@/lib/api/api-client";
import { rolesApi } from "@/lib/api";

export function useGetRoles() {
  return useQuery<RoleResource[]>({
    queryKey: ["roles"],
    queryFn: async () => {
      const response = await rolesApi.getAllRoles();
      return response.data;
    },
    retry: false,
  });
}

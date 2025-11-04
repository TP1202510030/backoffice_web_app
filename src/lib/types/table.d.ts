import { RowData } from "@tanstack/react-table";
import { CompanyResource, GrowRoomResource } from "@/lib/api/api-client";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    onEditCompany?: (company: CompanyResource) => void;
    onEditGrowRoom?: (growRoom: GrowRoomResource) => void;
    onEditUser?: (user: UserResource) => void;
  }
}

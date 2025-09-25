import { CompanyList } from "./_components/company-list";
import { Button } from "@/components/ui/button";

export default function CompaniesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">Empresas</h1>
          <p className="text-muted-foreground">
            Gestiona las empresas registradas en el sistema.
          </p>
        </div>
      </div>
      <CompanyList />
    </div>
  );
}

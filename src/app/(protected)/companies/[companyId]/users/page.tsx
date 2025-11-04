import { UserList } from "./_components/user-list";

interface CompanyUsersPageProps {
  params: {
    companyId: string;
  };
}

export default function CompanyUsersPage({ params }: CompanyUsersPageProps) {
  const companyId = Number(params.companyId);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-4">Usuarios de la Empresa</h1>
        <p className="text-muted-foreground">
          Listado de usuarios para la empresa con ID: {companyId}.
        </p>
      </div>
      <UserList companyId={companyId} />
    </div>
  );
}

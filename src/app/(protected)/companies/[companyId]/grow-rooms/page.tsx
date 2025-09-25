import { GrowRoomList } from "./_components/grow-room-list";

interface CompanyGrowRoomsPageProps {
  params: {
    companyId: string;
  };
}

export default function CompanyGrowRoomsPage({
  params,
}: CompanyGrowRoomsPageProps) {
  const companyId = Number(params.companyId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Naves de cultivo de la Empresa
          </h1>
          <p className="text-muted-foreground">
            Listado de naves de Cultivo para la empresa con ID: {companyId}.
          </p>
        </div>
      </div>
      <GrowRoomList companyId={companyId} />
    </div>
  );
}

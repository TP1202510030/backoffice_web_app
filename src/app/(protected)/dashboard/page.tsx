import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total de Compañías</CardTitle>
            <CardDescription>
              Número total de empresas registradas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1</p> {/* Placeholder */}
          </CardContent>
        </Card>
        {/* Aquí irían más tarjetas con datos obtenidos de la API */}
      </div>
    </div>
  );
}

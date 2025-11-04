import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

interface CompanyListErrorProps {
  error: Error;
  refetch: () => void;
}

export function CompanyListError({ error, refetch }: CompanyListErrorProps) {
  return (
    <Alert variant="destructive">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Error Inesperado</AlertTitle>
      <AlertDescription>
        No se pudieron cargar las empresas. Error: {error.message}
        <div className="mt-2">
          <Button onClick={refetch} variant="secondary" size="sm">
            Reintentar
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
}

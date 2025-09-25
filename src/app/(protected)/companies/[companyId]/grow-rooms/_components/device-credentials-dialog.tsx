"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeviceCredentialsResource } from "@/lib/api/api-client";
import { DownloadIcon } from "lucide-react";

interface DeviceCredentialsDialogProps {
  credentials: DeviceCredentialsResource | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DeviceCredentialsDialog({
  credentials,
  isOpen,
  onClose,
}: DeviceCredentialsDialogProps) {
  if (!credentials) {
    return null;
  }

  const handleDownload = () => {
    const content = `Thing Name: ${credentials.thingName}\n\nCertificate PEM:\n${credentials.certificatePem}\n\nPrivate Key:\n${credentials.privateKey}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${credentials.thingName}-credentials.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col max-h-[90vh] sm:max-w-md">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle>Credenciales del Dispositivo</DialogTitle>
          <DialogDescription>
            Guarda estas credenciales en un lugar seguro. No podrás verlas de
            nuevo.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-grow space-y-4 overflow-y-auto pr-4">
          <div>
            <h3 className="font-semibold">Thing Name</h3>
            <p className="text-sm text-muted-foreground break-all">
              {credentials.thingName}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Certificado (Certificate PEM)</h3>
            <pre className="mt-1 p-2 bg-muted rounded-md text-xs overflow-auto max-h-40">
              <code>{credentials.certificatePem}</code>
            </pre>
          </div>
          <div>
            <h3 className="font-semibold">Clave Privada (Private Key)</h3>
            <pre className="mt-1 p-2 bg-muted rounded-md text-xs overflow-auto max-h-40">
              <code>{credentials.privateKey}</code>
            </pre>
          </div>
        </div>

        <DialogFooter className="flex-shrink-0 pt-4">
          <Button onClick={handleDownload}>
            <DownloadIcon className="mr-2 h-4 w-4" />
            Descargar (.txt)
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { authClient } from "@/lib/api";
import { Button } from "@/components/ui/button";

export function Header() {
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="font-bold">Greenhouse Backoffice</div>
      <div>
        <Button variant="outline" onClick={handleSignOut}>
          Cerrar Sesión
        </Button>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppRoutes } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navigation = [{ name: "Empresas", href: AppRoutes.COMPANIES }];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-gray-50 p-4">
      <nav className="flex flex-col space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium",
              pathname === item.href
                ? "bg-gray-900 text-white"
                : "text-gray-700 hover:bg-gray-200"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

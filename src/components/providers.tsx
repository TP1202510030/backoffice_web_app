"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

/**
 * A client-side component to wrap the application with necessary context providers.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

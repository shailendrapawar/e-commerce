import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router";
import { Toaster } from "@/components/ui/sonner";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/features/product/hooks/useGetAllCategories";
export default function Providers({}) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={mainRouter} />
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

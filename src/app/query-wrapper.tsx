"use client";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function QueryWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

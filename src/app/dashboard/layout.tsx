import MainMenu from "@/components/dashboard/sidebar/MainMenu";
import { type ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <MainMenu />
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Bivenenido a CodiElectro, Usuario</h1>
        {children}
      </div>
    </div>
  );
}

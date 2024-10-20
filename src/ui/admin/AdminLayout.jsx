import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";

export default function AdminLayout() {
  return (
    <div className="grid grid-cols-[5rem_1fr] sm:grid-cols-[18rem_1fr] grid-rows-[1fr] h-screen">
      <SidebarAdmin />
      <main className="bg-custom-bg-slate p-1 sm:p-10 overflow-scroll">
        <div className="container mx-auto flex flex-col gap-8 max-w-[1200px] p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";

export default function AdminLayout() {
  return (
    <div className="grid grid-cols-[16rem_1fr] grid-rows-[1fr] h-screen">
      <SidebarAdmin />
      <main className="bg-white p-10 overflow-scroll">
        <div className="container mx-auto flex flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

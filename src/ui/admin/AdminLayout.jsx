import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";

export default function AdminLayout() {
  return (
    <div className="grid grid-cols-[16rem_1fr] grid-rows-[1fr] h-screen">
      <SidebarAdmin />
      <main className="bg-slate-100 p-10 overflow-scroll">
        <div className="container mx-auto flex flex-col gap-8 max-w-[1200px] ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[1fr_auto] ">
      <Header />
      <div className="pt-[120px] w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

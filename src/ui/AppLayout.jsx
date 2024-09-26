import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      <Header />
      <div className=" mx-auto py-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

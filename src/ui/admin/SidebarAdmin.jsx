import { NavLink } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { RiBookOpenLine } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function SidebarAdmin() {
  return (
    <aside className="bg-custom-bg-slate px-8 py-6 border-r border-slate-200 flex flex-col gap-8">
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink
              to="/admin/dashboard"
              className="flex items-center gap-3 bg-slate-50 text-base font-medium py-3 px-6 transition-all duration-300 hover:font-semibold hover:bg-custom-bg-li rounded-lg active:bg-custom-bg-li active:font-semibold"
            >
              <RiHome2Line className="text-2xl transition-all duration-300" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/bookings_list"
              className="flex items-center gap-3 bg-slate-50 text-base font-medium py-3 px-6 transition-all duration-300 hover:font-semibold hover:bg-custom-bg-li rounded-lg active:bg-custom-bg-li active:font-semibold"
            >
              <RiBookOpenLine className="text-2xl transition-all duration-300" />
              <span>Reservas</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard"
              className="flex items-center gap-3 bg-slate-50 text-base font-medium py-3 px-6 transition-all duration-300 hover:font-semibold hover:bg-custom-bg-li rounded-lg active:bg-custom-bg-li active:font-semibold"
            >
              <RiLogoutBoxRLine className="text-2xl transition-all duration-300" />
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

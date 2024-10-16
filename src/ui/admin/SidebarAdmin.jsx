import { NavLink } from "react-router-dom";
import {
  RiHome2Fill,
  RiSettings2Fill,
  RiBookMarkedFill,
  RiLogoutBoxFill,
} from "react-icons/ri";

export default function SidebarAdmin() {
  const menus = [
    {
      name: "Home",
      link: "/admin/dashboard",
      icon: <RiHome2Fill className="text-4xl" />,
    },
    {
      name: "Reservas",
      link: "/admin/bookings_list",
      icon: <RiBookMarkedFill className="text-4xl" />,
    },
    {
      name: "Configuración",
      link: "/admin/settings",
      icon: <RiSettings2Fill className="text-4xl" />,
    },
    {
      name: "Cerrar sesión",
      link: "/",
      icon: <RiLogoutBoxFill className="text-4xl" />,
    },
  ];

  return (
    <aside className="bg-custom-bg-slate px-4 sm:px-8 py-10 border-r border-slate-200 duration-500 transition-all ease-in">
      <nav className="">
        <ul className="flex flex-col gap-2 items-center sm:items-start ">
          {menus.map((menu) => (
            <li className="sm:w-full" key={menu.name}>
              <NavLink
                to={menu.link}
                className={({ isActive }) =>
                  `font-semibold flex items-center gap-4 rounded-lg transition-all duration-300 p-4 sm:p-2 hover:bg-slate-900 hover:text-white ${
                    isActive ? "bg-slate-900 text-white" : ""
                  }`
                }
              >
                {menu.icon}
                <span className=" hidden sm:block text-xl">{menu.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

import { useState } from "react";
import { NavLink } from "react-router-dom";
import useUser from "../features/auth/useUser";
import { motion, AnimatePresence } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";
import Spinner from "./Spinner";
import { RiMenuLine } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const { isLoading, isAuthenticated, user } = useUser();

  // Alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isAuthenticated);
  /* if (isLoading) return <Spinner />; */
  return (
    <header className="flex justify-between items-center bg-white border-b border-b-stone-300 fixed top-0 w-full z-50 transition-all duration-300 ease-in-out h-[100px]">
      <NavLink to="/">
        <img src="logo.jpg" alt="Ciudad Padel Salta" className="h-24 mr-auto" />
      </NavLink>
      <nav className="hidden sm:block">
        <ul className="flex items-center gap-4 uppercase font-bold text-lg">
          <li className="relative hover:underline cursor-pointer">
            {!isAuthenticated && <NavLink to="/login">Ingresar</NavLink>}
            {isAuthenticated && user && (
              <div
                className="inline-block mr-4"
                onClick={() => setSubMenuOpen(!subMenuOpen)}
              >
                {user.email || "ornas"}
                <AnimatePresence mode="wait">
                  {subMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-16 right-0 w-[400px] h-screen z-20"
                    >
                      <div className="text-xl font-semibold uppercase bg-white text-slate-700 py-10 m-6 rounded-3xl">
                        <ul className="flex flex-col justify-center items-center gap-10 ">
                          <li className="hover:underline cursor-pointer">
                            <NavLink
                              onClick={() => setSubMenuOpen(false)}
                              to="/my_bookings"
                            >
                              Perfil
                            </NavLink>
                          </li>
                          <li className="hover:underline cursor-pointer">
                            <NavLink to="/my_bookings">Mis reservas</NavLink>
                          </li>
                          <li
                            className="hover:underline cursor-pointer"
                            onClick={() => {
                              setSubMenuOpen(false);
                            }}
                          >
                            Cerrar sesión
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/*MENU RESPONSIVE */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl ease-in-out duration-300 mr-4"
        >
          {isMenuOpen ? <RiCloseLargeLine /> : <RiMenuLine />}
        </button>
      </div>
      {!isLoading && user && (
        <ResponsiveMenu
          isMenuOpen={isMenuOpen}
          isAuthenticated={isAuthenticated}
          setIsMenuOpen={setIsMenuOpen}
          user={user.email}
        />
      )}
    </header>
  );
}

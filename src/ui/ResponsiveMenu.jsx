import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function ResponsiveMenu({
  isMenuOpen,
  setIsMenuOpen,
  isAuthenticated,
  user,
  logout,
}) {
  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-white text-slate-700 py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10 ">
              <li className="hover:underline cursor-pointer">
                <NavLink onClick={() => setIsMenuOpen(false)} to="/my_bookings">
                  Mis reservas
                </NavLink>
              </li>
              <li className=" hover:underline cursor-pointer">
                {!isAuthenticated && <NavLink to="/login">Ingresar</NavLink>}
                {isAuthenticated && <NavLink to="/login">{user}</NavLink>}
              </li>
              <li
                className=" hover:underline cursor-pointer"
                onClick={logout()}
              >
                Cerrar sesion
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

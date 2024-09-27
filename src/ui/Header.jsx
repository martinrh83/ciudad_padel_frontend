import { useState } from "react";
import Button from "./Button";
import { RiMenuLine } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center bg-white border-b border-b-stone-300 fixed top-0 w-full z-50 transition-all duration-300 ease-in-out">
      <img src="logo.jpg" alt="Ciudad Padel Salta" className="h-24 mr-auto" />
      <nav className="hidden sm:block">
        <ul className="flex items-center gap-4 uppercase font-bold text-lg">
          <li className="hover:underline cursor-pointer">Alquiler</li>
          <li>Clases</li>
          <li className="relative">
            <span
              onClick={toggleMenu}
              className="hover:underline cursor-pointer"
            >
              Ingresar
            </span>
            {/* Submenú */}
            <ul
              className={`absolute right-0 mt-2 w-40 bg-white border border-stone-300 shadow-lg ${
                isMenuOpen ? "block" : "hidden"
              } transition-all duration-300 ease-in-out`}
            >
              <li className="px-4 py-2 hover:bg-stone-200 cursor-pointer">
                Iniciar Sesión
              </li>
              <li className="px-4 py-2 hover:bg-stone-200 cursor-pointer">
                Registrarse
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl ease-in-out duration-300"
        >
          {isMenuOpen ? <RiCloseLargeLine /> : <RiMenuLine />}
        </button>
      </div>

      {/* Menú hamburguesa para pantallas pequeñas */}
      {isMenuOpen && (
        <nav className="absolute top-24 left-0 w-full bg-white border-t border-stone-300 shadow-lg sm:hidden">
          <ul className="flex flex-col items-center gap-4 uppercase font-bold text-lg p-4">
            <li className="hover:underline cursor-pointer">Alquiler</li>
            <li className="hover:underline cursor-pointer">Clases</li>
            <li className="hover:underline cursor-pointer">Ingresar</li>
            <li className="hover:underline cursor-pointer">Registrarse</li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Reservar
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
}

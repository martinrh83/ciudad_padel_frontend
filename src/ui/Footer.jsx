import { RiWhatsappLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import ContactWhatsapp from "./ContactWhatsapp";

export default function Footer() {
  return (
    <div className="bg-white sm:max-h-48  grid grid-cols-1 sm:grid-cols-3 gap-6 px-10 py-8 sm:py-10 sm:justify-items-center ">
      <div>
        <h1 className="uppercase text-2xl mb-4">Direccion</h1>
        <div className="flex items-center">
          <RiMapPinLine className="text-2xl mr-2 text-orange-600" />
          <p className="font-semibold text-lg">San Juan 2045, A4400 Salta</p>
        </div>
      </div>
      <div>
        <h1 className="uppercase text-2xl mb-4">Contacto</h1>
        <ContactWhatsapp
          phoneNumber="3876132848"
          message="Deseo conocer más sobre el club"
        />
      </div>
      <div>
        <h1 className="uppercase text-2xl mb-4">Seguinos en</h1>
        <div className="flex">
          <a
            href="https://www.facebook.com/profile.php?id=100064794472196"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 mr-4"
          >
            <RiFacebookBoxFill className="text-5xl text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/ciudadpadel/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <RiInstagramLine className="text-5xl text-pink-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

import { RiWhatsappLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

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
      <div className="">
        <h1 className="uppercase text-2xl mb-4">Contacto</h1>
        <div className="flex items-center">
          <RiWhatsappLine className="text-2xl mr-2 text-green-400" />
          <p className="font-semibold text-lg">01131144604</p>
        </div>
      </div>
      <div>
        <h1 className="uppercase text-2xl mb-4">Seguinos en</h1>
        <div className="flex">
          <RiFacebookBoxFill className="text-5xl text-blue-500" />
          <RiInstagramLine className="text-5xl text-pink-500" />
        </div>
      </div>
    </div>
  );
}

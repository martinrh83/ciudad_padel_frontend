import { RiWhatsappLine } from "react-icons/ri";

export default function ContactWhatsapp({ phoneNumber, message }) {
  const whatsappLink = `https://wa.me/549${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="">
      <div className="flex items-center hover:underline">
        <RiWhatsappLine className="text-2xl mr-2 text-green-400" />
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-lg"
        >
          {phoneNumber}
        </a>
      </div>
    </div>
  );
}

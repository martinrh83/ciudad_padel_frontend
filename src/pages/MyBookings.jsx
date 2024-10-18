import ContactWhatsapp from "../ui/ContactWhatsapp";

export default function MyBookings() {
  const aliasPago = "Caniza.ariel.facundo";
  return (
    <div className=" max-w-[450px] sm:max-w-xl lg:max-w-6xl mx-auto my-10 shadow-xl">
      <div className="bg-white p-4 sm:py-8 flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:items-center sm:justify-center">
          <div>
            Puede abonar sus reservas haciendo el pago en el club o por
            mercadopago al alias:
          </div>
          <div className="p-2 bg-sky-400 rounded-md">
            <img
              src="mp.png"
              alt="mercado pago alias"
              className="inline-block h-4"
            />
            <span className="text-white font-semibold ml-2">{aliasPago}</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          Enviar comprobante de pago al
          <ContactWhatsapp
            phoneNumber="3876132848"
            message="La reserva ha sido abonada"
          />
        </div>
      </div>
    </div>
  );
}

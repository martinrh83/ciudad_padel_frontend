import { useAuth } from "../contexts/AuthContext";
import { useSettings } from "../features/admin/settings/useSettings";
import { useGetUserBookings } from "../features/booking/useGetUserBookings";
import { UserBookingTable } from "../features/booking/UserBookingsTable";
import Heading from "../ui/admin/Heading";
import ContactWhatsapp from "../ui/ContactWhatsapp";
import Spinner from "../ui/Spinner";

export default function MyBookings() {
  const { isLoading, isAuthenticated, user } = useAuth();
  const { userBookings, isLoading: isLoadingBookings } = useGetUserBookings(
    user.id
  );
  const { settings, isLoading: isLoadingSettings } = useSettings();

  if (isLoadingBookings || isLoadingSettings) return <Spinner />;
  return (
    <div className=" max-w-[350px] sm:max-w-xl lg:max-w-6xl mx-auto my-10 shadow-xl">
      <div className="bg-white p-4 sm:py-8 flex flex-col justify-center items-center gap-4 ">
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:items-center sm:justify-center">
          <div className="text-sm">
            Puede abonar sus reservas haciendo el pago en el club o por
            mercadopago al alias:
          </div>
          <div className="p-1 bg-sky-400 rounded-md">
            <img
              src="mp.png"
              alt="mercado pago alias"
              className="inline-block h-3"
            />
            <span className="text-white font-semibold ml-2 text-sm">
              {settings?.accountAliasPayment}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="text-sm">Enviar comprobante de pago al:</div>
          <ContactWhatsapp phoneNumber={settings.contactPhone} message="" />
        </div>
        {userBookings.length > 0 && (
          <>
            <div className="mt-8">
              <Heading>Mis reservas</Heading>
            </div>
            <UserBookingTable userBookings={userBookings} />
          </>
        )}
      </div>
    </div>
  );
}

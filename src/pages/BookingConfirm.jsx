import { GiTennisCourt } from "react-icons/gi";
import { useBooking } from "../contexts/BookingContext";
import { useCreateBooking } from "../features/booking/useCreateBooking";
import Button from "../ui/Button";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function BookingConfirm() {
  const { state: booking } = useBooking();
  const { createBooking, isCreating } = useCreateBooking();

  function handleConfirmBooking() {
    const newBooking = {
      bookingDate: booking.bookingDate,
      timeslotId: booking.timeslotId,
      price: booking.price,
      userId: booking.userId,
      status: booking.status,
    };
    console.log(newBooking);
    createBooking(newBooking);
  }

  return (
    <div className=" max-w-[450px] sm:max-w-xl lg:max-w-6xl mx-auto my-10 shadow-xl">
      <div className="bg-slate-900 text-white flex items-center px-1 sm:px-10 py-5 justify-between">
        <GiTennisCourt className="text-[30px]" />
        <p className="text-sm sm:text-lg ml-2 mr-auto font-custom">Reserva</p>

        <p className="capitalize font-custom text-sm sm:text-lg">
          {format(booking.bookingDate, "EEEE d 'de' MMMM", { locale: es })}
        </p>
      </div>
      <div className="flex flex-col items-center  bg-white    p-4 sm:py-8">
        <div>
          <p className="font-custom text-2xl">
            <span className="text-lime-400 mr-4">Horario:</span>
            {`${booking.startTime.substring(
              0,
              5
            )} - ${booking.endTime.substring(0, 5)}`}
          </p>
        </div>
        <div className="py-4 px-8 rounded-xl my-10 bg-lime-100 flex flex-col gap-2 justify-between font-semibold text-lime-700 text-base sm:text-xl">
          <p>Seña: ${booking.minimunPayment}</p>
          <p>
            <span>Total a pagar: </span>${booking.price}
          </p>
        </div>
        <Button handleOnClick={handleConfirmBooking} isDisabled={isCreating}>
          Reservar
        </Button>
      </div>
    </div>
  );
}

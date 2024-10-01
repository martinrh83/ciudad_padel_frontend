import TimeslotsList from "../features/booking/TimeslotsList";
import Calendar from "../features/calendar/Calendar";
import { GiTennisBall } from "react-icons/gi";
import { GiTennisCourt } from "react-icons/gi";

export default function Booking() {
  return (
    <div className="relative max-w-[450px] sm:max-w-xl lg:max-w-5xl mx-auto p-4 md:p-12">
      <GiTennisBall className="text-[300px] fill-lime-300 absolute -left-44 top-36 z-10 xl:block hidden" />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center bg-white  shadow-2xl rounded-[20px] z-30 relative p-4 sm:p-10">
        <Calendar />
      </div>
      <GiTennisCourt className="text-[350px] fill-stone-50 absolute -right-40 top-24 z-20 xl:block hidden" />
    </div>
  );
}

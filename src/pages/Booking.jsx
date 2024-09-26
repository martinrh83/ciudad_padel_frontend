import TimeslotsList from "../features/booking/TimeslotsList";
import Calendar from "../features/calendar/Calendar";
import { GiTennisBall } from "react-icons/gi";
import { GiTennisCourt } from "react-icons/gi";

export default function Booking() {
  return (
    <div className="relative">
      <GiTennisBall className="text-[300px] fill-lime-300 absolute -left-44 top-36 z-10 xl:block hidden" />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center bg-white p-7 shadow-2xl rounded-md z-30 relative">
        <Calendar />
      </div>
      <GiTennisCourt className="text-[350px] fill-stone-50 absolute -right-40 top-24 z-20 xl:block hidden" />
    </div>
  );
}

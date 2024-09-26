import Calendar from "../features/calendar/Calendar";
import TimeslotsList from "../features/booking/TimeslotsList";
export default function Booking() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center bg-white p-7 shadow-2xl rounded-md">
      <Calendar />
    </div>
  );
}

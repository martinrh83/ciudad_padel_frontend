import { addMonths, subMonths, format } from "date-fns";
import { es } from "date-fns/locale";
import { RiArrowLeftCircleLine } from "react-icons/ri";
import { RiArrowRightCircleLine } from "react-icons/ri";

export default function CalendarHeader({ currentMonth, setCurrentMonth }) {
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  return (
    <div className="header flex justify-between items-center mb-4">
      <RiArrowLeftCircleLine onClick={prevMonth} className="text-3xl" />
      <h2 className="capitalize">
        {format(currentMonth, "MMMM yyyy", { locale: es })}
      </h2>
      <RiArrowRightCircleLine onClick={nextMonth} className="text-3xl" />
    </div>
  );
}

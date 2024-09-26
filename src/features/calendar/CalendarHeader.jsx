import { addMonths, subMonths, format } from "date-fns";
import { es } from "date-fns/locale";

export default function CalendarHeader({ currentMonth, setCurrentMonth }) {
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  return (
    <div className="header flex justify-between items-center mb-4">
      <button onClick={prevMonth}>Prev</button>
      {/* Pasar la localización 'es' a format para el mes y año */}
      <h2 className="capitalize">
        {format(currentMonth, "MMMM yyyy", { locale: es })}
      </h2>
      <button onClick={nextMonth}>Next</button>
    </div>
  );
}

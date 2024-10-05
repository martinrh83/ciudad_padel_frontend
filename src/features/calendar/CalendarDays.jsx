import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isBefore,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { es } from "date-fns/locale";

export default function CalendarDays({
  currentMonth,
  selectedDay,
  setSelectedDay,
  onDayClick,
  dispatch,
}) {
  const today = new Date();
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const isDayDisabled = (day) =>
    (isBefore(day, today) && !isToday(day)) || getDay(day) === 0;

  const getDayClassNames = (day) => {
    if (isDayDisabled(day)) {
      return "text-slate-300 cursor-not-allowed";
    }

    if (
      selectedDay &&
      format(day, "yyyy-MM-dd") === format(selectedDay, "yyyy-MM-dd")
    ) {
      return "cursor-pointer rounded-full border border-slate-900 p-1 bg-lime-400 text-slate-900 font-bold";
    }

    return "cursor-pointer rounded-full border border-slate-300 hover:bg-lime-400 hover:text-white p-1 text-slate-500";
  };

  const handleDayClick = (day) => {
    if (!isDayDisabled(day)) {
      setSelectedDay(day);
      dispatch({ type: "booking/resetTimeslot" });
      onDayClick(day);
    }
  };

  return (
    <div className="grid grid-cols-7 gap-4 sm:gap-10 mt-8 place-items-center">
      {days.map((day) => (
        <div
          key={day.toISOString()}
          className={getDayClassNames(day)}
          onClick={() => handleDayClick(day)}
        >
          <span
            className={`flex items-center justify-center h-8 w-8 rounded-full `}
          >
            {format(day, "d", { locale: es })}
          </span>
        </div>
      ))}
    </div>
  );
}

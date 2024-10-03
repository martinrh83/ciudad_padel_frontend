import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isBefore,
  getDay,
  eachDayOfInterval,
  isToday,
  getDate,
  isAfter,
} from "date-fns";
import { es } from "date-fns/locale";
import DaysOfWeek from "./DaysOfWeek";
import { useTimeslotsByDay } from "../booking/useTimeslotsByDay";
import TimeslotsList from "../booking/TimeslotsList";
import CalendarHeader from "./CalendarHeader";
import { useBooking } from "../../contexts/BookingContext";

const Calendar = () => {
  const {
    dispatch,
    user,
    dayOfWeek: dayOfWeekContext,
    startTime,
    price,
    date,
  } = useBooking();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dayOfWeek, setDayOfWeek] = useState(getDay(new Date()));
  //const { timeslotsByDay, isLoading, error } = useTimeslotsByDay(dayOfWeek);

  const today = new Date();
  console.log("date", date);
  console.log("startTime", startTime);
  function handleGetDay(day) {
    console.log(day);
    setDayOfWeek((prevDayOfWeek) => getDay(day));
    dispatch({ type: "booking/date", payload: day });
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);

    // Iniciar desde el comienzo de la semana (lunes)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    // Terminar en el final de la semana (domingo) después del mes
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    // Obtener todos los días entre estas dos fechas
    const days = eachDayOfInterval({
      start: startDate,
      end: endDate,
    });

    return (
      <div className="grid grid-cols-7 gap-6 sm:gap-10 mt-8 place-items-center">
        {days.map((day, idx) => {
          // Solo deshabilitar si el día es anterior a hoy y es del mismo mes actual o si es domingo
          const isDisabled = isBefore(day, today) || getDay(day) === 0;

          return (
            <div
              key={idx}
              className={`${isBefore(day, today) ? "text-gray-300" : ""} ${
                isDisabled
                  ? "text-gray-300 cursor-not-allowed" // Días deshabilitados
                  : "cursor-pointer hover:bg-lime-500 hover:text-white"
              }`}
              onClick={() => handleGetDay(day)}
            >
              <span
                className={`flex items-center justify-center font-semibold h-8 w-8 rounded-full 
                } ${isToday(day) && "bg-red-500 text-white"}`}
              >
                {format(day, "d", { locale: es })}{" "}
                {/* Formatear el día con localización */}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="min-w-80 max-w-lg p-4 border rounded shadow-md mb-16 lg:mb-0 lg:mr-16 bg-white">
        <CalendarHeader
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        <DaysOfWeek />
        {renderCells()}
      </div>
      {dayOfWeek && <TimeslotsList dayOfWeek={dayOfWeek} />}
    </>
  );
};

export default Calendar;

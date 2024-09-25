import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isBefore,
  getDay,
  eachDayOfInterval,
  isToday,
} from "date-fns";
import { es } from "date-fns/locale"; // Importar la localización en español
import { daysOfWeek } from "../../utils/helpers";
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  function handleGetDay(day) {
    console.log(day);
  }
  const renderHeader = () => {
    return (
      <div className="header flex justify-between items-center mb-4">
        <button onClick={prevMonth}>Prev</button>
        {/* Pasar la localización 'es' a format para el mes y año */}
        <h2>{format(currentMonth, "MMMM yyyy", { locale: es })}</h2>
        <button onClick={nextMonth}>Next</button>
      </div>
    );
  };

  const renderDays = () => {
    return (
      <div className="days-grid grid grid-cols-7 gap-1">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="day-label flex justify-center">
            {day}
          </div>
        ))}
      </div>
    );
  };

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
      <div className="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center">
        {days.map((day, idx) => {
          // Solo deshabilitar si el día es anterior a hoy y es del mismo mes actual o si es domingo
          const isDisabled =
            (isBefore(day, today) && isSameMonth(day, currentMonth)) ||
            getDay(day) === 0;

          return (
            <div
              key={idx}
              className={`${
                isSameMonth(day, monthStart) ? "" : "text-gray-400" // Días fuera del mes actual en gris
              }`}
              onClick={() => handleGetDay(day)}
            >
              <p
                className={`flex items-center justify-center font-semibold h-8 w-8 rounded-full ${
                  isDisabled
                    ? "text-gray-300 cursor-not-allowed" // Días deshabilitados
                    : "cursor-pointer hover:bg-blue-500 hover:text-white" // Días activos
                } ${isToday(day) && "bg-red-500 text-white"}`}
              >
                {format(day, "d", { locale: es })}{" "}
                {/* Formatear el día con localización */}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-w-80 max-w-lg p-4 border rounded shadow-md">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;

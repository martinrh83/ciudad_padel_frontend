import { useState } from "react";
import { getDay } from "date-fns";
import DaysOfWeek from "./DaysOfWeek";
import TimeslotsList from "../booking/TimeslotsList";
import CalendarHeader from "./CalendarHeader";
import { useBooking } from "../../contexts/BookingContext";
import CalendarDays from "./CalendarDays";

const Calendar = () => {
  const {
    dispatch,
    user,
    dayOfWeek: dayOfWeekContext,
    courtId: courtIdContext,
  } = useBooking();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dayOfWeek, setDayOfWeek] = useState(getDay(new Date()));
  const [selectedDay, setSelectedDay] = useState(new Date());

  function handleGetDay(day) {
    console.log(day);
    setDayOfWeek((prevDayOfWeek) => getDay(day));
    dispatch({ type: "booking/date", payload: day });
  }

  return (
    <>
      <div className="min-w-80 max-w-lg p-4 border rounded shadow-md mb-16 lg:mb-0 lg:mr-16 bg-white">
        <CalendarHeader
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        <DaysOfWeek />
        <CalendarDays
          currentMonth={currentMonth}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          onDayClick={handleGetDay}
          dispatch={dispatch}
        />
      </div>
      {dayOfWeek && (
        <TimeslotsList
          dayOfWeek={dayOfWeek}
          selectedDay={selectedDay}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default Calendar;

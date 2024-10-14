import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useTimeslotsByDay } from "./useTimeslotsByDay";

import Timeslot from "./Timeslot";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { daysNames } from "../../utils/helpers";
import { formatISO } from "date-fns";

export default function TimeslotsList({
  dayOfWeek,
  selectedDay,
  dispatch,
  bookingState,
}) {
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);
  const { availableTimeslots, timeslotPrice, isLoading, error } =
    useTimeslotsByDay(
      dayOfWeek,
      formatISO(selectedDay, { representation: "date" })
    );
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  //console.log("Timeslots:", timeslots);
  useEffect(() => {
    // Restablecemos la selección al cambiar el día de la semana
    setIsSelectedIndex(null);
  }, [selectedDay]);

  if (isLoading) return <Spinner />;

  // Verificamos que timeslots esté definido y no esté vacío
  /* if (!timeslots || timeslots.length === 0) {
    return <p>No hay horarios disponibles.</p>;
  } */
  const groupedTimeslots = availableTimeslots.reduce((acc, timeslot) => {
    const { courtId } = timeslot;
    if (!acc[courtId]) {
      acc[courtId] = [];
    }
    acc[courtId].push(timeslot);
    return acc;
  }, {});
  console.log(groupedTimeslots);

  function handleSelectTimeslot(timeslot) {
    console.log(timeslot);
    setIsSelectedIndex(timeslot.id);
    dispatch({
      type: "booking/timeslot",
      payload: {
        timeslotId: timeslot.id,
        startTime: timeslot.startTime,
        endTime: timeslot.endTime,
        dayOfWeek: daysNames[timeslot.dayOfWeek],
        courtName: timeslot.courts["name"],
      },
    });
  }

  function handleOnBooking() {
    if (isAuthenticated) {
      console.log("esta logueado");
      dispatch({ type: "booking/price", payload: 24000 });
      dispatch({ type: "booking/create", payload: { userId: user.id } });
      console.log(bookingState);
      navigate("/booking/confirm");
    } else {
      navigate("/login");
    }
  }

  return (
    <>
      {/* {!isLoading && (
        <div className="flex flex-wrap">
          {timeslotsByDay.map((timeslot) => (
            <Timeslot timeslot={timeslot} key={timeslot.id} />
          ))}
        </div>
      )} */}
      {!isLoading && (
        <div className="flex flex-col items-center justify-center">
          {Object.keys(groupedTimeslots).map((courtId) => (
            <div key={courtId} className="mb-4 w-full">
              <div className="bg-slate-900 text-lime-400 text-center font-semibold rounded-lg uppercase mb-1">
                <h2 className="p-2">
                  {groupedTimeslots[courtId][0].courts.name}
                </h2>
              </div>
              <div className="flex flex-wrap">
                {groupedTimeslots[courtId].map((timeslot) => (
                  <Timeslot
                    timeslot={timeslot}
                    key={timeslot.id}
                    isSelected={isSelectedIndex === timeslot.id}
                    onClick={handleSelectTimeslot}
                  />
                ))}
              </div>
            </div>
          ))}
          <Button isDisabled={!isSelectedIndex} handleOnClick={handleOnBooking}>
            Reservar
          </Button>
        </div>
      )}
    </>
  );
}

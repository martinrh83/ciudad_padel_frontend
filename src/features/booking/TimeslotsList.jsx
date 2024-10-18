import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useTimeslotsByDay } from "./useTimeslotsByDay";

import Timeslot from "./Timeslot";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { daysNames } from "../../utils/helpers";
import { formatISO } from "date-fns";
import { GiTennisCourt } from "react-icons/gi";

export default function TimeslotsList({
  dayOfWeek,
  selectedDay,
  dispatch,
  bookingState,
}) {
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);
  const { availableTimeslots, settings, isLoading, error } = useTimeslotsByDay(
    dayOfWeek,
    formatISO(selectedDay, { representation: "date" })
  );
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  console.log("settings:", settings);
  useEffect(() => {
    // Restablecemos la selección al cambiar el día de la semana
    setIsSelectedIndex(null);
  }, [selectedDay]);

  if (isLoading) return <Spinner />;
  const { timeslotPrice, minimunPayment } = settings.at(0);

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
      dispatch({
        type: "booking/price",
        payload: {
          price: timeslotPrice,
          minimunPayment: minimunPayment,
        },
      });
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
      {!isLoading && Object.keys(groupedTimeslots).length === 0 && (
        <p className="italic text-slate-400 text-2xl">
          No hay turnos disponibles
        </p>
      )}
      {!isLoading && Object.keys(groupedTimeslots).length > 0 && (
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
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
          <div className="flex flex-col items-center justify-center gap-2 font-semibold mb-6">
            <div className="flex items-center gap-1">
              <GiTennisCourt className="inline-block text-xl" />
              Turno: 2hs
            </div>
            <div>
              Precio:
              <span className="text-lime-500"> ${timeslotPrice}</span> - Seña:
              <span className="text-lime-500"> ${minimunPayment}</span>
            </div>
          </div>
          <Button isDisabled={!isSelectedIndex} handleOnClick={handleOnBooking}>
            Reservar
          </Button>
        </div>
      )}
    </>
  );
}

import { useTimeslotsByDay } from "./useTimeslotsByDay";

import Timeslot from "./Timeslot";
import Spinner from "../../ui/Spinner";
import { useState } from "react";

export default function TimeslotsList({ dayOfWeek, dispatch }) {
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);
  const { timeslotsByDay, isLoading, error } = useTimeslotsByDay(dayOfWeek);

  //console.log("Timeslots:", timeslots);

  if (isLoading) return <Spinner />;

  // Verificamos que timeslots esté definido y no esté vacío
  /* if (!timeslots || timeslots.length === 0) {
    return <p>No hay horarios disponibles.</p>;
  } */
  const groupedTimeslots = timeslotsByDay.reduce((acc, timeslot) => {
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
      type: "booking/timeSlot",
      payload: {
        startTime: timeslot.startTime,
        courtId: timeslot.courtId,
        dayOfWeek: timeslot.dayOfWeek,
      },
    });
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
            <div key={courtId} className="court-group">
              <div className="bg-lime-500 text-center font-bold uppercase">
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
        </div>
      )}
    </>
  );
}

import { useTimeslots } from "./useTimeslots";

import Timeslot from "./Timeslot";

export default function TimeslotsList() {
  const { timeslots, isLoading, error } = useTimeslots();

  //console.log("Timeslots:", timeslots);

  if (isLoading) return <p>cargando...</p>;

  // Verificamos que timeslots esté definido y no esté vacío
  /* if (!timeslots || timeslots.length === 0) {
    return <p>No hay horarios disponibles.</p>;
  } */

  return (
    <div>
      {!isLoading && (
        <div className="flex flex-wrap">
          {timeslots.map((timeslot) => (
            <Timeslot timeslot={timeslot} key={timeslot.id} />
          ))}
        </div>
      )}
    </div>
  );
}

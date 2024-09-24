import { useTimeslots } from "./useTimeslots";

export default function TimeslotsList() {
  const { timeslots, isLoading, error } = useTimeslots();

  console.log(timeslots);
  if (isLoading) return <p>cargando...</p>;
  return (
    <div>
      {timeslots.map((timeslot) => (
        <span
          className="border border-solid border-stone-700 p-1 rounded-md m-2"
          key={timeslot.id}
        >
          {timeslot.startTime}
        </span>
      ))}
    </div>
  );
}

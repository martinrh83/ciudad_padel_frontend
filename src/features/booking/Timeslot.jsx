import { TimeslotFormatter } from "../../utils/helpers";

export default function Timeslot({ timeslot }) {
  return (
    <span className="border border-solid border-stone-700 p-1 rounded-md m-2 cursor-pointer">
      {timeslot.startTime
        ? TimeslotFormatter({ startTime: timeslot.startTime })
        : "Hora no disponible"}
    </span>
  );
}

import { useState } from "react";
import { TimeslotFormatter } from "../../utils/helpers";

export default function Timeslot({ timeslot, onClick, isSelected }) {
  return (
    <span
      className={`border border-solid border-stone-700 p-1 rounded-md m-2 cursor-pointer ${
        isSelected ? "bg-lime-400" : "bg-transparent"
      }`}
      onClick={() => onClick(timeslot)}
    >
      {timeslot.startTime
        ? TimeslotFormatter({ startTime: timeslot.startTime })
        : "Hora no disponible"}
    </span>
  );
}

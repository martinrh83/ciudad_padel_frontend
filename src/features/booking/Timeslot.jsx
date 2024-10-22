import { useState } from "react";
import { TimeslotFormatter } from "../../utils/helpers";

export default function Timeslot({ timeslot, onClick, isSelected }) {
  return (
    <span
      className={`border border-solid  p-1 rounded-lg m-1 sm:m-2 cursor-pointer ${
        isSelected
          ? "bg-lime-400  text-slate-900 border-slate-900 font-bold"
          : "bg-transparent text-slate-500 border-slate-300"
      }`}
      onClick={() => onClick(timeslot)}
    >
      {timeslot.startTime
        ? TimeslotFormatter({ startTime: timeslot.startTime })
        : "Hora no disponible"}
    </span>
  );
}

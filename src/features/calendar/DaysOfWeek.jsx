import { daysOfWeek } from "../../utils/helpers";

export default function DaysOfWeek() {
  return (
    <div className="days-grid grid grid-cols-7 gap-4 sm:gap-10">
      {daysOfWeek.map((day, idx) => (
        <div key={idx} className="day-label flex justify-center">
          {day}
        </div>
      ))}
    </div>
  );
}

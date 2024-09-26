import { daysOfWeek } from "../../utils/helpers";

export default function DaysOfWeek() {
  return (
    <div className="days-grid grid grid-cols-7 gap-4">
      {daysOfWeek.map((day, idx) => (
        <div key={idx} className="day-label flex justify-center">
          {day}
        </div>
      ))}
    </div>
  );
}

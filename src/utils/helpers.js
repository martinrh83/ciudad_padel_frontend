import { format } from "date-fns";

export const TimeslotFormatter = ({ startTime }) => {
  //const startTime = "2024-09-28 14:00:00";
  //console.log(startTime);
  try {
    return format(new Date(startTime), "HH:mm");
  } catch (error) {
    console.error("Error formateando el timestamp:", error);
    return "Invalid date";
  }
};

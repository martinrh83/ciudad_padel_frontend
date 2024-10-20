import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

export const TimeslotFormatter = ({ startTime }) => {
  if (!startTime || typeof startTime !== "string") {
    return "Invalid time";
  }

  try {
    // Creamos una fecha ficticia usando la hora proporcionada
    const [hours, minutes, seconds] = startTime.split(":");
    const date = new Date();
    date.setHours(hours, minutes, seconds);

    // Formateamos usando date-fns
    return format(date, "HH:mm");
  } catch (error) {
    console.error("Error formateando el tiempo:", error);
    return "Invalid time";
  }
};

export function getToday() {
  const timeZone = "America/Argentina/Buenos_Aires";

  // Obtener la fecha actual en la zona horaria de Argentina
  const today = formatInTimeZone(new Date(), timeZone, "yyyy-MM-dd");
  return today;
}
export function formatDateTimezone(date) {
  const formattedDate = formatInTimeZone(
    date,
    "America/Argentina/Buenos_Aires",
    "dd/MM/yyyy"
  );

  return formattedDate;
}

export const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

export const daysNames = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

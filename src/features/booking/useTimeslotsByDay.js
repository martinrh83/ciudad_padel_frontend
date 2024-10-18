import { useQuery } from "@tanstack/react-query";
import { getTimeSlotsByDayOfWeek } from "../../services/apiTimeslots";

export function useTimeslotsByDay(dayOfWeek, selectedDay) {
  const {
    data,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["timeslotsByDay", dayOfWeek, selectedDay], // Incluye el parámetro en la queryKey
    queryFn: () => getTimeSlotsByDayOfWeek(dayOfWeek, selectedDay), // Llama a la función con el parámetro
    enabled: !!dayOfWeek, // Asegúrate de que la consulta no se ejecute si dayOfWeek es null o undefined
  });
  const { availableSlots: availableTimeslots = [], settings = [] } = data ?? {};
  return { availableTimeslots, settings, isLoading, error };
}

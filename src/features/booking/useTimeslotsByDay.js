import { useQuery } from "@tanstack/react-query";
import { getTimeSlotsByDayOfWeek } from "../../services/apiTimeslots";

export function useTimeslotsByDay(dayOfWeek) {
  const {
    data: timeslotsByDay,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["timeslotsByDay", dayOfWeek], // Incluye el parámetro en la queryKey
    queryFn: () => getTimeSlotsByDayOfWeek(dayOfWeek), // Llama a la función con el parámetro
    enabled: !!dayOfWeek, // Asegúrate de que la consulta no se ejecute si dayOfWeek es null o undefined
  });

  return { timeslotsByDay, isLoading, error };
}

import { useQuery } from "@tanstack/react-query";
import { getTimeslots } from "../../services/apiTimeslots";

export function useTimeslots() {
  const {
    data: timeslots,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["timeslots"],
    queryFn: getTimeslots,
  });

  return { timeslots, isLoading, error };
}

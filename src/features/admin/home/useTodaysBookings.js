import { useQuery } from "@tanstack/react-query";
import { getTodaysBookings } from "../../../services/apiBookings";

export function useTodaysBookings() {
  const {
    data: todaysBookings,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["todaysBookings"],
    queryFn: getTodaysBookings,
  });

  return { todaysBookings, isLoading, error };
}

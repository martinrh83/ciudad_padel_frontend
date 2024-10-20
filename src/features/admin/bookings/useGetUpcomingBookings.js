import { useQuery } from "@tanstack/react-query";
import { getUpcomingBookings } from "../../../services/apiBookings";

export function useGetUpcomingBookings() {
  const {
    data: upcomingBookings,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["upcoming_bookings"],
    queryFn: getUpcomingBookings,
  });

  return { upcomingBookings, isLoading, error };
}

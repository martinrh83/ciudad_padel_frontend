import { useQuery } from "@tanstack/react-query";
import { getUserBookingsAfterToday } from "../../services/apiBookings";

export function useGetUserBookings(userId) {
  const {
    data: userBookings,
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["mybookings"],
    queryFn: () => getUserBookingsAfterToday(userId),
  });

  return { userBookings, error, isLoading };
}

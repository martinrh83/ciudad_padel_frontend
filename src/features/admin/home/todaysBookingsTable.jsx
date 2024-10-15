import Spinner from "../../../ui/Spinner";
import { useTodaysBookings } from "./useTodaysBookings";

export default function TodaysBookingTable() {
  const { todaysBookings, isLoading } = useTodaysBookings();
  console.log(todaysBookings);
  if (isLoading) return <Spinner />;
  return <div>pp</div>;
}

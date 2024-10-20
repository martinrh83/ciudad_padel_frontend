import TodaysBookingTable from "../../features/admin/bookings/TodaysBookingTable";
import Card from "../../ui/admin/Card";
import Heading from "../../ui/admin/Heading";

export default function AdminDashboard() {
  return (
    <>
      <Heading>Reservas de hoy</Heading>
      <Card>
        <TodaysBookingTable />
      </Card>
    </>
  );
}

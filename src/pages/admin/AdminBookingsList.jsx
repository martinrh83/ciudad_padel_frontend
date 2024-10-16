import BookingsTable from "../../features/admin/bookings/BookingsTable";
import Card from "../../ui/admin/Card";
import Heading from "../../ui/admin/Heading";

export default function AdminBookingsList() {
  return (
    <>
      <Heading>Reservas</Heading>
      <Card>
        <BookingsTable />
      </Card>
    </>
  );
}

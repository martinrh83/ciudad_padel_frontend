import { useDeleteBooking } from "./useDeleteBooking";
import { useGetUpcomingBookings } from "./useGetUpcomingBookings";
import { useUpdateBookingStatus } from "./useUpdateBookingStatus";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Table from "../../../ui/Table";
import Tag from "../../../ui/Tag";
import Spinner from "../../../ui/Spinner";
import { RiDeleteBin6Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import { formatDateTimezone } from "../../../utils/helpers";

export default function BookingsTable() {
  const { upcomingBookings, isLoading } = useGetUpcomingBookings();
  const { updateBookingStatus, isUpdating } = useUpdateBookingStatus();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  console.log(upcomingBookings);

  const statusLabel = {
    pending: "Pendiente",
    confirmed: "Confirmado",
    completed: "Completado",
  };

  const data = upcomingBookings?.map((booking) => {
    return {
      id: booking.id,
      bookingDate: formatDateTimezone(booking.bookingDate),
      courtName: booking.courtName,
      startTime: booking.startTime.substring(0, 5),
      fullName: booking.fullname ?? "-",
      userPhone: booking.phone ?? "-",
      status: booking.status,
      statusLabel: statusLabel[booking.status],
    };
  });

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("bookingDate", {
      header: () => "Fecha",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("startTime", {
      header: () => "Hs. Inicio",
      cell: (info) => <h4>{info.getValue()}</h4>,
    }),
    columnHelper.accessor("courtName", {
      header: () => "Cancha",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("fullName", {
      header: () => "Nombre",
    }),
    columnHelper.accessor("userPhone", {
      header: () => "Celular",
    }),
    columnHelper.accessor("statusLabel", {
      header: () => "Pago",
      cell: (info) => <Tag type={info.getValue()}>{info.getValue()}</Tag>,
    }),
  ];

  const renderActions = (booking) => (
    <div className="flex gap-2 text-2xl">
      {booking.status !== "completed" && (
        <RiMoneyDollarCircleLine
          className="cursor-pointer"
          onClick={() => handleUpdatBookingStatus(booking)}
        />
      )}
      <RiDeleteBin6Line
        className="cursor-pointer"
        onClick={() => handleCancelBooking(booking)}
      />
    </div>
  );

  function handleUpdatBookingStatus(booking) {
    console.log("Updating booking status...", booking);
    let newStatus = "";

    switch (booking.status) {
      case "pending":
        newStatus = "confirmed";
        break;
      case "confirmed":
        newStatus = "completed";
        break;
      case "completed":
        newStatus = "completed";
        break;
      default:
        console.error(
          "Ha ocurrido un error al actualizar el estado:",
          booking.status
        );
        return;
    }

    if (newStatus) {
      updateBookingStatus({ bookingId: booking.id, newStatus });
    }
  }

  function handleCancelBooking(booking) {
    console.log("Canceling boooking...", booking);
    deleteBooking(booking.id);
  }

  const table = useReactTable({
    data,
    columns: renderActions
      ? [
          ...columns,
          {
            accessor: "actions",
            header: "Acciones",
            cell: (info) => renderActions(info.row.original),
          },
        ]
      : columns,
    getCoreRowModel: getCoreRowModel(),
  });
  /* const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  }); */

  if (isLoading || isUpdating || isDeleting) return <Spinner />;
  if (upcomingBookings?.length === 0)
    return <div className="text-xl">No hay reservas</div>;

  return <Table table={table} isLoading={isLoading} />;
}

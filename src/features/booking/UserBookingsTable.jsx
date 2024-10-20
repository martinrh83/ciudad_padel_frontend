import { useDeleteBooking } from "../admin/bookings/useDeleteBooking";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { formatDateTimezone } from "../../utils/helpers";
import { RiCloseCircleFill } from "react-icons/ri";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";

export function UserBookingTable({ userBookings }) {
  const { deleteBooking } = useDeleteBooking();
  const statusLabel = {
    pending: "Pendiente",
    confirmed: "Confirmado",
    completed: "Completo",
  };

  const data = userBookings?.map((booking) => {
    return {
      id: booking.id,
      price: booking.price,
      courtName: booking.timeslots.courts.name,
      startTime: booking.timeslots.startTime.substring(0, 5),
      endTime: booking.timeslots.endTime.substring(0, 5),
      bookingDate: formatDateTimezone(booking.bookingDate),
      status: statusLabel[booking.status],
    };
  });

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("bookingDate", {
      header: () => "Fecha",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("courtName", {
      header: () => "Cancha",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("startTime", {
      header: () => "Desde",
      cell: (info) => <h4>{info.getValue()}</h4>,
    }),
    columnHelper.accessor("endTime", {
      header: () => "Hasta",
      cell: (info) => <h4>{info.getValue()}</h4>,
    }),
    columnHelper.accessor("price", {
      header: () => "Precio",
      cell: (info) => <h4>${info.getValue()}</h4>,
    }),
    columnHelper.accessor("status", {
      header: () => "Pago",
      cell: (info) => <Tag type={info.getValue()}>{info.getValue()}</Tag>,
    }),
  ];

  const renderActions = (booking) => (
    <div
      className="flex gap-1 text-sm items-center justify-center bg-red-200 text-red-500 py-1 px-2 rounded-2xl cursor-pointer"
      onClick={() => handleCancelBooking(booking)}
    >
      <RiCloseCircleFill className="" />
      <span>Cancelar</span>
    </div>
  );

  function handleCancelBooking(booking) {
    console.log("Canceling booking...", booking);
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

  return <Table table={table} />;
}

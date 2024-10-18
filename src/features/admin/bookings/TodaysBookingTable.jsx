import { useTodaysBookings } from "../home/useTodaysBookings";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { RiDeleteBin6Line } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

import Spinner from "../../../ui/Spinner";
import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import { useUpdateBookingStatus } from "./useUpdateBookingStatus";
import { useDeleteBooking } from "./useDeleteBooking";

export default function TodaysBookingTable() {
  const { todaysBookings, isLoading } = useTodaysBookings();
  const { updateBookingStatus, isUpdating } = useUpdateBookingStatus();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  console.log(todaysBookings);

  const statusLabel = { confirmed: "Sin pagar", completed: "Pagada" };

  const data = todaysBookings?.map((booking) => {
    return {
      id: booking.id,
      courtName: booking.courtName,
      startTime: booking.startTime.substring(0, 5),
      userEmail: booking.userEmail,
      status: statusLabel[booking.status],
    };
  });

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("courtName", {
      header: () => "Cancha",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("startTime", {
      header: () => "Hs. Inicio",
      cell: (info) => <h4>{info.getValue()}</h4>,
    }),
    columnHelper.accessor("userEmail", {
      header: () => "Email",
    }),
    columnHelper.accessor("status", {
      header: () => "Estado",
      cell: (info) => <Tag type={info.getValue()}>{info.getValue()}</Tag>,
    }),
  ];

  const renderActions = (booking) => (
    <div className="flex gap-2 text-2xl">
      {booking.status !== "Pagada" && (
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
    if (booking.status !== "Pagada") {
      updateBookingStatus(booking.id);
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

  if (isLoading) return <Spinner />;

  return <Table table={table} isLoading={isLoading} />;
}
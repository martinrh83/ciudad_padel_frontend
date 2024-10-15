import { useTodaysBookings } from "../home/useTodaysBookings";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Spinner from "../../../ui/Spinner";
import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";

export default function TodaysBookingTable() {
  const { todaysBookings, isLoading } = useTodaysBookings();
  console.log(todaysBookings);

  const statusLabel = { confirmed: "Sin pagar", completed: "Pagada" };

  const data = todaysBookings?.map((booking) => {
    return {
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <Spinner />;

  return <Table table={table} isLoading={isLoading} />;
}

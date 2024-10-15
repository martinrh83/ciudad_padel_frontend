import { flexRender } from "@tanstack/react-table";
import Spinner from "./Spinner";

export default function Table({ table, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <table className="min-w-full border border-slate-600 rounded-md overflow-hidden text-sm shadow-md">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="bg-slate-100 uppercase font-bold text-slate-600 "
          >
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="border-b border-slate-200 text-left py-4 px-6"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="bg-white">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="py-4 px-6 border-b border-slate-200">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { AnimatePresence, motion } from "framer-motion";

type TableProps = {
  data: Array<unknown>;
  columns: Array<any>;
  isAnimationEnabled?: boolean;
};

const Table = ({ data, columns, isAnimationEnabled = false }: TableProps) => {
  //
  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  //
  return (
    <div className="w-full overflow-auto">
      <table className="min-w-full border-separate border-spacing-y-1">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-2 px-2 text-xs text-start font-normal text-gray-400 whitespace-nowrap bg-white rounded"
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
        <tbody>
          <AnimatePresence>
            {table.getRowModel().rows.map((row, index) => {
              return (
                <motion.tr
                  initial={isAnimationEnabled ? { opacity: 0 } : {}}
                  animate={isAnimationEnabled ? { opacity: 1 } : {}}
                  transition={
                    isAnimationEnabled
                      ? {
                          duration: 0.3,
                          ease: "easeOut",
                          delay: index * 0.05,
                        }
                      : {}
                  }
                  key={row.id}
                  className="bg-white"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="py-2 px-3 text-xs font-medium text-start text-[#0c0b0b]"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </motion.tr>
              );
            })}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

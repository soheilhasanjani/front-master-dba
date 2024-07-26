import React from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  forcePage: number;
  pageCount: number;
  onPageChange: (event: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  pageCount,
  forcePage,
}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      forcePage={forcePage}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName="flex justify-center items-center gap-2"
      pageClassName="size-8 flex items-center shadow rounded justify-center bg-white"
      nextClassName="size-8 flex items-center shadow rounded justify-center bg-white"
      previousClassName="size-8 flex items-center shadow rounded justify-center bg-white"
      activeClassName="!bg-[#0f70b7] !text-white"
      disabledClassName="opacity-50 pointer-events-none"
      pageLinkClassName="mt-1"
    />
  );
};

export default Pagination;

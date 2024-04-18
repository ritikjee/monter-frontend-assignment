"use client";

import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { usePage } from "@/providers/data-provider";
import { cn } from "@/lib/utils";
import { dummyData } from "@/dummy-data";

type Props = {};

function BottomBar({}: Props) {
  const { page, pageSize, setPage, setPageSize } = usePage();

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(
      dummyData.length / pageSize,
      startPage + maxPagesToShow - 1
    );

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={cn(
            "border-2 flex  justify-center items-center sm:w-8 w-6 h-6 sm:h-8 rounded-xl",
            page === i && "bg-orange-600 text-white"
          )}
          onClick={() => setPage(i)}
        >
          <p>{i}</p>
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="w-full flex items-center justify-center gap-1 sm:gap-3 mt-5">
      <div className="flex items-center justify-center gap-2">
        <button
          className="flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
          disabled={page === 1}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          <RxTrackPrevious />
          Prev
        </button>
        <div className="flex ">{renderPageNumbers()}</div>

        <button
          className="flex flex-row-reverse items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
          disabled={page === dummyData.length / pageSize}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <RxTrackNext />
          Next
        </button>
      </div>
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        Rows <span className="hidden sm:flex">per page</span>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>{pageSize}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => setPageSize(10)}>10</MenubarItem>
              <MenubarSeparator />
              <MenubarItem onClick={() => setPageSize(20)}>20</MenubarItem>
              <MenubarSeparator />
              <MenubarItem onClick={() => setPageSize(50)}>50</MenubarItem>
              <MenubarSeparator />
              <MenubarItem onClick={() => setPageSize(100)}>100</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}

export default BottomBar;

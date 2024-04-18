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

type Props = {};

function BottomBar({}: Props) {
  const { page, pageSize, setPage, setPageSize } = usePage();
  return (
    <div className="w-full flex items-center justify-center gap-3 mt-5">
      <div className="flex items-center justify-center gap-2">
        <button
          className="flex items-center justify-center gap-1 hover:cursor-pointer"
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          <RxTrackPrevious />
          Prev
        </button>
        <div>{page}</div>
        <button
          className="flex flex-row-reverse items-center justify-center gap-1 hover:cursor-pointer"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <RxTrackNext />
          Next
        </button>
      </div>
      <div className="flex items-center justify-center gap-2">
        Rows per page
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

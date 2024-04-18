import { CiFilter } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { TbFileDownload } from "react-icons/tb";

import Button from "./_components/button";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import TableRow from "./_components/table-row";
import { dummyData } from "@/dummy-data";

export default function Home() {
  return (
    <MaxWidthWrapper className="h-screen bg-purple-400 py-5 flex flex-col">
      <div>
        <div className=" w-full flex flex-row justify-around mb-5">
          <div />
          <div className="font-bold text-2xl">Recently Generated Reports</div>
          <div className="flex flex-row items-center justify-center gap-5">
            <Button>
              <CiFilter className="text-2xl text-gray-600 font-bold" />
            </Button>
            <Button>
              <RxCross2 className="text-2xl text-gray-600 font-bold" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden  bg-red-500">
        <TableRow name1="Date" name2="Report Name" name3="Download" heading />
        <div className=" overflow-scroll overflow-x-hidden">
          {dummyData.map((data) => (
            <TableRow
              key={data.fileId}
              name1={
                <div>
                  <div>{data.date}</div>
                  <div className="text-sm">{data.time}</div>
                </div>
              }
              name2={data.reportName}
              name3={<TbFileDownload className="sm:text-2xl" />}
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

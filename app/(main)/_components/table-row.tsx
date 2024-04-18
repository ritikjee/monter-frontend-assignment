import { cn } from "@/lib/utils";

type TableRowProps = {
  name1: string | JSX.Element;
  name2: string;
  name3: string | JSX.Element;
  heading?: boolean;
};

function TableRow({ name1, name2, name3, heading }: TableRowProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-row items-center justify-around px-2 py-1 my-2 ",
        heading ? "font-bold text-lg text-gray-500 bg-gray-200" : null
      )}
    >
      <div className="md:w-52">{name1}</div>
      <div className="flex md:flex-1 overflow-clip">{name2}</div>
      <div className="px-5">{name3}</div>
    </div>
  );
}

export default TableRow;

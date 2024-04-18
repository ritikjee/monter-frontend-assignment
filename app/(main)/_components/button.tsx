import React from "react";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="hover:cursor-pointer border-[1.5px] border-black bg-gray-200 rounded-md h-6 sm:w-8 sm:h-8 flex justify-center items-center">
      {children}
    </div>
  );
}

export default Button;

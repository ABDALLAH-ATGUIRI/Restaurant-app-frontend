import React from "react";
import { GoPlus } from "react-icons/go";

const HeaderTable = ({ setShowDialog, target, children }) => {
  return (
    <div className="flex items-end justify-between py-10 px-7">
      <div className="flex-col items-center ">
        <h1 className="text-2xl font-extrabold leading-relaxed first-letter:uppercase text-gray-800 pb-6 pl-2">
          {target} List
        </h1>
        <div>{children}</div>
      </div>
      <button
        onClick={() => setShowDialog(true)}
        className="inline-flex gap-x-2 items-center py-2 px-6 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1"
      >
        <GoPlus size={20} className="w-6  h-6 fill-current text-white" />
        <span className="text-sm font-semibold tracking-wide">
          Create new {target}
        </span>
      </button>
    </div>
  );
};

export default HeaderTable;

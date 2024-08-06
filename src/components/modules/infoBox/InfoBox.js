import React from "react";
import { IoStatsChart } from "react-icons/io5";
const Box = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 md:w-60 p-2 rounded-2xl border-2 border-primary text-primary">
      <IoStatsChart size={25} />
      <div className="flex items-center justify-between gap-x-8 py-2">
        <p>{title}</p>
        <span className="text-lg">{value}</span>
      </div>
    </div>
  );
};

export default Box;

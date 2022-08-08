import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Header = () => {
  return (
    <div className="flex  justify-between py-5">
      <div className="archive ">
        <span className="p-1 bg-white rounded mr-2 ">
          <IoIosArrowBack className="inline  text-gray-600 mb-1  " />
        </span>
        Archive
      </div>
      <h2 className="font-bold">Today's Plan</h2>
      <div className="archive ">
        This week
        <span className="p-1 bg-white rounded ml-2 ">
          <IoIosArrowForward className="inline  text-gray-600 mb-1  " />
        </span>
      </div>
    </div>
  );
};

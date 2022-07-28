import React from "react";
import {
  BsFillCalendarEventFill,
  BsFillFolderFill,
  BsFillTagFill,
  BsDoorClosedFill,
} from "react-icons/bs";
import { RiFileListFill } from "react-icons/ri";

export const Sidebar = () => {
  return (
    <div className="bg-white h-screen w-1/6 ">
      <h2 className=" border-b-2 border-gray-200  font-bold p-5  text-xl">
        <span className="text-amber-600 ml-5">Task Manger</span>
        App
      </h2>
      <div className="flex flex-col justify-between h-5/6 font-bold mt-3">
        <div>
          <h5 className="hover:bg-amber-200  w-9/12 rounded-lg m-auto ">
            <BsFillCalendarEventFill className="inline m-3" /> Plan
          </h5>
          <h5 className="hover:bg-amber-200  w-9/12 rounded-lg m-auto ">
            <RiFileListFill className="inline  m-3" />
            Task list
          </h5>
          <h5 className="hover:bg-amber-200  w-9/12 rounded-lg m-auto ">
            <BsFillFolderFill className="inline  m-3" /> Projects
          </h5>
          <h5 className="hover:bg-amber-200  w-9/12 rounded-lg m-auto ">
            <BsFillTagFill className="inline m-3" /> Tags
          </h5>
        </div>
        <div>
          <span className="py-2 px-4  bg-black rounded-lg ml-10 mr-3 ">
            <BsDoorClosedFill className="inline  text-white mb-1  " />
          </span>
          logout
        </div>
      </div>
    </div>
  );
};

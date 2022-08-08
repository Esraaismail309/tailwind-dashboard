import React from "react";
import { AiTwotoneMessage } from "react-icons/ai";
export const PaperHeader = () => {
  return (
    <div className="p-10 border-b-2 ">
      <h1 className="text-4xl font-bold">
        Messaging ID framework development for the markting branch
      </h1>
      <div className="flex justify-between items-center">
        <div>
          <small>Members connected</small>
        </div>
        <div className="flex justify-between items-center">
          <span className="py-1 px-2  rounded-lg mr-3 border border-gray-300">
            <AiTwotoneMessage className="inline text-xl mb-0.5" />
          </span>
          <span className=" py-1 px-2 bg-black rounded-lg mr-3 text-gray-200">
            Open
          </span>
        </div>
      </div>
    </div>
  );
};

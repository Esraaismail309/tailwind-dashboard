import React from "react";
import { PapersStats } from "./PapersStats";
import { PaperTasks } from "./PaperTasks";
export const PaperBody = () => {
  return (
    <div>
      <div className="flex justify-between p-10 ">
        <div className="basis-1/2 px-5">
          <h2 className="font-bold text-2xl m-3">Stats</h2>
          <PapersStats />
        </div>
        <div className="basis-1/2 px-5">
          <h2 className="font-bold text-2xl m-3">Your task today</h2>
          <PaperTasks />
        </div>
      </div>
    </div>
  );
};

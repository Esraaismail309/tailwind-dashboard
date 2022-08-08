import React from "react";
import { StatsItem } from "./StatsItem";

export const PapersStats = () => {
  return (
    <div>
      <div className="bg-green-100 rounded-lg p-6 m-2 basis-full">
        <h2 className="font-semibold text-2xl mb-3">Good day ,</h2>
        <span className="bg-white rounded-md p-2">Start tracking</span>
      </div>
      <div className="flex justify-between">
        <StatsItem
          bg="bg-amber-100"
          title="20"
          class="basis-1/2"
          body="Tasks finished"
        />

        <StatsItem
          bg="bg-amber-100"
          title="5,5"
          class="basis-1/2"
          body="Tracked hours"
        />
      </div>
      <StatsItem
        bg="bg-violet-100"
        title="Your daily plan"
        body="5 of 8 completed"
        class="basis-full"
      />
    </div>
  );
};

import React from "react";
import { TaskItem } from "./TaskItem";
// RiErrorWarningFill

export const PaperTasks = () => {
  return (
    <div>
      <TaskItem
        time="4h"
        title="Number 10"
        header="Blog and social posts"
        body=" Deadline is today"
      />
      <TaskItem
        time="7d"
        title="Grace Aroma "
        header="New camping review "
        body=" New feedback"
      />
      <TaskItem
        time="2h"
        title="Petz App"
        header="Cross-platform and browser QA"
      />
    </div>
  );
};

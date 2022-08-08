import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

export const TaskItem = (props) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mt-3 ">
      <div className="flex justify-between">
        <div className="text-gray-500"> {props.title}</div>
        <div className="text-gray-500"> {props.time}</div>
      </div>
      <h2 className="font-semibold text-l">{props.header}</h2>
      {props.body ? (
        <p className="text-gray-700">
          <RiErrorWarningFill className="inline" />
          {props.body}
        </p>
      ) : null}
    </div>
  );
};

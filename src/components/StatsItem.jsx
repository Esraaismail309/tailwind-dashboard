import React from "react";

export const StatsItem = (props) => {
  return (
    <div className={`${props.bg} rounded-lg p-6 m-2  ${props.class}`}>
      <h2 className="font-semibold text-2xl">{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};

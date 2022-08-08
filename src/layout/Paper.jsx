import React from "react";
import { PaperBody } from "../components/PaperBody";
import { PaperHeader } from "../components/PaperHeader";

export const Paper = () => {
  return (
    <div className="bg-white rounded-lg ">
      <PaperHeader />
      <PaperBody />
    </div>
  );
};

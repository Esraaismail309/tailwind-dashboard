import React from "react";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";

export const Home = () => {
  return (
    <div className="bg-yellow-50 h-screen ">
      <div className="container">
        {/* <div className="columns-3"> </div> */}
        <Sidebar />
        {/* <Content /> */}
      </div>
    </div>
  );
};

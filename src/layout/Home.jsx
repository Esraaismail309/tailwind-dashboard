import React from "react";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";

export const Home = () => {
  return (
    <div className="bg-yellow-50 h-screen ">
      <div className="container flex justify-around">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

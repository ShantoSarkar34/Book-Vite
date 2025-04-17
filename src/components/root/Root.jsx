import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router";
import Footer from "../footer/Footer";

const Root = () => {
  return (
    <div className=" bg-white w-full">
      <div className="container mx-auto px-4">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

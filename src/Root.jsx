import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/styles.css";
import Breadcrumb from "./components/Breadcrumb.jsx";

const Root = () => {
  return (
    <>
      <Breadcrumb />
      <Outlet />
    </>
  );
};

export default Root;

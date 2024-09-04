import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import Footer from "../components/shared/Footer";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

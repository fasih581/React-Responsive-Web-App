import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/layout/HomePage/Home/Home";
import Form from "../components/layout/MemberShipForm/MemberShipForm";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default MainRouter;

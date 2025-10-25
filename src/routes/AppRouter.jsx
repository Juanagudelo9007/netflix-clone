import React from "react";
import { Route, Routes } from "react-router-dom";
import MyNetflix from "../pages/MyNetflix";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="mynetflix" element={<MyNetflix />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default AppRouter;

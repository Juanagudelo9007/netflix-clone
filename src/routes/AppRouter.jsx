import React from "react";
import { Route, Routes } from "react-router-dom";
import MyNetflix from "../pages/MyNetflix";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shows from "../pages/Shows";
import PrivateRoutes from "./PrivateRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="mynetflix" element={<MyNetflix />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="shows" element={<Shows />} />
    </Routes>
  );
};

export default AppRouter;

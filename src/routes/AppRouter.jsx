import React from "react";
import { Route, Routes } from "react-router-dom";
import MyNetflix from "../pages/MyNetflix";
import Home from "../pages/Home";
import Shows from "../pages/Shows";
import HomeLayout from "../components/HomeLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/mynetflix" element={<MyNetflix />} />
        <Route path="/shows" element={<Shows />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

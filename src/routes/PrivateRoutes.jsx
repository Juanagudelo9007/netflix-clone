import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Credentials } from "../context/UserCredentials";

const PrivateRoutes = () => {
  const { user, isLoggedIn } = useContext(Credentials);

  if (!isLoggedIn) return;
  return user ? <Outlet /> : <Navigate to="register" replace />;
};

export default PrivateRoutes;

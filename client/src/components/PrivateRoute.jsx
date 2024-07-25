import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  console.log("This is the current user from the private route ", currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;

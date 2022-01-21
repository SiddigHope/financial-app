import React from "react";
import { useHistory, Redirect, useLocation } from "react-router-dom";
import UserClass from "../authHandler";

export default function RequireAuth({ children }) {
  const authed = UserClass.isAuthenticated();
  const location = useLocation();

  console.log(authed);

  return authed === true ? (
    children
  ) : (
    // <div>{JSON.stringify(location)}</div>
    <Redirect to={{ pathname: "/adminlogin", state: location.pathname }} replace />
  );
}

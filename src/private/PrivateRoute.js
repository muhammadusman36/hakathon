import React from "react";
import { useAuthContext } from "../context/AuthContext";
import SignIn from "../pages/Auth/SignIn";

function PrivateRoute({ Component }) {
  const { isLoggedIn, authe } = useAuthContext();
  if (isLoggedIn) {
    return Component;
  }
  return <SignIn />;
}

export default PrivateRoute;

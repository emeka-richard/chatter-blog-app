import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuthVerifyUser from "./userAuth-Verify-middleware";

const ProtectedRouteAuth = ({ element, ...rest }: any) => {
  const { isAuthenticated } = useAuthVerifyUser();

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/auth/sign/login" />
  );
};

export default ProtectedRouteAuth;

import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

export function ProtectedRoute({ children, ...rest }) {
  const userLogin = useSelector((state) => state.authReducer);
  return (
    <Route
      {...rest}
      render={() =>
        userLogin?.isLogin ? children : <Redirect to={{ pathname: "/login" }} />
      }
    />
  );
}

export function AdminRoute({ children, ...rest }) {
  const { userInfo, isLogin } = useSelector((state) => state.authReducer);
  return (
    <Route
      {...rest}
      render={() =>
        isLogin && userInfo[0]?.roles === "admin" ? (
          children
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

export function AuthRoute({ children, ...rest }) {
  const userLogin = useSelector((state) => state.authReducer);
  return (
    <Route
      {...rest}
      render={() =>
        userLogin.isLogin ? <Redirect to={{ pathname: "/login" }} /> : children
      }
    />
  );
}

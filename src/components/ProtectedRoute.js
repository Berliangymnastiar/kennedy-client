import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router";

export function ProtectedRoute({ children, ...rest }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <Route
      {...rest}
      render={() =>
        token ? children : <Redirect to={{ pathname: "/login" }} />
      }
    />
  );
}

export function AdminRoute({ children, ...rest }) {
  const [userInfo, setUserInfo] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <Route
      {...rest}
      render={() =>
        token && userInfo[0]?.roles === "admin" ? (
          children
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

export function AuthRoute({ children, ...rest }) {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);
  return (
    <Route
      {...rest}
      render={() =>
        token ? <Redirect to={{ pathname: "/login" }} /> : children
      }
    />
  );
}

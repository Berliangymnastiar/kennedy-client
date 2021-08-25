import React, { useState, Fragment } from "react";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";
import iconLoginWithGoogle from "../assets/images/icon-google.svg";

import Footer from "../components/Footer";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const submitLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    Axios.post("http://localhost:8000/auth/login", data)
      .then((result) => {
        if (result) {
          localStorage.setItem("token", result.data.result.token);
          setRedirect(true);
        }
      })
      .catch((e) => setError(e.response.data.message));
  };

  const token = localStorage.getItem("token");
  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      {redirect ? <Redirect to="/vehicle-type" /> : ""}
      <main>
        <section className="jumbotron-fluid jumbotron-login">
          <div className="container container-fluid">
            <div className="flex-container">
              <div className="flex-item-1">
                <h2>
                  Le’ts Explore <br />
                  The World
                </h2>
                <h5>Don’t have account?</h5>
                <Link to="/sign-up">
                  <button className="btn btn-signup">Sign Up</button>
                </Link>
              </div>
              <div className="flex-item-2">
                {error ? (
                  <div class="alert alert-danger" role="alert">
                    <p>{error}</p>
                  </div>
                ) : (
                  ""
                )}
                <form action="#">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control sm"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      value={email}
                      onChange={onChangeEmail}
                    />
                  </div>
                  <div className="form-group mt-5">
                    <input
                      type="password"
                      className="form-control sm"
                      id="exampleInputEmail1"
                      placeholder="Password"
                      value={password}
                      onChange={onChangePassword}
                    />
                  </div>
                  <Link to="/forgot-password" className="forgot-password">
                    Forgot Password
                  </Link>
                </form>
                <button
                  className="btn btn-login"
                  type="submit"
                  onClick={submitLogin}
                >
                  Login
                </button>
                <button className="btn btn-loginGoogle">
                  <img
                    src={iconLoginWithGoogle}
                    className="img-fluid"
                    style={{ maxHeight: "50px" }}
                    alt="icon-stars"
                  />
                  Login With Google
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default LoginPage;

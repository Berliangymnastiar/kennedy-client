import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import iconLoginWithGoogle from "../assets/images/icon-google.svg";

import Footer from "../components/Footer";
import { loginAction } from "../redux/action/authAction";

// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { postLogin } from "../redux/action/authAction";
// import { onLogin } from "../utils/Auth";

function LoginPage() {
  // const { form } = useSelector((state) => state.authReducer);
  // const { email, password } = form;
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const form = new URLSearchParams();
  const submitLogin = (e) => {
    e.preventDefault();
    form.append("email", email);
    form.append("password", password);
    dispatch(loginAction(form, history));
    // .then((result) => {
  };

  return (
    <Fragment>
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
              <div
                className="line-center"
                style={{
                  borderLeft: "1px solid white",
                  height: "auto",
                  width: "1px",
                  margin: "0px 3rem",
                  marginTop: "50px",
                }}
              ></div>
              <div className="flex-item-2">
                {/* {error ? (
                  <div class="alert alert-danger" role="alert">
                    <p>{error}</p>
                  </div>
                ) : (
                  ""
                )} */}
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control sm"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-5">
                    <input
                      type="password"
                      className="form-control sm"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Link to="/forgot-password" className="forgot-password">
                    Forgot Password
                  </Link>
                  <button
                    className="btn btn-login"
                    type="submit"
                    onClick={submitLogin}
                  >
                    Login
                  </button>
                </form>
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

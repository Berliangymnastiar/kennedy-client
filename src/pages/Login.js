import React, { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import iconLoginWithGoogle from "../assets/images/icon-google.svg";

import Footer from "../components/Footer";
import { loginAction } from "../redux/action/authAction";
import { connect } from "react-redux";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const form = new URLSearchParams();
  const submitLogin = (e) => {
    e.preventDefault();
    form.append("email", email);
    form.append("password", password);
    if (email === "") {
      // toast("Name must be field!");
      // return;
      toast.error("email are required!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
    if (password === "") {
      // toast("Name must be field!");
      // return;
      toast.error("password are required!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
    dispatch(loginAction(form, history));
    if (props.authReducer.error) {
      toast.error("Invalid email or password!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
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
                {/* {showMessage
                  ? toast.error("invalid email or password", {
                      position: toast.POSITION.TOP_CENTER,
                      theme: "colored",
                    })
                  : ""} */}
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
                  <ToastContainer style={{ fontSize: "16px" }} />
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

const mapStateToProps = ({ authReducer }) => {
  return {
    authReducer,
  };
};

export default connect(mapStateToProps)(LoginPage);

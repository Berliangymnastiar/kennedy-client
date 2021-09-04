import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import iconLoginWithGoogle from "../assets/images/icon-google.svg";

import Footer from "../components/Footer";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postLogin, setForm } from "../redux/action/authAction";

function LoginPage() {
  const { form } = useSelector((state) => state.authReducer);
  const { email, password } = form;
  // const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const submitLogin = () => {
    postLogin(form);
  };
  const tokenGet = localStorage.getItem("token");
  // if (tokenGet) {
  //   return <Redirect to="/" />;
  // }

  return (
    <Fragment>
      {tokenGet ? <Redirect to="/" /> : <Redirect to="/login" />}
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
                      onChange={(e) =>
                        dispatch(setForm("email", e.target.value))
                      }
                    />
                  </div>
                  <div className="form-group mt-5">
                    <input
                      type="password"
                      className="form-control sm"
                      placeholder="Password"
                      value={password}
                      onChange={(e) =>
                        dispatch(setForm("password", e.target.value))
                      }
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

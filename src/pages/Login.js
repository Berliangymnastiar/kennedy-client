import React from "react";
import { Link } from "react-router-dom";
import iconLoginWithGoogle from "../assets/images/icon-google.svg";

import Footer from "../components/Footer";

function LoginPage() {
  return (
    <>
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
                <Link to="/">
                  <button className="btn btn-signup">Sign Up</button>
                </Link>
              </div>
              <div className="flex-item-2">
                <form action="#">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control sm"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group mt-5">
                    <input
                      type="password"
                      className="form-control sm"
                      id="exampleInputEmail1"
                      placeholder="Password"
                    />
                  </div>
                  <Link to="/forgot-password" className="forgot-password">
                    Forgot Password
                  </Link>
                </form>
                <button className="btn btn-login">Login</button>
                <button className="btn btn-loginGoogle">
                  <img
                    src={iconLoginWithGoogle}
                    classNameName="img-fluid"
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
    </>
  );
}

export default LoginPage;

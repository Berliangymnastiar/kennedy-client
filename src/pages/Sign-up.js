import React from "react";
import { Link } from "react-router-dom";
import iconLoginWithGoogle from "../assets/images/icon-google.svg";

import Footer from "../components/Footer";

function signUpPage() {
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
                <h5>Done Have Account?</h5>
                <Link to="/login">
                  <button className="btn btn-signup">Login</button>
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
                </form>
                <button className="btn btn-login">Sign Up</button>
                <button className="btn btn-loginGoogle">
                  <img
                    src={iconLoginWithGoogle}
                    className="img-fluid"
                    style={{ maxHeight: "50px" }}
                    alt="icon-stars"
                  />
                  Sign Up With Google
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

export default signUpPage;

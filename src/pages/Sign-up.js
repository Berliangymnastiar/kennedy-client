import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import iconLoginWithGoogle from "../assets/images/icon-google.svg";
import axios from "axios";

import Footer from "../components/Footer";

function SignUpPage() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const submitRegister = () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    axios.post("http://localhost:8000/auth/register", data).then((result) => {
      if (result) {
        setRedirect(true);
      }
    });
  };

  return (
    <>
      {redirect ? <Redirect to="/login" /> : ""}
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
                      type="name"
                      className="form-control sm"
                      placeholder="Name"
                      value={name}
                      onChange={onChangeUsername}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <input
                      type="email"
                      className="form-control sm"
                      placeholder="Email"
                      value={email}
                      onChange={onChangeEmail}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <input
                      type="password"
                      className="form-control sm"
                      placeholder="Password"
                      value={password}
                      onChange={onChangePassword}
                    />
                  </div>
                </form>
                <button className="btn btn-login" onClick={submitRegister}>
                  Sign Up
                </button>
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

export default SignUpPage;

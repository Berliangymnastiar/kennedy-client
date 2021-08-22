import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

import iconBack from "../assets/images/icon-back.svg";

function forgotPasswordPage() {
  return (
    <>
      <main>
        <section class="jumbotron-fluid jumbotron-forgot-password">
          <div class="container container-fluid">
            <div class="row">
              <div class="col-1">
                <Link to="/login">
                  <img src={iconBack} className="icon-back" alt="icon-back" />
                </Link>
              </div>
              <div class="col-2">
                <h5 class="back">Back</h5>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-12">
                <h5 class="word-forgot">Don’t worry, we got your back!</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <form action="#">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <button class="btn btn-send-link">Send Link</button>
                  <p class="text-center">
                    You will receive a link to reset your password. <br />
                    If you haven’t received any link, click
                    <Link to="" class="resend-link">
                      {" "}
                      Resend Link
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default forgotPasswordPage;

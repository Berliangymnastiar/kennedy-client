import React from "react";
import { Link, Redirect } from "react-router-dom";

import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

function vehicleType() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header isLogin />
      <main>
        <section className="searching mt-5">
          <div className="row">
            <div className="col-12">
              <div className="container container-fluid">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search vehicle (ex. cars, cars name)"
                    aria-label="Search vehicle (ex. cars, cars name)"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Card />
      </main>
      <Footer />
    </>
  );
}
export default vehicleType;

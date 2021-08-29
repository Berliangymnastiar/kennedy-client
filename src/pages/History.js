import React, { Component } from "react";
import { Redirect } from "react-router";

import historyImage from "../assets/images/vespa-image.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

class History extends Component {
  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <Header />
        <main>
          <section className="searching mt-5">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-9">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search vehicle"
                      aria-label="Search vehicle"
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
                <div className="col-3">
                  <form>
                    <div class="form-group">
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option disabled>Sort by</option>
                        <option>Read Date</option>
                        <option>Date Added</option>
                        <option>Name</option>
                        <option>Favorite Product</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="notification-history">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-12">
                  <h5>Today</h5>
                </div>
                <div className="col-9">
                  <p>
                    Please finish your payment for vespa for Vespa Rental Jogja
                  </p>
                  <p>Your payment has been confirmed!</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h5>A week ago</h5>
                </div>
                <div className="col-4">
                  <img src={historyImage} className="icon-back-black" alt="" />
                </div>
                <div className="col-5">
                  <p className="vehicle-name">Vespa Matic</p>
                  <p className="date-booking">Jan 18 to 21 2021</p>
                  <p className="prepayment">Prepayment : Rp. 245.000</p>
                  <p className="returned">Has been returned</p>
                </div>
                <div className="col-3">
                  <button className="btn btn-delete">Delete</button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default History;

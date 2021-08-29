import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import iconBackBlack from "../assets/images/icon-back-black.svg";
import fixiePicture from "../assets/images/fixie-grey-image.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

class PaymentPage extends Component {
  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <Header />
        <main>
          <section className="text-reservation">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-1">
                  <Link to="/vehicle-type" href="">
                    <img
                      src={iconBackBlack}
                      className="icon-back-black"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-2">
                  <h5 className="back-reservation">Payment</h5>
                </div>
              </div>
            </div>
          </section>
          <section className="description-payment">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-lg-4">
                  <img src={fixiePicture} alt="" />
                </div>
                <div className="col-lg-8">
                  <h3>Fixie - Gray Only</h3>
                  <h5>Yogyakarta</h5>
                  <p className="status-payment">No Prepayment</p>
                  <p className="code-booking">#FG1209878YZS</p>
                  <button className="btn btn-warning copy-code">
                    Copy booking code
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4  col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <p className="text-center">Quantity : 2 Bikes</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div class="card">
                    <div class="card-body">
                      <p className="text-center">
                        Reservation Date :{" "}
                        <span style={{ marginLeft: "50px", fontWeight: "300" }}>
                          Jan 18 - 20 2021
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <p className="text-center">Order Details</p>
                      <p className="text-center">
                        <span style={{ fontWeight: 300, fontSize: "24px" }}>
                          1 bike : Rp. 78.000
                        </span>
                      </p>
                      <p className="text-center">
                        <span style={{ fontWeight: 300, fontSize: "24px" }}>
                          1 bike : Rp. 78.000
                        </span>
                      </p>
                      <p className="text-center">Total : 178.000</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div class="card">
                    <div class="card-body">
                      <p className="text-left mt-5">Identitiy :</p>
                      <p className="text-left ">
                        <span style={{ fontWeight: 300, fontSize: "24px" }}>
                          Samantha Doe (+6290987682)
                        </span>
                      </p>
                      <p className="text-left">
                        <span style={{ fontWeight: 300, fontSize: "24px" }}>
                          samanthadoe@mail.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <h5 className="text-payment-code">Payment code : </h5>
                </div>
                <div className="col-lg-5">
                  <div class="card">
                    <div class="card-body">
                      <p className="text-left text-code">
                        #FG1209878YZS
                        <button className="btn btn-copy">Copy</button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <form>
                        <div class="form-group">
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option className="disabled">
                              Select payment methods
                            </option>
                            <option>Cash</option>
                            <option>Transfer</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Link to="/history" className="btn btn-finish-payment">
                    Finish payment :{" "}
                    <span style={{ color: "#9B0A0A" }}>59:30</span>
                  </Link>
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

export default PaymentPage;

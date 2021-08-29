import React, { Component } from "react";
import { Link } from "react-router-dom";

import iconBackBlack from "../assets/images/icon-back-black.svg";
import fixiePicture from "../assets/images/fixie-grey-image.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

class ReservationPage extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section className="text-reservation">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-1">
                  <Link to="/view-more" href="">
                    <img
                      src={iconBackBlack}
                      className="icon-back-black"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-2">
                  <h5 className="back-reservation">Reservation</h5>
                </div>
              </div>
            </div>
          </section>
          <section className="descripton-reservation">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-lg-6 col-12 text-center">
                  <img src={fixiePicture} alt="" />
                </div>
                <div className="col-lg-6 col-12">
                  <h3>Fixie - Gray Only</h3>
                  <h5>Yogyakarta</h5>
                  <p className="status-payment">No Prepayment</p>
                  <div className="row">
                    <div className="col-2">
                      <button
                        className="btn btn-minus"
                        type="button"
                        onClick={this.props.removeReserved}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-2">
                      <p className="text-value text-center">
                        {this.props.stateReserved}
                      </p>
                    </div>
                    <div className="col-2">
                      <button
                        className="btn btn-plus"
                        type="button"
                        onClick={this.props.addReserved}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="reservation-date">Reservation Date :</p>
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Select Date"
                      />
                    </div>
                    <div className="form-group mt-4">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1 Day</option>
                        <option>2 Day</option>
                        <option>3 Day</option>
                        <option>4 Day</option>
                        <option>5 Day</option>
                      </select>
                    </div>
                    <button className="btn btn-paynow text-center">
                      Pay now : Rp. {this.props.stateReserved * 178000}
                    </button>
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
}

export default ReservationPage;

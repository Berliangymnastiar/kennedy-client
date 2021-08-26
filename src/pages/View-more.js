import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import iconBackBlack from "../assets/images/icon-back-black.svg";
import fixiePicture from "../assets/images/fixie-grey-image.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

class viewMorePage extends Component {
  state = {
    clicked: 0,
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/login" />;
    }

    const clicked = localStorage.getItem("clicked");
    if (clicked) this.setState({ clicked: Number(clicked) });
  }
  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <Header isLogin />
        <main>
          <section className="text-reservation">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-1">
                  <Link to="" href="">
                    <img
                      src={iconBackBlack}
                      className="icon-back-black"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-2">
                  <h5 className="back-reservation">Detail</h5>
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
                  <p className="status-payment" style={{ color: "#087E0D" }}>
                    Available
                  </p>
                  <p className="status-payment">No Prepayment</p>
                  <p className="info-vehicle">Capacity: 1 person</p>
                  <p className="info-vehicle">Type : Bike</p>
                  <p className="info-vehicle">Reservation before 2 PM</p>
                  <h3 className="text-right" style={{ marginTop: "100px" }}>
                    Rp. 78.000/day
                  </h3>
                  <div className="row" style={{ marginTop: "100px" }}>
                    <div className="col-2">
                      <button
                        className="btn btn-minus"
                        type="button"
                        onClick={() =>
                          this.setState((prevState) => {
                            const prevClicked = prevState.clicked - 1;
                            localStorage.setItem(
                              "clicked",
                              String(prevClicked)
                            );
                            return {
                              clicked: prevClicked,
                            };
                          })
                        }
                      >
                        -
                      </button>
                    </div>
                    <div className="col-2">
                      <p className="text-value text-center">
                        {this.state.clicked}
                      </p>
                    </div>
                    <div className="col-2">
                      <button
                        className="btn btn-plus"
                        type="button"
                        onClick={() =>
                          this.setState((prevState) => {
                            const nextClicked = prevState.clicked + 1;
                            localStorage.setItem(
                              "clicked",
                              String(nextClicked)
                            );
                            return {
                              clicked: nextClicked,
                            };
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-4">
                  <button className="btn btn-chat">Chat Admin</button>
                </div>
                <div className="col-md-4 col-4">
                  <Link
                    to="/reservation"
                    className="btn btn-reservation text-center"
                  >
                    <p className="mt-3">Reservation</p>
                  </Link>
                </div>
                <div className="col-md-4 col-4">
                  <button className="btn btn-like">Like</button>
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

export default viewMorePage;

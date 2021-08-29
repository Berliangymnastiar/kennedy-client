import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import iconBackBlack from "../assets/images/icon-back-black.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";

class ViewMorePage extends Component {
  state = {
    vehicle: {
      name: "",
      location: "",
      price: "",
      picture: "",
      capacity: "",
      category_name: "",
    },
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    let id = this.props.match.params.id;
    axios
      .get(`http://localhost:8000/vehicles/${id}`, {
        headers: {
          "x-access-token": `Bearer ${token}`,
        },
      })
      .then((result) => {
        let vehicle = result.data.result[0];
        this.setState({
          vehicle: {
            vehicle: vehicle.name,
            location: vehicle.name,
            price: vehicle.price,
            picture: vehicle.picture,
            capacity: vehicle.capacity,
            category_name: vehicle.category_name,
          },
        });
      });
  }

  render() {
    return (
      <>
        <Header isLogin />
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
                  <h5 className="back-reservation">Detail</h5>
                </div>
              </div>
            </div>
          </section>
          <section className="descripton-reservation">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-lg-6 col-12 text-center">
                  <img src={this.state.vehicle.picture} alt="" />
                </div>
                <div className="col-lg-6 col-12">
                  <h3>{this.state.vehicle.name}</h3>
                  <h5>{this.state.vehicle.location}</h5>
                  <p className="status-payment" style={{ color: "#087E0D" }}>
                    Available
                  </p>
                  <p className="status-payment">No Prepayment</p>
                  <p className="info-vehicle">
                    Capacity: {this.state.vehicle.capacity} person
                  </p>
                  <p className="info-vehicle">
                    Type : {this.state.vehicle.category_name}
                  </p>
                  <p className="info-vehicle">Reservation before 2 PM</p>
                  <h3 className="text-center" style={{ marginTop: "100px" }}>
                    Rp. {this.state.vehicle.price * this.props.stateReserved}
                    /day
                  </h3>
                  <div className="row" style={{ marginTop: "100px" }}>
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
                </div>
                <div className="col-md-4 col-4">
                  <Link to="/chat" className="btn btn-chat">
                    <p className="mt-3">Chat admin</p>
                  </Link>
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

export default ViewMorePage;

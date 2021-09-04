import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import iconBackBlack from "../assets/images/icon-back-black.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { getVehicleDetail } from "../utils/Vehicles";
import ButtonReserved from "../components/ButtonReserved";

class ViewMorePage extends Component {
  state = {
    vehicle: {
      name: "",
      location: "",
      price: "",
      picture: "",
      capacity: "",
      available_item: "",
      category_name: "",
    },
    amount: 1,
  };

  removeReserved = () => {
    this.setState((prevState) => {
      if (this.state.amount > 1) {
        return {
          amount: prevState.amount - 1,
        };
      }
    });
  };

  addReserved = () => {
    this.setState((prevState) => {
      return {
        amount: prevState.amount + 1,
      };
    });
  };

  componentDidMount() {
    // console.log(this.props.location);
    const token = localStorage.getItem("token");
    let id = this.props.match.params.id;
    getVehicleDetail(token, id)
      .then((result) => {
        // console.log(result);
        let vehicle = result.data.result[0];
        this.setState({
          vehicle: {
            name: vehicle.name,
            location: vehicle.location,
            price: vehicle.price,
            picture: vehicle.picture,
            capacity: vehicle.capacity,
            available_item: vehicle.available_item,
            category_name: vehicle.category_name,
          },
        });
      })
      .catch((err) => console.log(err.message));
  }

  handleReservation = () => {
    let id = this.props.match.params.id;
    this.props.history.push({ pathname: `/reservation/${id}` });
  };

  render() {
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
                  <p
                    className="status-payment"
                    style={
                      this.state.vehicle.available_item > 0
                        ? { color: "#087E0D" }
                        : { color: "red" }
                    }
                  >
                    {this.state.vehicle.available_item > 0
                      ? "Available"
                      : "Not Available"}
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
                    Rp. {this.state.vehicle.price * this.state.amount}
                    /day
                  </h3>
                  <ButtonReserved
                    addReserved={this.addReserved}
                    removeReserved={this.removeReserved}
                    value={this.state.amount}
                  />
                </div>
                <div className="col-md-4 col-4">
                  <Link to="/chat" className="btn btn-chat">
                    <p className="mt-3">Chat admin</p>
                  </Link>
                </div>
                <div className="col-md-4 col-4">
                  <button
                    to="/reservation"
                    className="btn btn-reservation text-center"
                    onClick={this.handleReservation}
                  >
                    <p className="mt-3">Reservation</p>
                  </button>
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

export default withRouter(ViewMorePage);

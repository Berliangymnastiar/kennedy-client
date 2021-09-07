import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

import iconBackBlack from "../assets/images/icon-back-black.svg";
// import fixiePicture from "../assets/images/fixie-grey-image.png";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonReserved from "../components/ButtonReserved";

class ReservationPage extends Component {
  state = {
    vehicle: {
      name: "",
      location: "",
      price: "",
      picture: "",
      available_item: "",
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
      if (this.state.amount < this.state.vehicle.available_item) {
        return {
          amount: prevState.amount + 1,
        };
      }
    });
  };

  componentDidMount() {
    // console.log(this.props);
    const token = localStorage.getItem("token");
    const { id } = this.props.match.params;

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
            name: vehicle.name,
            location: vehicle.location,
            price: vehicle.price,
            picture: vehicle.picture,
            available_item: vehicle.available_item,
          },
        });
      })
      .catch((err) => console.log(err.message));
  }

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
                  <h5 className="back-reservation">Reservation</h5>
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
                  <p className="status-payment">No Prepayment</p>
                  <ButtonReserved
                    addReserved={this.addReserved}
                    removeReserved={this.removeReserved}
                    value={this.state.amount}
                  />
                  <p className="reservation-date">Reservation Date :</p>
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control"
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
                    <Link to="/payment">
                      <button className="btn btn-paynow text-center">
                        Pay now : Rp.{" "}
                        {this.state.amount * this.state.vehicle.price}
                      </button>
                    </Link>
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

export default withRouter(ReservationPage);

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
// import { connect } from "react-redux";

import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { getAllVehicles } from "../utils/Vehicles";

class VehicleType extends Component {
  state = {
    data: [],
    vehicle: [],
    search: [],
  };

  axiosSearch = (query, token) => {
    token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8000/vehicles${query}`, {
        headers: {
          "x-access-token": `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        this.setState({
          search: data.result,
        });
        console.log(data.result);
      })
      .catch((err) => {
        this.setState({
          errResponse: err.response.status,
          search: [],
        });
      });
  };

  onInputSearch = (e) => {
    e.preventDefault();
    const query = `?name=${this.state.searchVehicle}`;
    this.props.history.push("/vehicle-type?name=" + this.state.searchVehicle);
    this.axiosSearch(query);
  };

  componentDidMount() {
    // console.log(this.redux);
    const token = localStorage.getItem("token");
    getAllVehicles(token).then(({ data }) => {
      this.setState({
        vehicle: data.result,
      });
    });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <section className="searching mt-5">
            <div className="row">
              <div className="col-12">
                <div className="container container-fluid">
                  <form onSubmit={this.onInputSearch}>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search vehicle (ex. cars, cars name)"
                        aria-label="Search vehicle (ex. cars, cars name)"
                        aria-describedby="button-addon2"
                        onChange={(e) =>
                          this.setState({ searchVehicle: e.target.value })
                        }
                      />
                      <div className="input-group-append">
                        <button
                          onClick={this.onInputSearch}
                          className="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="card-popular">
            <div className="container container-fluid">
              {this.state.search.length > 0 ? (
                <>
                  <div className="row">
                    <h5 className="text-center">Search Result :</h5>
                  </div>
                  <div className="row">
                    {this.state.search.map((vehicle) => {
                      return (
                        <Card
                          className="mt-5"
                          key={vehicle.id}
                          id={vehicle.id}
                          picture={vehicle.picture}
                          name={vehicle.name}
                          location={vehicle.location}
                        />
                      );
                    })}
                  </div>
                </>
              ) : (
                <p className="text-center">
                  {this.state.errResponse === 404 ? "Vehicle not found" : ""}
                </p>
              )}
              <div className="row">
                <div className="col-md-10 col-12">
                  <h5>List All Vehicles</h5>
                </div>
                <div className="col-md-2 d-none d-md-block view-all text-right">
                  <Link to="">View All</Link>
                </div>
              </div>
              <div className="row">
                {this.state.vehicle.map((vehicle) => {
                  return (
                    <Card
                      key={vehicle.id}
                      id={vehicle.id}
                      picture={vehicle.picture}
                      name={vehicle.name}
                      location={vehicle.location}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     redux: state.data,
//   };
// };
export default withRouter(VehicleType);
// connect(mapStateToProps);

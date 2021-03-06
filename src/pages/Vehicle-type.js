import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

class VehicleType extends Component {
  state = {
    data: [],
    vehicle: [],
    search: [],
    motorbike: [],
    bikes: [],
    cars: [],
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
    const url = "http://localhost:8000/vehicles";
    const token = localStorage.getItem("token");
    const getByCategory = (filter) => {
      axios
        .get(url, {
          params: { filter: filter, limit: 4 },
          headers: {
            "x-access-token": `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          // console.log(data.result);
          if (filter === "motorbike") {
            this.setState({
              motorbike: data.result,
            });
          }
          if (filter === "bikes") {
            this.setState({
              bikes: data.result,
            });
          }
          if (filter === "cars") {
            this.setState({
              cars: data.result,
            });
          }
          console.log(data);
        });
    };

    axios
      .get("http://localhost:8000/vehicles", {
        params: { limit: 4 },
        headers: {
          "x-access-token": `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        this.setState({
          vehicle: data.result,
        });
      });

    // getAllVehicles(token).then(({ data }) => {
    //   // console.log(data);
    //   this.setState({
    //     vehicle: data.result,
    //   });
    // });

    getByCategory("motorbike");
    getByCategory("bikes");
    getByCategory("cars");
  }

  render() {
    const URL = process.env.REACT_APP_BASE_URL;
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
                          picture={
                            process.env.REACT_APP_BASE_URL + vehicle.picture
                          }
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
                  <h5>List Vehicles Popular</h5>
                </div>
                <div className="col-md-2 d-none d-md-block view-all text-right">
                  <div className="div-view">View All {">"}</div>
                </div>
              </div>
              <div className="row">
                {this.state.vehicle.map((vehicle) => {
                  return (
                    <Card
                      key={vehicle.id}
                      id={vehicle.id}
                      picture={URL + vehicle.picture}
                      name={vehicle.name}
                      location={vehicle.location}
                    />
                  );
                })}
              </div>
              <div className="row">
                <div className="col-md-10 col-12">
                  <h5>Cars</h5>
                </div>
              </div>
              <div className="row">
                {this.state.cars.map((vehicle) => {
                  return (
                    <Card
                      key={vehicle.id}
                      id={vehicle.id}
                      picture={URL + vehicle.picture}
                      name={vehicle.name}
                      location={vehicle.location}
                    />
                  );
                })}
              </div>
              <div className="row">
                <div className="col-md-10 col-12">
                  <h5>Motorbike</h5>
                </div>
              </div>
              <div className="row">
                {this.state.motorbike.map((vehicle) => {
                  return (
                    <Card
                      key={vehicle.id}
                      id={vehicle.id}
                      picture={URL + vehicle.picture}
                      name={vehicle.name}
                      location={vehicle.location}
                    />
                  );
                })}
              </div>
              <div className="row">
                <div className="col-md-10 col-12">
                  <h5>Bikes</h5>
                </div>
              </div>
              <div className="row">
                {this.state.bikes.map((vehicle) => {
                  return (
                    <Card
                      key={vehicle.id}
                      id={vehicle.id}
                      picture={URL + vehicle.picture}
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

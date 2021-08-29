import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import Home from "./Home";
import LoginPage from "./Login";
import signUpPage from "./Sign-up";
import forgotPasswordPage from "./Forgot-password";
import profilePage from "./Profile";
import vehicleType from "./Vehicle-type";
import ReservationPage from "./Reservation";
import ViewMorePage from "./View-more";

class App extends Component {
  state = {
    amount: 1,
    token: "",
    isLogin: false,
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
    const data = localStorage.getItem("token");
    if (data) {
      this.setState({ isLogin: true });
    }
  }

  render() {
    return (
      <Router>
        {/* localhost/ */}
        <Route path="/" exact component={Home} />
        {/* localhost/login */}
        <Route path="/sign-up" exact component={signUpPage} />
        {/* localhost/login */}
        <Route path="/login" exact component={LoginPage} />
        {/* localhost/forgot-password */}
        <Route path="/forgot-password" exact component={forgotPasswordPage} />
        {/* localhost/profile */}
        <Route path="/profile" exact component={profilePage} />
        {/* localhost/vehicle-type */}
        <Route path="/vehicle-type" exact component={vehicleType} />
        {/* localhost/view-more */}
        <Route
          path="/view-more/:id"
          render={(props) => {
            if (this.state.isLogin) {
              return (
                <ViewMorePage
                  addReserved={this.addReserved}
                  removeReserved={this.removeReserved}
                  stateReserved={this.state.amount}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        {/* localhost/reservation */}
        <Route
          path="/reservation"
          render={(props) => {
            if (this.state.isLogin) {
              return (
                <ReservationPage
                  addReserved={this.addReserved}
                  removeReserved={this.removeReserved}
                  stateReserved={this.state.amount}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
      </Router>
    );
  }
}

export default App;

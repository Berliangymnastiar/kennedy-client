import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from "../redux/store";

import {
  AdminRoute,
  AuthRoute,
  ProtectedRoute,
} from "../components/ProtectedRoute";

import Home from "./Home";
import LoginPage from "./Login";
import SignUpPage from "./Sign-up";
import forgotPasswordPage from "./Forgot-password";
import profilePage from "./Profile";
import ReservationPage from "./Reservation";
import ViewMorePage from "./View-more";
import PaymentPage from "./Payment";
import Chat from "./Chat";
import History from "./History";
import VehicleType from "./Vehicle-type";
import AddVehicle from "./AddVehicle";
import EditVehicle from "./EditVehicle";

class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Router>
          {/* localhost/ */}
          <AuthRoute path="/" exact component={Home} />
          {/* localhost/login */}
          <AuthRoute path="/sign-up" exact component={SignUpPage} />
          {/* localhost/login */}
          <AuthRoute path="/login" exact component={LoginPage} />
          {/* localhost/forgot-password */}
          <AuthRoute
            path="/forgot-password"
            exact
            component={forgotPasswordPage}
          />
          {/* localhost/profile */}
          <AuthRoute path="/profile" component={profilePage} />
          {/* localhost/vehicle-type */}
          <ProtectedRoute path="/vehicle-type">
            <VehicleType {...this.props} />
          </ProtectedRoute>
          {/* localhost/chat */}
          <ProtectedRoute path="/chat">
            <Chat />
          </ProtectedRoute>
          {/* localhost/history */}
          <ProtectedRoute path="/history">
            <History />
          </ProtectedRoute>
          {/* localhost/view-more */}
          <ProtectedRoute path="/view-more/:id">
            <ViewMorePage {...this.props} />
          </ProtectedRoute>
          {/* localhost/reservation */}
          <ProtectedRoute path="/reservation/:id">
            <ReservationPage {...this.props} />
          </ProtectedRoute>
          <ProtectedRoute path="/payment">
            <PaymentPage />
          </ProtectedRoute>
          <AdminRoute path="/add-vehicle">
            <AddVehicle />
          </AdminRoute>
          <Route path="/edit-vehicle" render={EditVehicle} />
        </Router>
      </Provider>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import LoginPage from "./Login";
import signUpPage from "./Sign-up";
import forgotPasswordPage from "./Forgot-password";
import profilePage from "./Profile";
import vehicleType from "./Vehicle-type";
import reservationPage from "./Reservation";
import viewMorePage from "./View-more";

function App() {
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
      <Route path="/view-more" exact component={viewMorePage} />
      {/* localhost/reservation */}
      <Route path="/reservation" exact component={reservationPage} />
    </Router>
  );
}

export default App;

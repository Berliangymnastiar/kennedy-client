import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import LoginPage from "./Login";
import forgotPasswordPage from "./Forgot-password";
import profilePage from "./Profile";
import reservationPage from "./Reservation";

function App() {
  return (
    <Router>
      {/* localhost/ */}
      <Route path="/" exact component={Home} />
      {/* localhost/login */}
      <Route path="/login" exact component={LoginPage} />
      {/* localhost/forgot-password */}
      <Route path="/forgot-password" exact component={forgotPasswordPage} />
      {/* localhost/profile */}
      <Route path="/profile" exact component={profilePage} />
      {/* localhost/reservation */}
      <Route path="/reservation" exact component={reservationPage} />
    </Router>
  );
}

export default App;

import React from "react";
import { Link, withRouter } from "react-router-dom";

function NavigationLink() {
  return (
    <>
      <li className="nav-item active">
        <Link to="/" className="nav-link mr-4">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/vehicle-type" className="nav-link mr-4">
          Vehicle Type
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/add-vehicle" className="nav-link mr-4">
          Add vehicle
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/history" className="nav-link mr-4">
          History
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link mr-4">
          About
        </Link>
      </li>
    </>
  );
}

export default withRouter(NavigationLink);

import { Link } from "react-router-dom";
import iconNavbar from "../assets/images/icon-footer.png";

import iconProfileNavbar from "../assets/images/icon-photo-navbar.png";
import iconMessageNavbar from "../assets/images/icon-message.png";

function HeaderProfile(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-home pt-4">
      <div className="container">
        <Link>
          <div classNameName="navbar-brand">
            <img src={iconNavbar} alt="icon-navbar" />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link mr-4">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-4">Vehicle Type</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-4">History</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-4">About</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link mr-3">
                <img src={iconMessageNavbar} alt="" />
              </Link>
            </li>
            <div className="dropdown">
              <img
                style={{ backgroundColor: "transparent", border: "none" }}
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                src={iconProfileNavbar}
                className="icon-profile"
                alt=""
              />
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="#">
                  Edit Profile
                </Link>
                <Link className="dropdown-item" href="#">
                  Help
                </Link>
                <Link to="/" className="dropdown-item" href="#">
                  Logout
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderProfile;

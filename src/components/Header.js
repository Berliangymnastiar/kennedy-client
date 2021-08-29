import { Link } from "react-router-dom";
import iconNavbar from "../assets/images/icon-footer.png";
import iconMessageNavbar from "../assets/images/icon-message.png";
import iconProfileNavbar from "../assets/images/icon-photo-navbar.png";
import NavigationLink from "./NavigationLink";

function Header() {
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-home pt-4">
      <div className="container">
        <Link to="/">
          <div className="navbar-brand">
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
            <NavigationLink />
            {token ? (
              <li className="nav-item">
                <Link to="" className="nav-link mr-3">
                  <img
                    src={iconMessageNavbar}
                    style={{ marginTop: "-7px" }}
                    alt=""
                  />
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  className="nav-link mr-4 btn btn-login-nav pr-4 pl-4 mb-2"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
            {token ? (
              <div className="dropdown">
                <img
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    marginTop: "-7px",
                  }}
                  className="btn btn-secondary dropdown-toggle icon-profile"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  src={iconProfileNavbar}
                  alt=""
                />
                <div className="dropdown-menu  slide-left">
                  <Link to="/profile" className="dropdown-item" href="#">
                    Edit Profile
                  </Link>
                  <Link to="" className="dropdown-item" href="#">
                    Help
                  </Link>
                  <Link to="/" className="dropdown-item" onClick={logOut}>
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-link mr-4 btn btn-register-nav pr-4 pl-4"
                >
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

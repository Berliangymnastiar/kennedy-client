import { Link } from "react-router-dom";
import iconNavbar from "../assets/images/icon-footer.png";

function Header(props) {
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
            <li className="nav-item">
              <Link
                className="nav-link mr-4 btn btn-login-nav pr-4 pl-4 mb-2"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link mr-4 btn btn-register-nav pr-4 pl-4"
                href="profile.html"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import iconNavbar from "../assets/images/icon-footer.png";
import iconMessageNavbar from "../assets/images/icon-message.png";
import iconProfileNavbar from "../assets/images/icon-photo-navbar.png";
import { logoutAction } from "../redux/action/authAction";
import NavigationLink from "./NavigationLink";
import { confirmAlert } from "react-confirm-alert";

function Header() {
  const userToken = useSelector((state) => state.authReducer);
  const id = userToken?.userInfo[0]?.id;

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(logoutAction(history));
          },
        },
        {
          label: "No",
          onClick: () => console.log("user disagree"),
        },
      ],
    });
  };

  const handleProfile = (id) => {
    history.push({ pathname: `/profile/${id}` });
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
            {userToken?.isLogin ? (
              <li className="nav-item">
                <Link to="/chat" className="nav-link mr-3">
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
            {userToken?.isLogin ? (
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
                  <div
                    onClick={() => handleProfile(id)}
                    className="dropdown-item"
                  >
                    Edit Profile
                  </div>
                  <Link to="" className="dropdown-item" href="#">
                    Help
                  </Link>
                  <Link to="/" className="dropdown-item" onClick={logout}>
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

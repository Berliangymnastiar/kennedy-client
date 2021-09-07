import React from "react";
// import { Redirect } from "react-router-dom";

import photoProfile from "../assets/images/photo-profile.png";
import iconPencil from "../assets/images/icon-pencil.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

function profilePage() {
  return (
    <>
      <Header />
      <main>
        <section className="profile">
          <div className="container">
            <div className="row">
              <div className="col">
                <h5 className="text-profile">Profile</h5>
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <img
                  src={photoProfile}
                  className="img-fluid profile-image"
                  alt="profile-pict"
                />
                <img src={iconPencil} className="icon-pencil" alt="" />
                <h5 className="name-person">Samantha Doe</h5>
                <p className="gmail">samanthadoe@mail.com</p>
                <p className="phonenumber" style={{ marginTop: "-15px" }}>
                  +62833467823
                </p>
                <p className="description-join" style={{ marginTop: "-15px" }}>
                  Has been active since 2013
                </p>
                <div className="row">
                  <div className="col-7">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                        style={{ fontSize: "18px" }}
                      >
                        Male
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                        style={{ fontSize: "18px" }}
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contacts">
          <div className="container">
            <div className="row">
              <div className="col">
                <h5>Contacts</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                      Email address :{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      style={{ marginLeft: "-10px" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address : </label>
                    <input
                      type="email"
                      className="form-control"
                      id="address"
                      style={{ marginLeft: "-10px" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="numberPhone">Mobile number : </label>
                    <input
                      type="email"
                      className="form-control"
                      id="numberPhone"
                      style={{ marginLeft: "-10px" }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="identity">
          <div className="container">
            <div className="row">
              <div className="col">
                <h5>Identity</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="display-name">Display name :</label>
                        <input
                          type="email"
                          className="form-control"
                          id="display-name"
                          style={{ marginLeft: "-10px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="date">DD/MM/YY : </label>
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                          style={{ marginLeft: "-10px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-md-4 col-6">
                      <button className="btn btn-save">Save Change</button>
                    </div>
                    <div className="col-md-4 col-6">
                      <button className="btn btn-editpass">
                        Edit Password
                      </button>
                    </div>
                    <div className="col-md-4 col-12">
                      <button className="btn btn-cancel">Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default profilePage;

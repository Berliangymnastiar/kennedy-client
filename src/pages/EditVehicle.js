import React from "react";

import iconBackBlack from "../assets/images/icon-back-black.svg";
import backgroundAddImage from "../assets/images/add-file-image.png";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function EditVehicle() {
  return (
    <>
      <Header />
      <main>
        <section className="text-add-vehicle">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-1">
                <Link to="/" href="">
                  <img src={iconBackBlack} className="icon-back-black" alt="" />
                </Link>
              </div>
              <div className="col-4">
                <h5 className="back-reservation">Edit item</h5>
              </div>
            </div>
          </div>
        </section>
        <section className="form-add-image">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="nameVehicle"
                  placeholder="Name (max up to 50 words)"
                />
                <img
                  src={backgroundAddImage}
                  style={{ maxWidth: "540px" }}
                  className="mt-4"
                  alt=""
                />
                <input
                  type="file"
                  class="form-control-file mt-3"
                  id="exampleFormControlFile1"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  placeholder="Location"
                />
                <input
                  type="text"
                  class="form-control mt-4"
                  id="description"
                  placeholder="Description (max up to 150 words)"
                />
                <label htmlFor="price">Price :</label>
                <input
                  type="number"
                  class="form-control price"
                  id="price"
                  placeholder="Type the price"
                />
                <label htmlFor="status">Status :</label>
                <select
                  class="form-control"
                  id="status"
                  style={{ backgroundColor: "#f5f5f6" }}
                >
                  <option>Available</option>
                  <option>No Available</option>
                </select>
                <label htmlFor="stock">Stock :</label>
                <input
                  type="number"
                  class="form-control price"
                  id="stock"
                  placeholder="Insert stock"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="category">Choose category :</label>
                <select
                  class="form-control"
                  id="category"
                  style={{
                    backgroundColor: "#D1D0D0",
                    height: "60px",
                  }}
                >
                  <option>Cars</option>
                  <option>Motorbike</option>
                  <option>Bike</option>
                </select>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-save"
                  style={{ height: "60px", width: "100%" }}
                >
                  Save Change
                </button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-chat" style={{ height: "60px" }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default EditVehicle;

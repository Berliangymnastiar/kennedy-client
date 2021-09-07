import React, { useEffect, useState } from "react";
import axios from "axios";

import iconBackBlack from "../assets/images/icon-back-black.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, withRouter } from "react-router-dom";

function AddVehicle(props) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState([]);
  const [image, setImage] = useState("");
  const [imgPreview, setImagePreview] = useState(null);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    console.log("params", props);
  }, [props]);

  const onSubmit = () => {
    const data = new FormData();
    data.append("name", name);
    data.append("location", location);
    data.append("price", price);
    data.append("category_id", category);
    data.append("available_item", stock);
    data.append("status", status);
    data.append("picture", image);

    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:8000/vehicles", data, {
        headers: {
          "x-access-token": `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res) {
          setName("");
          setLocation("");
          setPrice("");
          setCategory("");
          setStock("");
          setStatus("");
          setImage("");
          setAlert(true);
          setImagePreview(null);
        }
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

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
                <h5 className="back-reservation">Add New Item</h5>
              </div>
            </div>
          </div>
        </section>
        {alert && (
          <section className="alert">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="alert alert-success" role="alert">
                    Success add vehicle
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="form-add-image">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="nameVehicle"
                  placeholder="Name (max up to 50 words)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <img
                  src={imgPreview}
                  style={{ maxWidth: "540px" }}
                  className="mt-4"
                  alt=""
                />
                <input
                  type="file"
                  className="form-control-file mt-3"
                  id="exampleFormControlFile1"
                  onChange={(e) => onImageUpload(e)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                {/* <input
                  type="text"
                  className="form-control mt-4"
                  id="description"
                  placeholder="Description (max up to 150 words)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                /> */}
                <label htmlFor="price">Price :</label>
                <input
                  type="number"
                  className="form-control price"
                  id="price"
                  placeholder="Type the price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label htmlFor="status">Status :</label>
                <select
                  className="form-control"
                  id="status"
                  style={{ backgroundColor: "#f5f5f6" }}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="1">Available</option>
                  <option value="2">No Available</option>
                </select>
                <label htmlFor="stock">Stock :</label>
                <input
                  type="number"
                  className="form-control price"
                  id="stock"
                  placeholder="Insert stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="category">Choose category :</label>
                <select
                  className="form-control"
                  id="category"
                  style={{
                    backgroundColor: "#D1D0D0",
                    width: "442px",
                    height: "60px",
                  }}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="1">Cars</option>
                  <option value="2">Bikes</option>
                  <option value="3">Motorbike</option>
                </select>
              </div>
              <div className="col-md-6">
                <button
                  type="submit"
                  className="btn btn-save"
                  style={{ width: "100%" }}
                  onClick={onSubmit}
                >
                  Save Change
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

export default withRouter(AddVehicle);

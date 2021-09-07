import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import iconBackBlack from "../assets/images/icon-back-black.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, withRouter, useHistory } from "react-router-dom";
import { getVehicleDetail } from "../utils/Vehicles";
import axios from "axios";

function EditVehicle(props) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState([]);
  const [image, setImage] = useState("");
  const [imgPreview, setImagePreview] = useState(null);
  const history = useHistory();

  useEffect(() => {
    let token = localStorage.getItem("token");
    const id = props.match.params.id;
    if (id) {
      getVehicleDetail(token, id)
        .then((res) => {
          const data = res.data.result[0];
          console.log(data);
          setName(data.name);
          setLocation(data.location);
          setPrice(data.price);
          setCategory(data.category_name);
          setStock(data.available_item);
          setStatus(data.status_name);
          setImagePreview(data.picture);
        })
        .catch((err) => console.log(err.message));
    }
  }, [props]);

  const onSubmit = () => {
    const data = new FormData();
    data.append("name", name);
    data.append("location", location);
    data.append("price", price);
    data.append("category_id", category);
    data.append("available_item", stock);
    data.append("status_id", status);
    data.append("picture", image);

    const token = localStorage.getItem("token");
    const id = props.match.params.id;
    axios
      .patch(`http://localhost:8000/vehicles/${id}`, data, {
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
          setImagePreview(null);
          history.push("/");
          console.log("update success", res);
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

  const confirmDelete = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure delete this vehicle?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const id = props.match.params.id;
            const token = localStorage.getItem("token");
            axios
              .delete(`http://localhost:8000/vehicles/${id}`, {
                headers: {
                  "x-access-token": `Bearer ${token}`,
                },
              })
              .then((res) => {
                console.log(res);
                history.push("/vehicle-type");
              })
              .catch((err) => console.log(err.message));
          },
        },
        {
          label: "No",
          onClick: () => console.log("user disagree"),
        },
      ],
    });
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
                  type="text"
                  className="form-control"
                  id="nameVehicle"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <img
                  src={imgPreview}
                  style={{
                    width: "500px",
                    height: "500px",
                    borderRadius: "8px",
                  }}
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
              <div className="col-md-4">
                <label htmlFor="category">Choose category :</label>
                <select
                  className="form-control"
                  id="category"
                  style={{
                    backgroundColor: "#D1D0D0",
                    width: "100%",
                    height: "60px",
                  }}
                  defaultValue="0"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="0">{category}</option>
                  <option value="1">Cars</option>
                  <option value="2">Bikes</option>
                  <option value="3">Motorbike</option>
                </select>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-save"
                  style={{ height: "60px", width: "100%" }}
                  onClick={onSubmit}
                >
                  Save changes
                </button>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-chat"
                  style={{ height: "60px" }}
                  onClick={confirmDelete}
                >
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

export default withRouter(EditVehicle);

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import iconBackBlack from "../assets/images/icon-back-black.svg";
import backgroundUploadImg from "../assets/images/add-file-image.png";

function AddVehicle(props) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [imgPreview, setImagePreview] = useState(null);
  const history = useHistory();

  useEffect(() => {
    console.log("params", props);
  }, [props]);

  const onSubmit = () => {
    if (name === "") {
      // toast("Name must be field!");
      // return;
      toast.error("name must be filled!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
    } else if (location === "") {
      toast.error("location must be filled!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
    } else if (image === "") {
      toast.error("image must be filled!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
    } else if (price === "") {
      toast.error("price must be filled!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
    } else if (category === "") {
      toast.error("price must be filled!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
    } else if (stock === "") {
      toast.error("stock must be filled!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
    }
    const data = new FormData();
    data.append("name", name);
    data.append("location", location);
    data.append("price", price);
    data.append("category_id", category);
    data.append("available_item", stock);
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
          setImage("");
          setImagePreview(null);
          toast.success("add vehicle success!", {
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
          });
          history.push("/add-vehicle");
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
                <label htmlFor="upload-image">
                  <img
                    src={
                      image !== null && image !== undefined && image !== ""
                        ? imgPreview
                        : backgroundUploadImg
                    }
                    style={{ maxWidth: "540px" }}
                    className="mt-4"
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  className="form-control-file mt-3 d-none upload"
                  id="upload-image"
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
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label htmlFor="price">Price :</label>
                <input
                  type="number"
                  className="form-control price"
                  id="price"
                  placeholder="Type the price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
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
                  <option hidden>Select Category</option>
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
                <ToastContainer style={{ fontSize: "16px" }} />
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

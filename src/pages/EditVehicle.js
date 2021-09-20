import axios from "axios";
import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, withRouter } from "react-router-dom";
import { getVehicleDetail } from "../utils/Vehicles";
import iconBackBlack from "../assets/images/icon-back-black.svg";

function EditVehicle(props) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
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
          setStock(data.available_item);
          setImagePreview(data.picture);
          switch (data.category_name) {
            case "Cars":
              setCategory("1");
              break;
            case "Bikes":
              setCategory("2");
              break;
            case "Motorbike":
              setCategory("3");
              break;
            default:
              break;
          }
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
    if (image !== null && image !== undefined && image !== "") {
      data.append("picture", image);
    }

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
          setImage("");
          setImagePreview(null);
          toast.success("edit vehicle success!", {
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
          });
          history.push({ pathname: `/edit-vehicle/${id}` });
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
                  onChange={(value) => setName(value.target.value)}
                />
                <label htmlFor="upload-photo">
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
                </label>
                <input
                  type="file"
                  className="form-control-file mt-3 d-none"
                  id="upload-photo"
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
                  onChange={(value) => setLocation(value.target.value)}
                />
                <label htmlFor="price">Price :</label>
                <input
                  type="number"
                  className="form-control price"
                  id="price"
                  placeholder="Type the price"
                  value={price}
                  onChange={(value) => setPrice(value.target.value)}
                />
                <label htmlFor="stock">Stock :</label>
                <input
                  type="number"
                  className="form-control price"
                  id="stock"
                  placeholder="Insert stock"
                  value={stock}
                  onChange={(value) => setStock(value.target.value)}
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
                  value={category}
                  onChange={(value) => setCategory(value.target.value)}
                >
                  <option hidden>Choose Category</option>
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
                <ToastContainer style={{ fontSize: "16px" }} />
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

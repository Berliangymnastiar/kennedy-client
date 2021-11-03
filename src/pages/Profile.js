import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import iconPencil from "../assets/images/icon-pencil.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

function ProfilePage() {
  const userId = useSelector((state) => state.authReducer);
  const url = process.env.REACT_APP_BASE_URL;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [imgPreview, setImagePreview] = useState(null);
  const [address, setAdress] = useState(null);
  const [phonenumber, setPhoneNumber] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    const id = userId?.userInfo[0].id;

    if (id) {
      axios
        .get(`${url}/users/${id}`, {
          headers: {
            "x-access-token": `Bearer ${token}`,
          },
        })
        .then((res) => {
          const data = res.data.result[0];
          setName(data.name);
          setEmail(data.email);
          setPhoneNumber(data.phonenumber);
          setGender(data.gender);
          setAdress(data.address);
          setImage(url + data.picture);
        })
        .catch((err) => console.log(err));
    }
  }, [userId?.userInfo, url]);

  const onSubmit = () => {
    if (name === "") {
      toast.error("Name are required!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
    if (email === "") {
      toast.error("Email are required!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
    if (!email.includes("@")) {
      toast.error("Please input a valid email!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
    if (phonenumber === "") {
      toast.error("Phonenumber are required!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
    if (address === "") {
      toast.error("Address are required!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("phonenumber", phonenumber);
    data.append("gender", gender);
    data.append("address", address);
    if (image !== null && image !== undefined && image !== "") {
      data.append("picture", image);
    }

    const token = localStorage.getItem("token");
    const id = userId?.userInfo[0].id;
    axios
      .patch(`${url}/users/${id}`, data, {
        headers: {
          "x-access-token": `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Update profile success!", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        console.log(res);
      })
      .catch((err) => console.log(err.message));
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
        <section className="profile">
          <div className="container">
            <div className="row">
              <div className="col">
                <h5 className="text-profile">Profile</h5>
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <label htmlFor="upload-image">
                  <img
                    src={!imgPreview ? image : imgPreview}
                    style={{
                      borderRadius: "100%",
                      width: "200px",
                      height: "200px",
                    }}
                    className="img-fluid profile-image"
                    alt="profile-pict"
                  />
                  <img src={iconPencil} className="icon-pencil" alt="" />
                  <input
                    type="file"
                    className="form-control-file mt-3 d-none"
                    id="upload-image"
                    onChange={(e) => onImageUpload(e)}
                  />
                </label>
                <h5 className="name-person">{name}</h5>
                <p className="gmail">{email}</p>
                <p className="phonenumber" style={{ marginTop: "-15px" }}>
                  {phonenumber}
                </p>
                {/* <p className="description-join" style={{ marginTop: "-15px" }}>
                  Has been active since 2013
                </p> */}
                <div className="row">
                  <div className="col-7">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultChecked={
                          userId.userInfo[0].gender === "male" ? "checked" : ""
                        }
                        onClick={() => setGender("male")}
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
                        defaultChecked={
                          userId.userInfo[0].gender === "female"
                            ? "checked"
                            : ""
                        }
                        onClick={() => setGender("female")}
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
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">
                    Email address :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginLeft: "-10px" }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    style={{ marginLeft: "-10px" }}
                    value={address}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="numberPhone">Mobile number : </label>
                  <input
                    type="number"
                    className="form-control"
                    id="numberPhone"
                    value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={{ marginLeft: "-10px" }}
                  />
                </div>
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
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label htmlFor="display-name">Display name :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="display-name"
                        style={{ marginLeft: "-10px" }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-4 col-6">
                    <button className="btn btn-save" onClick={onSubmit}>
                      Save Change
                    </button>
                  </div>
                  <ToastContainer style={{ fontSize: "16px" }} />
                  <div className="col-md-4 col-6">
                    <button className="btn btn-editpass">Edit Password</button>
                  </div>
                  <div className="col-md-4 col-12">
                    <button className="btn btn-cancel">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProfilePage;

import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import iconBackBlack from "../assets/images/icon-back-black.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
// import { useSelector } from "react-redux";

function PaymentPage(props) {
  const URL = process.env.REACT_APP_BASE_URL;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState();
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [totalVehicle, setTotalVehicle] = useState(1);
  const [bookingDate, setBookingDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("CASH");
  const history = useHistory();

  // const history = useHistory();
  // console.log(bookingDate.slice(0, 10));

  useEffect(() => {
    const { id } = props.match.params;
    axios
      .get(`${URL}/transactions/${id}`)
      .then((result) => {
        const data = result.data.result[0];
        setName(data.name);
        setLocation(data.location);
        setPrice(data.price);
        setImage(URL + data.picture);
        setBookingDate(data.date);
        setTotalVehicle(data.total_vehicle);
        setEmail(data.email);
        setPhone(data.phonenumber);
      })
      .catch((err) => console.log(err));
  }, [props, URL]);

  const { id } = props.match.params;
  const updateStatusPayment = "WAITING APPROVE";
  const submitPayment = () => {
    const data = new URLSearchParams();
    data.append("status_payment", updateStatusPayment);
    data.append("payment_method", paymentMethod);

    axios
      .patch(`http://localhost:8000/transactions/${id}`, data)
      .then(({ data }) => {
        history.push("/history");
        toast.success("Payment success!", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <main>
        <section className="text-reservation">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-1">
                <Link to="/vehicle-type" href="">
                  <img src={iconBackBlack} className="icon-back-black" alt="" />
                </Link>
              </div>
              <div className="col-2">
                <h5 className="back-reservation">Payment</h5>
              </div>
            </div>
          </div>
        </section>
        <section className="description-payment">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <img src={image} alt="" />
              </div>
              <div className="col-lg-8">
                <h3>{name}</h3>
                <h5>{location}</h5>
                {/* <p className="status-payment">No Prepayment</p> */}
                <p className="code-booking">#FG1209878YZS</p>
                <button className="btn btn-warning copy-code">
                  Copy booking code
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4  col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <p className="text-center">Quantity : {totalVehicle}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-12">
                <div className="card">
                  <div className="card-body">
                    <p className="text-center">
                      Reservation Date :{" "}
                      <span style={{ marginLeft: "50px", fontWeight: "300" }}>
                        {bookingDate.slice(0, 10)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <p className="text-center">Order Details</p>
                    <p className="text-center">
                      <span style={{ fontWeight: 300, fontSize: "24px" }}>
                        1 {name} : {price}
                      </span>
                    </p>
                    <p className="text-center">
                      Total : {totalVehicle * price}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <p className="text-left ">Identitiy :</p>
                    <p className="text-left ">
                      <span style={{ fontWeight: 300, fontSize: "24px" }}>
                        {phone}
                      </span>
                    </p>
                    <p className="text-left">
                      <span style={{ fontWeight: 300, fontSize: "24px" }}>
                        {email}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <h5 className="text-payment-code">Payment code : </h5>
              </div>
              <div className="col-lg-5">
                <div className="card">
                  <div className="card-body">
                    <p className="text-left text-code">
                      #FG1209878YZS
                      <button className="btn btn-copy">Copy</button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      >
                        <option className="disabled" hidden>
                          Select payment methods
                        </option>
                        <option value="CASH">Cash</option>
                        <option value="TRANSFER">Transfer</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <button
                  className="btn btn-finish-payment"
                  onClick={submitPayment}
                >
                  Finish payment :
                  <span style={{ color: "#9B0A0A" }}> 59:30</span>
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

export default withRouter(PaymentPage);

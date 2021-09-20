import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link, withRouter } from "react-router-dom";
import ButtonReserved from "../components/ButtonReserved";
import { useDispatch, useSelector } from "react-redux";
import { countPlusAction, countMinusAction } from "../redux/action/countAction";
import axios from "axios";

import iconBackBlack from "../assets/images/icon-back-black.svg";
// import fixiePicture from "../assets/images/fixie-grey-image.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

function ReservationPage(props) {
  const counter = useSelector((state) => state.countReducer);
  const date = new Date();
  const formatedDate =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    date.getDate();
  // " " +
  // date.getHours() +
  // ":" +
  // date.getMinutes() +
  // ":" +
  // date.getSeconds();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [bookingDuration, setBookingDuration] = useState("1 day");
  const [totalVehicle, setTotalVehicle] = useState(1);
  const [bookingDate, setBookingDate] = useState(formatedDate);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const { id } = props.match.params;
    axios
      .get(`http://localhost:8000/vehicles/${id}`, {
        headers: {
          "x-access-token": `Bearer ${token}`,
        },
      })
      .then((result) => {
        let vehicle = result.data.result[0];
        setName(vehicle.name);
        setPrice(vehicle.price);
        setImage(vehicle.picture);
        setLocation(vehicle.location);

        // setAvailableItem(vehicle.available_item);
      })
      .catch((err) => console.log(err.message));
  });

  const userToken = useSelector((state) => state.authReducer);
  const userId = userToken?.userInfo[0]?.id;
  const vehicleId = props.match.params;
  // console.log(userId);
  const createTransaction = (e) => {
    e.preventDefault(e);
    const data = new URLSearchParams();
    data.append("user_id", userId);
    data.append("vehicle_id", vehicleId.id);
    data.append("booking_duration", bookingDuration);
    data.append("total_vehicle", totalVehicle);
    data.append("date", bookingDate);

    axios
      .post(`http://localhost:8000/transactions`, data)
      .then(({ data }) => {
        const transactionId = data.result.insertId;
        history.push({
          pathname: `/payment/${transactionId}`,
        });
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
                <h5 className="back-reservation">Reservation</h5>
              </div>
            </div>
          </div>
        </section>
        <section className="descripton-reservation">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12 text-center">
                <img src={image} alt="" />
              </div>
              <div className="col-lg-6 col-12">
                <h3>{name}</h3>
                <h5>{location}</h5>
                {/* <p className="status-payment">No Prepayment</p> */}
                <ButtonReserved
                  buttonMinus={() => {
                    dispatch(countMinusAction());
                    setTotalVehicle(counter.number - 1);
                  }}
                  buttonPlus={() => {
                    dispatch(countPlusAction());
                    return setTotalVehicle(counter.number + 1);
                  }}
                  value={counter.number}
                />
                <p className="reservation-date">Reservation Date :</p>
                <form action="#">
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Select Date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={bookingDuration}
                      onChange={(e) => setBookingDuration(e.target.value)}
                    >
                      <option value="1 day">1 Day</option>
                      <option value="2 day">2 Day</option>
                      <option value="3 day">3 Day</option>
                      <option value="4 day">4 Day</option>
                      <option value="5 day">5 Day</option>
                    </select>
                  </div>
                  <button
                    className="btn btn-paynow text-center"
                    onClick={createTransaction}
                  >
                    Pay now : Rp. {counter.number * price}
                  </button>
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

export default withRouter(ReservationPage);

import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { connect, useSelector } from "react-redux";

function History() {
  const [history, setHistory] = useState([]);
  const url = process.env.REACT_APP_BASE_URL;
  const userId = useSelector((state) => state.authReducer.userInfo[0].id);
  console.log(userId);

  useEffect(() => {
    axios
      .get(`${url}/transactions/history/${userId}`)
      .then((res) => {
        const data = res.data.result;
        setHistory(data);
      })
      .catch((err) => console.log(err));
  }, [url, userId]);

  return (
    <>
      <Header />
      <main>
        <section className="searching mt-5">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-9">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search vehicle"
                    aria-label="Search vehicle"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <form>
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option disabled>Sort by</option>
                      <option>Read Date</option>
                      <option>Date Added</option>
                      <option>Name</option>
                      <option>Favorite Product</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="notification-history">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-12">
                <h5>Today</h5>
              </div>
              <div className="col-9">
                <p>
                  Please finish your payment for vespa for Vespa Rental Jogja
                </p>
                <p>Your payment has been confirmed!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h5>Your transactions</h5>
              </div>
              {history.map((h) => {
                return (
                  <>
                    <div className="col-4" key={h.id}>
                      <img
                        src={url + h.picture}
                        className="icon-back-black"
                        alt=""
                      />
                    </div>
                    <div className="col-5">
                      <p className="vehicle-name">{h.name}</p>
                      <p className="date-booking">
                        {" "}
                        Booking Date : {h.date.slice(0, 10)}
                      </p>
                      <p className="prepayment">Prepayment : Rp. {h.price}</p>
                      <p className="returned">Has been returned</p>
                    </div>
                    <div className="col-3">
                      <button className="btn btn-delete">Delete</button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const mapStateToProps = ({ authRedux }) => {
  return {
    authRedux,
  };
};

export default connect(mapStateToProps)(History);

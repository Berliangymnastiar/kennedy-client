import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Card() {
  const [vehicles, setVehicles] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getVehicles() {
      const {
        data: { result },
      } = await axios.get("http://localhost:8000/vehicles", {
        headers: {
          "x-access-token": `Bearer ${token}`,
        },
      });
      setVehicles(result);
    }
    getVehicles();
  }, [token]);
  return (
    <>
      <section className="card-popular">
        <div className="container container-fluid">
          <div className="row">
            <div className="col-md-10 col-12">
              <h5>Popular in town</h5>
            </div>
            <div className="col-md-2 d-none d-md-block view-all text-right">
              <Link to="">View All</Link>
            </div>
          </div>
          <div className="row">
            {vehicles.length === 0 ? (
              <div className="col-12 mt-5">
                <p className="text-center">Not Data. . .</p>
              </div>
            ) : (
              vehicles.map((vehicle) => {
                return (
                  <div className="col-md-3 col-12 mt-4" key={vehicle.id}>
                    <Link to="/view-more">
                      <img src={vehicle.picture} className="img-fluid" alt="" />
                      <div className="row justify-content-start">
                        <div className="col-md-6 col-5 info-panel">
                          <h5 className="location text-left">{vehicle.name}</h5>
                          <p className="text-left">{vehicle.location}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;

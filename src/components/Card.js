import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { getAllVehicles } from "../utils/Vehicles";

function Card(props) {
  const [vehicles, setVehicles] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getVehicles() {
      const {
        data: { result },
      } = await getAllVehicles(token);
      setVehicles(result);
    }
    getVehicles();
  }, [token]);

  return (
    <>
      <div className="row">
        {vehicles.length === 0 ? (
          <div className="col-12 mt-5">
            <p className="text-center">Not Data. . .</p>
          </div>
        ) : (
          vehicles.map((vehicle) => {
            return (
              <div className="col-md-3 col-12 mt-4" key={vehicle.id}>
                {/* <Link to="/view-more"> */}
                <img
                  src={vehicle.picture}
                  className="img-fluid"
                  alt=""
                  onClick={() => props.goDetail(vehicle.id)}
                />
                <div className="row justify-content-start">
                  <div className="col-md-6 col-5 info-panel">
                    <h5 className="location text-left">{vehicle.name}</h5>
                    <p className="text-left">{vehicle.location}</p>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Card;

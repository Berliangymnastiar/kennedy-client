import React from "react";
import { useHistory } from "react-router-dom";

function Card({ picture, location, name, id }) {
  const history = useHistory();
  const handleDetail = (id) => {
    history.push({ pathname: `/view-more/${id}` });
  };
  return (
    <>
      <div className="col-md-3 col-12 mt-4">
        <img
          src={picture}
          className="img-fluid"
          alt=""
          onClick={() => handleDetail(id)}
        />
        <div className="row justify-content-start">
          <div className="col-md-6 col-5 info-panel">
            <h5 className="location text-left">{name}</h5>
            <p className="text-left">{location}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

import React from "react";

function ButtonReserved({ addReserved, removeReserved, value }) {
  return (
    <div className="row" style={{ marginTop: "100px" }}>
      <div className="col-2">
        <button
          className="btn btn-minus"
          type="button"
          onClick={removeReserved}
        >
          -
        </button>
      </div>
      <div className="col-2">
        <p className="text-value text-center">{value}</p>
      </div>
      <div className="col-2">
        <button className="btn btn-plus" type="button" onClick={addReserved}>
          +
        </button>
      </div>
    </div>
  );
}

export default ButtonReserved;

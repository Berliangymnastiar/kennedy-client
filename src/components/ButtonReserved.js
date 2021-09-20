import React from "react";

function ButtonReserved({ buttonPlus, buttonMinus, value, disabled }) {
  return (
    <div className="row" style={{ marginTop: "100px" }}>
      <div className="col-2">
        <button
          className="btn btn-minus"
          type="button"
          onClick={buttonMinus}
          disabled={disabled}
        >
          -
        </button>
      </div>
      <div className="col-2">
        <p className="text-value text-center">{value}</p>
      </div>
      <div className="col-2">
        <button
          className="btn btn-plus"
          type="button"
          onClick={buttonPlus}
          disabled={disabled}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ButtonReserved;

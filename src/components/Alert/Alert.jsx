import React from "react";
import "./Alert.scss";
import CloseIcon from "../../assets/Svgs/CloseIcon";

function Alert({ msg, setAlert, type, customStyle = {} }) {
  return (
    <>
      <div className={`alert alert--${type}`} style={customStyle}>
        <p className="alert__message">{msg}</p>
        <button
          className="alert__close"
          type="button"
          onClick={() => setAlert(false)}
        >
          <CloseIcon className="alert__close-icon" />
        </button>
      </div>
    </>
  );
}
export default React.memo(Alert);

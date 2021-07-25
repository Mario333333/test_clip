import React from "react";
import PropTypes from "prop-types";
const Popup = (props) => {
  const { isVisible, setIsVisible, status, message } = props;

  return (
    <div className={`popup ${isVisible ? "active" : ""}`}>
      <h4>Response Service</h4>
      <span
        id="close"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        &times;
      </span>
      <div className="popup-content">
        <p>Estatus: {status}</p>
        <p>Message: {message}</p>
      </div>
    </div>
  );
};
Popup.propTypes = {
  isVisible: PropTypes.bool,
  setIsVisible: PropTypes.func,
  status: PropTypes.number,
  message: PropTypes.string,
};

Popup.defaultProps = {
  isVisible: false,
  setIsVisible: () => {},
};

export default Popup;

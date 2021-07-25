import React from "react";
import PropTypes from "prop-types";

import { isEmpty } from "lodash";
const CustomInput = (props) => {
  const {
    label,
    isRequired,
    onChange,
    value,
    className,
    type,
    maxLength,
    errorField,
    setErrorField,
  } = props;

  const handleChange = (event) => {
    if (isEmpty(errorField) === false) {
      setErrorField("");
    }
    if (type === "number") {
      if (event.target.value.length <= maxLength) {
        onChange(event.target.value);
      }
    } else {
      onChange(event.target.value);
    }
  };

  return (
    <div className={`element ${className}`}>
      <label className="label">
        {label} {isRequired && <span>*</span>}
      </label>
      <input
        className={`custom-input ${
          isEmpty(errorField) === false ? "error_form" : ""
        }`}
        value={value}
        onChange={handleChange}
        type={type ? type : "text"}
      />
      {isEmpty(errorField) === false && <span>{errorField}</span>}
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  errorField: PropTypes.string,
  setErrorField: PropTypes.func,
};

CustomInput.defaultProps = {
  label: "",
  isRequired: false,
  onChange: () => {},
  value: "",
  className: "",
  type: "",
  errorField: "",
  setErrorField: () => {},
};

export default CustomInput;

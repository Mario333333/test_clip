import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

const CustomSelectExpirationDate = (props) => {
  const {
    label,
    isRequired,
    valueYear,
    valueMonth,
    onChangeMonth,
    onChangeYear,
    className,
    errorFieldYear,
    setErrorFieldYear,
    errorFieldMonth,
    setErrorFieldMonth,
  } = props;
  const [optionsMonth, setOptionsMonth] = useState([]);
  const [optionsYear, setOptionsYear] = useState([]);

  const handleChangeYear = (event) => {
    if (isEmpty(errorFieldYear) === false) {
      setErrorFieldYear("");
    }
    onChangeYear(event.target.value);
  };
  const handleChangeMonth = (event) => {
    if (isEmpty(errorFieldMonth) === false) {
      setErrorFieldMonth("");
    }
    onChangeMonth(event.target.value);
  };

  const rangeYear = () => {
    const min = new Date().getFullYear();
    const max = min + 10;
    const years = [];
    for (let i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  };
  const rangeMonth = () => {
    const max = 12;
    const min = 1;
    const months = [];
    for (let i = max; i >= min; i--) {
      months.push(i);
    }
    return months;
  };

  const setInitialData = () => {
    const arrayYears = rangeYear();
    const arrayMonths = rangeMonth();
    setOptionsMonth(arrayMonths);
    setOptionsYear(arrayYears);
  };

  useEffect(() => {
    setInitialData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`element ${className}`}>
      <label className="label">
        {label}
        {isRequired && <span>*</span>}
      </label>
      <div className="custom-date-container">
        {optionsMonth && (
          <div>
            <select
              value={valueMonth}
              className={`custom-select ${
                isEmpty(errorFieldMonth) === false ? "error_form" : ""
              }`}
              onChange={handleChangeMonth}
            >
              <option value={""}>Month</option>

              {optionsMonth.map((item, index) => {
                return (
                  <option key={index} value={item} className="label">
                    {item}
                  </option>
                );
              })}
            </select>
            {isEmpty(errorFieldMonth) === false && (
              <span>{errorFieldMonth}</span>
            )}
          </div>
        )}

        {optionsYear && (
          <div>
            <select
              value={valueYear}
              className={`custom-select ${
                isEmpty(errorFieldYear) === false ? "error_form" : ""
              }`}
              onChange={handleChangeYear}
            >
              <option value={""}>Year</option>
              {optionsYear.map((item, index) => {
                return (
                  <option key={index} value={item} className="label">
                    {item}
                  </option>
                );
              })}
            </select>
            {isEmpty(errorFieldYear) === false && <span>{errorFieldYear}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

CustomSelectExpirationDate.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  valueYear: PropTypes.string,
  valueMonth: PropTypes.string,
  onChangeMonth: PropTypes.func,
  onChangeYear: PropTypes.func,
  className: PropTypes.string,
  errorFieldYear: PropTypes.string,
  setErrorFieldYear: PropTypes.func,
  errorFieldMonth: PropTypes.string,
  setErrorFieldMonth: PropTypes.func,
};

CustomSelectExpirationDate.defaultProps = {
  label: "",
  isRequired: false,
  valueYear: "",
  valueMonth: "",
  onChangeMonth: () => {},
  onChangeYear: () => {},
  className: "",
  errorFieldYear: "",
  setErrorFieldYear: () => {},
  errorFieldMonth: "",
  setErrorFieldMonth: () => {},
};

export default CustomSelectExpirationDate;

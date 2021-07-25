import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import React from "react";

const CreditCard = ({
  typeCard,
  cardNumber,
  cardHolderName,
  expirationMonth,
  expirationYear,
}) => {
  return (
    <div className="card">
      <div className="chip-element">
        <span />
      </div>
      <div className="type-card-element">
        <span>{typeCard}</span>
      </div>
      <div className="number-card-element">
        {isEmpty(cardNumber) === false &&
          cardNumber.split("").map((item, index) => (
            <span
              key={index}
              style={{
                marginLeft:
                  index === 4 || index === 8 || index === 12 ? "10px" : "",
              }}
            >
              {item}
            </span>
          ))}
      </div>
      <div className="card-holder-element">
        <h6 className="title">Card Holder</h6>
        <span>{cardHolderName}</span>
      </div>
      <div className="expires-element">
        <h6>Expires</h6>
        {isEmpty(expirationYear) === false &&
          isEmpty(expirationMonth) === false && (
            <span>{`${expirationYear}/${expirationMonth}`}</span>
          )}
      </div>
    </div>
  );
};

CreditCard.propTypes = {
  typeCard: PropTypes.string,
  cardNumber: PropTypes.string,
  cardHolderName: PropTypes.string,
  expirationMonth: PropTypes.string,
  expirationYear: PropTypes.string,
};

CreditCard.defaultProps = {
  typeCard: "",
  cardNumber: "",
  cardHolderName: "",
  expirationMonth: "",
  expirationYear: "",
};

export default CreditCard;

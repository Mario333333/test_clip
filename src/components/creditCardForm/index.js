import React from "react";
import PropTypes from "prop-types";
import CustomInput from "../CustomInput";
import CustomSelectExpirationDate from "../CustomSelectExpirationDate";

const CreditCardForm = ({
  cardNumber,
  setCardNumber,
  cardHolderName,
  setCardHolderName,
  expirationMonth,
  setExpirationMonth,
  expirationYear,
  setExpirationYear,
  cvv,
  setCvv,
  maxLengthCVV,
  maxLengthCard,
  addNewCreditCard,
  errorCardNumber,
  setErrorCardNumber,
  errorCardHolderName,
  setErrorCardHolderName,
  errorExpirationMonth,
  setErrorExpirationMonth,
  errorExpirationYear,
  setErrorExpirationYear,
  errorCvv,
  setErrorCvv,
}) => {
  return (
    <form className="credit-card-form" data-testid="form">
      <CustomInput
        label="Card Number"
        name="card-number"
        type="number"
        maxLength={maxLengthCard}
        value={cardNumber}
        onChange={setCardNumber}
        errorField={errorCardNumber}
        setErrorField={setErrorCardNumber}
      />
      <CustomInput
        label="Card Name"
        name="card-name"
        type="text"
        value={cardHolderName}
        onChange={setCardHolderName}
        errorField={errorCardHolderName}
        setErrorField={setErrorCardHolderName}
      />
      <CustomSelectExpirationDate
        label="Expiration date"
        className="custom-bassis-expiration-date"
        valueYear={expirationYear}
        valueMonth={expirationMonth}
        onChangeMonth={setExpirationMonth}
        onChangeYear={setExpirationYear}
        errorFieldYear={errorExpirationYear}
        setErrorFieldYear={setErrorExpirationYear}
        errorFieldMonth={errorExpirationMonth}
        setErrorFieldMonth={setErrorExpirationMonth}
        nameYear="year"
        nameMonth="month"
      />
      <CustomInput
        label="CVV"
        type="number"
        name="cvv"
        className="custom-bassis-cvv"
        maxLength={maxLengthCVV}
        value={cvv}
        onChange={setCvv}
        errorField={errorCvv}
        setErrorField={setErrorCvv}
      />
      <button
        className="submit-button"
        onClick={(event) => {
          event.preventDefault();
          addNewCreditCard();
        }}
        name="submit-button"
      >
        Submit
      </button>
    </form>
  );
};

CreditCardForm.propTypes = {
  cardNumber: PropTypes.string,
  setCardNumber: PropTypes.func,
  cardHolderName: PropTypes.string,
  setCardHolderName: PropTypes.func,
  expirationMonth: PropTypes.string,
  setExpirationMonth: PropTypes.func,
  expirationYear: PropTypes.string,
  setExpirationYear: PropTypes.func,
  cvv: PropTypes.string,
  setCvv: PropTypes.func,
  maxLengthCVV: PropTypes.number,
  maxLengthCard: PropTypes.number,
  addNewCreditCard: PropTypes.func,
  errorCardNumber: PropTypes.string,
  setErrorCardNumber: PropTypes.func,
  errorCardHolderName: PropTypes.string,
  setErrorCardHolderName: PropTypes.func,
  errorExpirationMonth: PropTypes.string,
  setErrorExpirationMonth: PropTypes.func,
  errorExpirationYear: PropTypes.string,
  setErrorExpirationYear: PropTypes.func,
  errorCvv: PropTypes.string,
  setErrorCvv: PropTypes.func,
};

CreditCardForm.defaultProps = {
  cardNumber: "",
  setCardNumber: () => {},
  cardHolderName: "",
  setCardHolderName: () => {},
  expirationMonth: "",
  setExpirationMonth: () => {},
  expirationYear: "",
  setExpirationYear: () => {},
  cvv: "",
  setCvv: () => {},
  maxLengthCVV: 3,
  maxLengthCard: 16,
  addNewCreditCard: () => {},
  errorCardNumber: "",
  setErrorCardNumber: () => {},
  errorCardHolderName: "",
  setErrorCardHolderName: () => {},
  errorExpirationMonth: "",
  setErrorExpirationMonth: () => {},
  errorExpirationYear: "",
  setErrorExpirationYear: () => {},
  errorCvv: "",
  setErrorCvv: () => {},
};

export default CreditCardForm;

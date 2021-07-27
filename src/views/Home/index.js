import React, { useEffect, useState } from "react";
import { isNil, isEmpty } from "lodash";
import MainLayout from "../../containers/MainLayout";
import CreditCardForm from "../../components/creditCardForm";
import CreditCard from "../../components/creditCard";
import Popup from "../../components/popup";

import { postCreditCard } from "../../utils/services/api";
const creditCardType = require("credit-card-type");

const Home = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvv, setCvv] = useState("");

  const [typeCard, setTypeCard] = useState("");
  const [maxLengthCVV, setMaxLengthCVV] = useState(3);
  const [maxLengthCard, setMaxLengthCard] = useState(16);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  const [errorCardNumber, setErrorCardNumber] = useState("");
  const [errorCardHolderName, setErrorCardHolderName] = useState("");
  const [errorExpirationMonth, setErrorExpirationMonth] = useState("");
  const [errorExpirationYear, setErrorExpirationYear] = useState("");
  const [errorCvv, setErrorCvv] = useState("");

  useEffect(() => {
    if (cardNumber.length > 0 && cardNumber.length <= 4) {
      const creditCard = creditCardType(cardNumber)[0];
      if (isNil(creditCard) === false) {
        setTypeCard(creditCard.niceType);
        setMaxLengthCVV(creditCard.code.size);
        setMaxLengthCard(creditCard.lengths[0]);
      }
    }
  }, [cardNumber]);

  const isValidatedFilds = () => {
    let error = true;

    if (isEmpty(cardNumber) || cardNumber.length < maxLengthCard) {
      setErrorCardNumber(
        isEmpty(cardNumber)
          ? "Requerido"
          : `Longitud debe ser igual a ${maxLengthCard}`
      );
      error = false;
    }
    if (isEmpty(cardHolderName)) {
      setErrorCardHolderName("Requerido");

      error = false;
    }
    if (isEmpty(expirationMonth)) {
      setErrorExpirationMonth("Requerido");

      error = false;
    }
    if (isEmpty(expirationYear)) {
      setErrorExpirationYear("Requerido");

      error = false;
    }
    if (isEmpty(cvv) || cvv.length !== maxLengthCVV) {
      setErrorCvv(
        isEmpty(cvv) ? "Requerido" : `Longitud debe ser igual a ${maxLengthCVV}`
      );

      error = false;
    }
    return error;
  };

  const clearState = () => {
    setCardNumber("");
    setCardHolderName("");
    setExpirationMonth("");
    setExpirationYear("");
    setCvv("");
    setTypeCard("");
    setMaxLengthCVV(3);
    setMaxLengthCard(16);
  };

  const postNewCreditCard = async () => {
    try {
      const data = {
        cardNumber,
        cardName: cardHolderName,
        cvv,
        expiration: `${expirationMonth}-${expirationYear}`,
      };
      const response = await postCreditCard(data);
      return { ...response, error: false };
    } catch (error) {
      return {
        error: true,
        message: "Error",
      };
    }
  };

  const addNewCreditCard = async () => {
    const isValidated = isValidatedFilds();
    if (isValidated === true) {
      const response = await postNewCreditCard();
      const { statusCode, message, error } = response;

      if (error === false) {
        setStatus(statusCode);
        setMessage(message);
      } else if (error === true) {
        setStatus(statusCode);
        setMessage(message);
      }
      setIsVisiblePopup(true);
      clearState();
    }
  };

  const changeVisibilityPopup = (visible) => {
    setIsVisiblePopup(visible);
    if (visible === false) {
      setStatus(null);
      setMessage(null);
    }
  };

  return (
    <MainLayout>
      <div className="home-container">
        <Popup
          isVisible={isVisiblePopup}
          setIsVisible={changeVisibilityPopup}
          status={status}
          message={message}
        />
        <CreditCard
          cardNumber={cardNumber}
          cardHolderName={cardHolderName}
          expirationMonth={expirationMonth}
          expirationYear={expirationYear}
          cvv={cvv}
          typeCard={typeCard}
        />
        <CreditCardForm
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardHolderName={cardHolderName}
          setCardHolderName={setCardHolderName}
          expirationMonth={expirationMonth}
          setExpirationMonth={setExpirationMonth}
          expirationYear={expirationYear}
          setExpirationYear={setExpirationYear}
          cvv={cvv}
          setCvv={setCvv}
          maxLengthCVV={maxLengthCVV}
          maxLengthCard={maxLengthCard}
          addNewCreditCard={addNewCreditCard}
          errorCardNumber={errorCardNumber}
          setErrorCardNumber={setErrorCardNumber}
          errorCardHolderName={errorCardHolderName}
          setErrorCardHolderName={setErrorCardHolderName}
          errorExpirationMonth={errorExpirationMonth}
          setErrorExpirationMonth={setErrorExpirationMonth}
          errorExpirationYear={errorExpirationYear}
          setErrorExpirationYear={setErrorExpirationYear}
          errorCvv={errorCvv}
          setErrorCvv={setErrorCvv}
        />
      </div>
    </MainLayout>
  );
};

export default Home;

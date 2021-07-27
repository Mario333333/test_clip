import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, cleanup } from "@testing-library/react";
import Form from ".";

describe("<Form/>", () => {
  afterEach(cleanup);
  const cardNumber = "5234567834567864";
  const cardHolderName = "Test user";
  const expirationMonth = "12";
  const expirationYear = "2021";
  const cvv = "123";
  const maxLengthCVV = 3;
  const maxLengthCard = 16;
  const errorFieldRequired = "Required";
  const mockHandlerError = jest.fn();
  const mockHandlerSetData = jest.fn();
  const mockHandlerAddNewCreditCard = jest.fn();

  test("Validated form", () => {
    let component = render(
      <Form
        cardNumber={cardNumber}
        setCardNumber={mockHandlerSetData}
        cardHolderName={cardHolderName}
        setCardHolderName={mockHandlerSetData}
        expirationMonth={expirationMonth}
        setExpirationMonth={mockHandlerSetData}
        expirationYear={expirationYear}
        setExpirationYear={mockHandlerSetData}
        cvv={cvv}
        setCvv={mockHandlerSetData}
        maxLengthCVV={maxLengthCVV}
        maxLengthCard={maxLengthCard}
        addNewCreditCard={mockHandlerAddNewCreditCard}
        errorCardNumber={errorFieldRequired}
        setErrorCardNumber={mockHandlerError}
        errorCardHolderName={errorFieldRequired}
        setErrorCardHolderName={mockHandlerError}
        errorExpirationMonth={errorFieldRequired}
        setErrorExpirationMonth={mockHandlerError}
        errorExpirationYear={errorFieldRequired}
        setErrorExpirationYear={mockHandlerError}
        errorCvv={errorFieldRequired}
        setErrorCvv={mockHandlerError}
      />
    );
    const form = component.getByTestId("form");
    const number = form.querySelector('input[name="card-number"]');
    const name = form.querySelector('input[name="card-name"]');
    const month = form.querySelector('select[name="month"]');
    const year = form.querySelector('select[name="year"]');
    const cvvElement = form.querySelector('input[name="cvv"]');
    const button = form.querySelector('button[name="submit-button"]');
    expect(number).toHaveValue(Number(cardNumber));
    expect(name).toHaveValue(cardHolderName);
    expect(month).toHaveValue(expirationMonth);
    expect(year).toHaveValue(expirationYear);
    expect(cvvElement).toHaveValue(Number(cvv));
    fireEvent.click(button);
    expect(mockHandlerError).toHaveBeenCalledTimes(0);
    expect(mockHandlerAddNewCreditCard).toHaveBeenCalledTimes(1);
  });
});

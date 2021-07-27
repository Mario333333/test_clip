import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import CreditCard from ".";

describe("<CreditCard/>", () => {
  afterEach(cleanup);
  const typeCard = "Visa";
  const cardNumber = "5234123456781234";
  const cardHolderName = "Test User";
  const expirationMonth = "12";
  const expirationYear = "2021";

  const component = render(
    <CreditCard
      typeCard={typeCard}
      cardNumber={cardNumber}
      cardHolderName={cardHolderName}
      expirationMonth={expirationMonth}
      expirationYear={expirationYear}
    />
  );

  test("Have content", () => {
    expect(component.container).toHaveTextContent(typeCard);
    expect(component.container).toHaveTextContent(cardNumber);
    expect(component.container).toHaveTextContent(cardHolderName);
    expect(component.container).toHaveTextContent(
      `${expirationYear}/${expirationMonth}`
    );
  });
});

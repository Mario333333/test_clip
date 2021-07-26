import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Popup from ".";

describe("<Popup/>", () => {
  const isVisible = true;
  const mockHandler = jest.fn(); // espia de llamado a la funcion
  const status = 200;
  const message = "success";
  let component;

  beforeEach(() => {
    component = render(
      <Popup
        isVisible={isVisible}
        setIsVisible={mockHandler}
        status={status}
        message={message}
      />
    );
  });

  test("Is showed and is not showed", () => {
    const element = component.getByText("Response service");
    expect(element.parentNode).toHaveStyle("visibility: visible");
  });

  test("after clicking not showed", () => {
    const button = component.getByText("x");
    fireEvent.click(button);
    setTimeout(() => {
      expect(button.parentNode).toHaveStyle("visibility: hidden");
      expect(mockHandler).toHaveBeenCalledTimes(1);
    }, 1500);
  });
});

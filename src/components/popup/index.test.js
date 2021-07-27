import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, cleanup } from "@testing-library/react";
import Popup from ".";

describe("<Popup/>", () => {
  afterEach(cleanup);
  let isVisible = true;
  const mockHandler = jest.fn();
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

  test("Is showed", () => {
    const element = component.getByText("Response service");
    expect(element.parentNode).toHaveStyle("visibility: visible");
    const button = component.getByText("x");
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});

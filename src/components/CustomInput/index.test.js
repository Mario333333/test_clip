/* eslint-disable testing-library/await-async-utils */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { act, render, cleanup } from "@testing-library/react";
import CustomInput from ".";
import { Simulate } from "react-dom/test-utils";

describe("<CustomInput/>", () => {
  afterEach(cleanup);

  const label = "Card number";
  const mockOnChange = jest.fn();
  const mockSetErrorField = jest.fn();
  const maxLength = 3;

  test("Validated Input", () => {
    let component = render(
      <CustomInput
        label={label}
        type="number"
        value={"123"}
        className="custom-bassis-cvv"
        maxLength={maxLength}
        onChange={mockOnChange}
        errorField={""}
        isRequired
        setErrorField={mockSetErrorField}
      />
    );

    expect(component.getByText(label)).toBeDefined();
    expect(component.getByText("*")).toBeDefined();
  });

  test("Input error", async () => {
    let component = render(
      <CustomInput
        label={label}
        type="number"
        value=""
        name="card-number"
        maxLength={maxLength}
        onChange={mockOnChange}
        errorField={"Required"}
        setErrorField={mockSetErrorField}
      />
    );

    let input = component.getByDisplayValue("");
    expect(component.getByText("Required")).toBeDefined();
    expect(input.parentNode).toHaveStyle(
      "border: 1px solid #ef3b42 !important"
    );
    act(() => {
      input.value = "2";
      Simulate.change(input);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockSetErrorField).toHaveBeenCalledTimes(1);
    });
  });
});

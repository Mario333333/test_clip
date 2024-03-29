/* eslint-disable testing-library/await-async-utils */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { act, render, cleanup } from "@testing-library/react";
import CustomExpirationDate from ".";
import { Simulate } from "react-dom/test-utils";

describe("<CustomExpirationDate/>", () => {
  afterEach(cleanup);

  const label = "Date";
  const mockOnChange = jest.fn();
  const mockSetErrorField = jest.fn();

  test("Validated Date", () => {
    let component = render(
      <CustomExpirationDate
        label={label}
        isRequired
        valueYear="2021"
        valueMonth="12"
        onChangeMonth={mockOnChange}
        onChangeYear={mockOnChange}
      />
    );

    expect(component.getByText(label)).toBeDefined();
    expect(component.getByText("*")).toBeDefined();
  });

  test("Error year", () => {
    let component = render(
      <CustomExpirationDate
        label={label}
        isRequired
        valueYear=""
        valueMonth="12"
        onChangeMonth={mockOnChange}
        onChangeYear={mockOnChange}
        errorFieldYear={"Required"}
        setErrorFieldYear={mockSetErrorField}
      />
    );
    let select = component.getByTestId("year");

    expect(component.getByText(label)).toBeDefined();
    expect(component.getByText("Required")).toBeDefined();

    expect(select.parentNode).toHaveStyle(
      "border: 1px solid #ef3b42 !important"
    );
  });

  test("Error month", () => {
    let component = render(
      <CustomExpirationDate
        label={label}
        isRequired
        valueYear="2021"
        valueMonth=""
        onChangeMonth={mockOnChange}
        onChangeYear={mockOnChange}
        errorFieldMonth={"Required"}
        setErrorFieldMonth={mockSetErrorField}
      />
    );
    let select = component.getByTestId("month");

    expect(component.getByText(label)).toBeDefined();
    expect(component.getByText("Required")).toBeDefined();
    expect(select.parentNode).toHaveStyle(
      "border: 1px solid #ef3b42 !important"
    );
  });
});

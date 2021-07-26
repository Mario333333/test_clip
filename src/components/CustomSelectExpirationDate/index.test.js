/* eslint-disable testing-library/await-async-utils */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { act, render, waitFor } from "@testing-library/react";
import CustomExpirationDate from ".";
import { Simulate } from "react-dom/test-utils";

describe("<CustomExpirationDate/>", () => {
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

    waitFor(() =>
      expect(select).toHaveStyle("border: 1px solid #ef3b42 !important")
    );
    act(() => {
      select.value = "2021";
      Simulate.change(select);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockSetErrorField).toHaveBeenCalledTimes(1);
    });
    waitFor(() => expect(select).toHaveStyle("border: 1px solid #e4e4e4;"));
    waitFor(() => expect(component.getAllByText("Required").length).toEqual(0));
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

    waitFor(() =>
      expect(select).toHaveStyle("border: 1px solid #ef3b42 !important")
    );
    act(() => {
      select.value = "12";
      Simulate.change(select);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockSetErrorField).toHaveBeenCalledTimes(1);
    });
    waitFor(() => expect(select).toHaveStyle("border: 1px solid #e4e4e4;"));
    waitFor(() => expect(component.getAllByText("Required").length).toEqual(0));
  });
});

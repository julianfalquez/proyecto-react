import ReactDOM from "react-dom";
import { fireEvent,render, screen } from "@testing-library/react";
import { AddProductForm } from "./AddProductForm";
import { Provider } from "react-redux";

import store from "./../../store/index";

describe("<AddProductForm />", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Button is disable when a form field is empty", () => {
    render(
      <Provider store={store}>
        <AddProductForm />
      </Provider>
    );
    const submitButton = screen.getByRole("button", { name: "Add" });
    const categoryInput = screen.getByTestId("category-input");
    const productInput = screen.getByTestId("product-input");
    const priceInput = screen.getByTestId("price-input");
    const descriptionInput = screen.getByTestId("description-input");

    expect(categoryInput.value).toBe("");
    expect(productInput.value).toBe("");
    expect(priceInput.value).toBe("");
    expect(descriptionInput.value).toBe("");
    expect(submitButton).toHaveAttribute("disabled");
  });
  test("Button is enable when the form is full", () => {
    render(
      <Provider store={store}>
        <AddProductForm />
      </Provider>
    );
    const submitButton = screen.getByRole("button", { name: "Add" });
    const categoryInput = screen.getByTestId("category-input");
    fireEvent.change(categoryInput, { target: { value: "test" } });
    const productInput = screen.getByTestId("product-input");
    fireEvent.change(productInput, { target: { value: "test" } });
    const priceInput = screen.getByTestId("price-input");
    fireEvent.change(priceInput, { target: { value: "10" } });
    const descriptionInput = screen.getByTestId("description-input");
    fireEvent.change(descriptionInput, { target: { value: "10" } });

    expect(categoryInput.value).not.toBe("");
    expect(productInput.value).not.toBe("");
    expect(priceInput.value).not.toBe("");
    expect(descriptionInput.value).not.toBe("");
    expect(submitButton).not.toHaveAttribute("disabled");
  });
});


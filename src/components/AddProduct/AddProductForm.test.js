import ReactDOM from "react-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddProductForm } from "./AddProductForm";
import { Provider } from "react-redux";

import store from "./../../store/index";
import { ConstructionOutlined } from "@mui/icons-material";

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
    const categoryInput = screen.getByRole("textbox", { name: "Category" });
    const productInput = screen.getByRole("textbox", { name: "Product Name" });
    const priceInput = screen.getByRole("spinbutton", { name: "Price" });
    const descriptionInput = screen.getByRole("textbox", {
      name: "Description",
    });

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
    const categoryInput = screen.getByRole("textbox", { name: "Category" });
    fireEvent.change(categoryInput, { target: { value: "test" } });
    const productInput = screen.getByRole("textbox", { name: "Product Name" });
    fireEvent.change(productInput, { target: { value: "test" } });
    const priceInput = screen.getByRole("spinbutton", { name: "Price" });
    fireEvent.change(priceInput, { target: { value: "10" } });
    const descriptionInput = screen.getByRole("textbox", {
      name: "Description",
    });
    fireEvent.change(descriptionInput, { target: { value: "10" } });

    expect(categoryInput.value).not.toBe("");
    expect(productInput.value).not.toBe("");
    expect(priceInput.value).not.toBe("");
    expect(descriptionInput.value).not.toBe("");
    expect(submitButton).not.toHaveAttribute("disabled");
  });

  test("Item is added", () => {
    render(
      <Provider store={store}>
        <AddProductForm handleClose={() => console.log("handle close")} />
      </Provider>
    );
    const submitButton = screen.getByRole("button", { name: "Add" });
    const categoryInput = screen.getByRole("textbox", { name: "Category" });
    fireEvent.change(categoryInput, { target: { value: "test" } });
    const productInput = screen.getByRole("textbox", { name: "Product Name" });
    fireEvent.change(productInput, { target: { value: "test" } });
    const priceInput = screen.getByRole("spinbutton", { name: "Price" });
    fireEvent.change(priceInput, { target: { value: "10" } });
    const descriptionInput = screen.getByRole("textbox", {
      name: "Description",
    });
    fireEvent.change(descriptionInput, { target: { value: "10" } });
    fireEvent.click(submitButton);
    const reduxState=store.getState()
    console.log("Este es el get state",reduxState.items);
    const itemAdded=reduxState.items.items[0]
    console.log("Este es el get state",itemAdded.name);
    expect(itemAdded.name===productInput.value)
  });
});

import ReactDOM from "react-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

import store from "./../../store/index";
import { ForestRounded } from "@mui/icons-material";

describe("<ProductList />", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Renders the product list when fetch is succesfull", async () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
    //
    const productList = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 3000 }
    );
    expect(productList).toBeInTheDocument;
  });
  test("Renders reload items when fetch fails", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      ok: false,
    });
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
    //
    const refreshIcon = await screen.findByPlaceholderText(
      "refreshIcon",
      {},
      { timeout: 3000 }
    );
    expect(refreshIcon).toBeInTheDocument;
  });
});
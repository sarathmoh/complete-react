import {fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

describe("Header component", () => {
  test("Clicking the login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument()
  });
  test("finding the cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItem= screen.getByText("Cart(0)");
    expect(cartItem).toBeInTheDocument()
  });
  test("Login button changes to Logout while Clicking", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton=screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginButton)
    const LogoutButton=screen.getByRole("button",{name:"Logout"})
    expect(LogoutButton).toBeInTheDocument() 
  });
});

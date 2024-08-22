import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us component", () => {
  test("contact component rendered", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("1 input box rendered", () => {
    render(<Contact />);
    const heading = screen.getByPlaceholderText("input-one");
    expect(heading).toBeInTheDocument();
  });

  test("2 input boxes were rendered", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
  });
});

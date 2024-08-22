import RestoCard from "../RestoCard";
import Data from "../../utils/Data/itemData.json"
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"

test("Restocard rendered successfully", () => {
  render(<RestoCard restoDetails={Data} />);
  const name=screen.getByText("UBQ by Barbeque Nation")
  expect(name).toBeInTheDocument()
});

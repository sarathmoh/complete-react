import { render, act } from "@testing-library/react";
import BodyPart from "../BodyPart";
import MockData from "../../utils/Data/mockData.json";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

test("Render body-component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <BodyPart />
      </BrowserRouter>
    )
  );
});

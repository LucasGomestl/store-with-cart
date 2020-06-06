import React from "react";
import { render } from "@testing-library/react";
import Header from "../index";

it("Should render the Header", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("menu")).toBeInTheDocument();
  expect(getByTestId("title")).toBeInTheDocument();
});

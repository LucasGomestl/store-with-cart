import React from "react";
import { render } from "@testing-library/react";
import ProductGallery from "../index";

describe("Procuts Gallery tests", () => {
  it("Should render Product Gallery", () => {
    const { queryAllByTestId } = render(<ProductGallery />);
    expect(queryAllByTestId("banner")).toHaveLength(3);
  });
});

import React from "react";
import Title from "../index";
import { render } from "@testing-library/react";

describe("Title component test", () => {
  it("Should render Title", () => {
    const { container } = render(<Title title="My Title" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

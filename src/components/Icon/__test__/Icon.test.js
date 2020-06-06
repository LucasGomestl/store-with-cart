import React from "react";
import { render } from "@testing-library/react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Icon from "../index";

describe("Icon tests", () => {
  it("Should render the Icon", () => {
    const { container, queryByTestId } = render(<Icon icon={faSearch} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(queryByTestId("link")).not.toBeInTheDocument();
  });

  it("Should render the Icon with a link around", () => {
    const { getByTestId } = render(<Icon icon={faSearch} link="/" />);
    expect(getByTestId("link")).toBeInTheDocument();
  });
});

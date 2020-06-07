import React from "react";
import { render } from "@testing-library/react";
import ProductBanner from "../index";

function getBannerStyle() {
  const BannerClass = ProductBanner("").type.styledComponentId;
  const BannerRoots = document.getElementsByClassName(BannerClass);
  return window.getComputedStyle(BannerRoots[0]);
}

describe("Product Banner tests", () => {
  it("Should render Product Banner with default props", () => {
    render(<ProductBanner />);

    const style = getBannerStyle();
    expect(style._values["grid-column-start"]).toBe("auto");
    expect(style._values["grid-column-end"]).toBe("auto");
  });

  it("Should render Product Banner with custom props", () => {
    render(<ProductBanner start={1} end={-1} />);

    const style = getBannerStyle();
    expect(style._values["grid-column-start"]).toBe("1");
    expect(style._values["grid-column-end"]).toBe("-1");
  });
});

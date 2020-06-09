import React from "react";
import Button from "../Button";
import { StyledProductBanner, ProductImage, Info } from "./styles";

const ProductBanner = ({ start, end, src }) => {
  return (
    <StyledProductBanner start={start} end={end} data-testid="banner">
      <ProductImage src={src} alt="Product banner" />
      <Info>
        <h2>Category</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, unde.
        </p>
        <Button label="Button" icon="long-arrow-alt-right" />
      </Info>
    </StyledProductBanner>
  );
};

export default ProductBanner;

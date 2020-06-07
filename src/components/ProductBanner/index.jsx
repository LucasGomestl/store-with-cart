import React from "react";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { StyledProductBanner, ProductImage, Info } from "./styles";

const ProductBanner = ({ start, end, src }) => {
  return (
    <StyledProductBanner start={start} end={end}>
      <ProductImage src={src} alt="Product banner" />
      <Info>
        <h2>Category</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, unde.
        </p>
        <Button label="Button" icon={faLongArrowAltRight} />
      </Info>
    </StyledProductBanner>
  );
};

export default ProductBanner;

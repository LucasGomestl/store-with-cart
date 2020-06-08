import React from "react";
import ProductCard from "../ProductCard";
import { StyledProductList } from "./styles";

const ProductList = () => {
  return (
    <StyledProductList>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </StyledProductList>
  );
};

export default ProductList;

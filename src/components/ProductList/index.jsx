import React from "react";
import ProductCard from "../ProductCard";
import { StyledProductList } from "./styles";

const ProductList = ({ list }) => {
  return (
    <StyledProductList>
      {list.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;

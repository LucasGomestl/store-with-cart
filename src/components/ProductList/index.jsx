import React from "react";
import ProductCard from "../ProductCard";
import { StyledProductList } from "./styles";

const ProductList = ({ list, filter }) => {
  return (
    <StyledProductList>
      {list.map((product, index) =>
        product.id !== filter ? (
          <ProductCard key={index} product={product} />
        ) : (
          ""
        )
      )}
    </StyledProductList>
  );
};

export default ProductList;

import React from "react";
import ProductList from "../../components/ProductList";
import { StyledProductLists, ListContainer, Title } from "./styles";

const ProductLists = () => {
  return (
    <StyledProductLists>
      <ListContainer>
        <Title>Category 1</Title>
        <ProductList />
      </ListContainer>
      <ListContainer>
        <Title>Category 2</Title>
        <ProductList />
      </ListContainer>
    </StyledProductLists>
  );
};

export default ProductLists;

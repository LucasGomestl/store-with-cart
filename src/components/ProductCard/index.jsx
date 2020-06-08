import React from "react";
import {
  StyledProductCard,
  ProductImage,
  AddToCartButton,
  Title,
  Price,
} from "./styles";

const ProductCard = () => {
  return (
    <StyledProductCard>
      <ProductImage
        src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
        alt="product"
      />
      <Title>White Gold Plated Princess</Title>
      <Price>$ 9.99</Price>
      <AddToCartButton>Add To Cart</AddToCartButton>
    </StyledProductCard>
  );
};

export default ProductCard;

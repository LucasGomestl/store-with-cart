import React from "react";
import {
  StyledProductCard,
  ProductImage,
  AddToCartButton,
  Title,
  Price,
} from "./styles";

const ProductCard = ({ product }) => {
  return (
    <StyledProductCard>
      <ProductImage src={product.image} alt="product" />
      <Title>{product.title}</Title>
      <Price>$ {product.price}</Price>
      <AddToCartButton>Add To Cart</AddToCartButton>
    </StyledProductCard>
  );
};

export default ProductCard;

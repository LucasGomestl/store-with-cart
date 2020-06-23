import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  StyledProductCard,
  ProductImage,
  AddToCartButton,
  Title,
  Price,
} from "./styles";

import { addProductToCart } from "../../pages/Cart/actions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart) || [];
  return (
    <StyledProductCard>
      <ProductImage src={product.image} alt="product" />
      <Title>{product.title}</Title>
      <Price>$ {product.price}</Price>
      <AddToCartButton
        onClick={() => dispatch(addProductToCart(product, cart))}
      >
        Add To Cart
      </AddToCartButton>
    </StyledProductCard>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(ProductCard);

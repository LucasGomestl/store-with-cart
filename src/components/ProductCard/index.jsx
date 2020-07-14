import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  StyledProductCard,
  ProductImage,
  AddToCartButton,
  Title,
  Price,
  StyledLink,
} from "./styles";

import { addProductToCart } from "../../pages/Cart/actions";
import { formatter } from "../../utils";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart) || [];
  return (
    <StyledProductCard>
      <StyledLink to={"/product/" + product.id}>
        <ProductImage src={product.image} alt="product" />
        <Title>{product.title}</Title>
        <Price>{formatter.format(product.price)}</Price>
      </StyledLink>
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

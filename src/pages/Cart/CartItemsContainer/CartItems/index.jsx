import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { deleteProductFromCart } from "../../actions";

import {
  StyledItem,
  ProductInfo,
  ProductImage,
  ProductTitle,
  Price,
  RemoveFromCart,
  ProductDescription,
  MultipliedPrice,
} from "./styles";

import Quantity from "../../../../components/QuantityField";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const CartItem = () => {
  const cart = useSelector((state) => state.cart.cart) || [];
  const dispatch = useDispatch();

  return cart.map((product) => (
    <StyledItem>
      <ProductInfo>
        <ProductImage src={product.image} alt="Product" />
        <div>
          <ProductTitle>{product.title}</ProductTitle>
          <div>
            <Price>{formatter.format(product.price)}</Price>
            <ProductDescription>{product.description}</ProductDescription>
          </div>
        </div>
      </ProductInfo>
      <Quantity product={product} quantity={product.quantity} cart={cart} />
      <MultipliedPrice>
        {formatter.format(product.price * product.quantity)}
      </MultipliedPrice>
      <RemoveFromCart
        onClick={() => dispatch(deleteProductFromCart(product.id, cart))}
      >
        X
      </RemoveFromCart>
    </StyledItem>
  ));
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(CartItem);

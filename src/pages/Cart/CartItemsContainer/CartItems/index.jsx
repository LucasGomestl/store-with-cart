import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { deleteProductFromCart } from "../../actions";
import { Link } from "react-router-dom";

import {
  StyledItem,
  ProductInfo,
  ProductImage,
  ProductTitle,
  Price,
  RemoveFromCart,
  ProductDescription,
  MultipliedPrice,
  ProductActions,
} from "./styles";

import Quantity from "../../../../components/QuantityField";

import { formatter } from "../../../../utils";

const CartItem = () => {
  const cart = useSelector((state) => state.cart.cart) || [];
  const dispatch = useDispatch();

  return cart.map((product) => (
    <StyledItem key={product.id} data-testid="cartItem">
      <Link to={"/product/" + product.id}>
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
      </Link>
      <ProductActions>
        <Quantity product={product} quantity={product.quantity} cart={cart} />
        <MultipliedPrice>
          {formatter.format(product.price * product.quantity)}
        </MultipliedPrice>
        <RemoveFromCart
          onClick={() => dispatch(deleteProductFromCart(product.id, cart))}
        >
          X
        </RemoveFromCart>
      </ProductActions>
    </StyledItem>
  ));
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(CartItem);

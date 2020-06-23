import React from "react";
import { useDispatch } from "react-redux";
import { QuantityContainer, Quantity, QuantityNav, Button } from "./styles";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../pages/Cart/actions";

const QuantityField = ({ product, quantity, cart }) => {
  const dispatch = useDispatch();

  return (
    <QuantityContainer>
      <Quantity
        type="number"
        value={quantity}
        min="1"
        onChange={() => dispatch(addProductToCart(product, cart, quantity))}
      />
      <QuantityNav>
        <Button onClick={() => dispatch(addProductToCart(product, cart))}>
          +
        </Button>
        <Button
          onClick={() => dispatch(removeProductFromCart(product.id, cart))}
        >
          -
        </Button>
      </QuantityNav>
    </QuantityContainer>
  );
};

export default QuantityField;

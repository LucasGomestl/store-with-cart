import React from "react";
import Icon from "../../../components/Icon";
import { useSelector, connect } from "react-redux";
import {
  StyledOrderSummary,
  Title,
  TotalPriceContainer,
  CheckoutButton,
} from "./styles";

import { formatter } from "../../../utils";

const OrderSummary = () => {
  const cart = useSelector((state) => state.cart.cart) || [];
  const totalPrice = cart.reduce((count, current) => {
    return count + current.price * current.quantity;
  }, 0);
  return (
    <StyledOrderSummary>
      <Title>Order Summary</Title>
      <TotalPriceContainer>
        <div>
          Total{" "}
          <span data-testid="totalPrice">{formatter.format(totalPrice)}</span>
        </div>
        <CheckoutButton>
          <Icon icon="shopping-bag" /> Checkout
        </CheckoutButton>
      </TotalPriceContainer>
    </StyledOrderSummary>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(OrderSummary);

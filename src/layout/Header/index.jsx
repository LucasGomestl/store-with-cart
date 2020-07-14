import React from "react";
import { useSelector, connect } from "react-redux";
import { Link } from "react-router-dom";
import { StyledHeader, IconsContainer, CartItemsQuantity } from "./styles";

import Title from "../../components/Title";
import Icon from "../../components/Icon";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart) || [];
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <Title title="My Store" />
        </Link>
        <IconsContainer>
          <Icon icon="shopping-cart" link="/cart" color="white" />
          {cart[0] ? (
            <Link to="/cart">
              <CartItemsQuantity>
                <div data-testid="cartItemsQuantity">
                  {cart.reduce((count, current) => {
                    return count + current.quantity;
                  }, 0)}
                </div>
              </CartItemsQuantity>
            </Link>
          ) : (
            <div></div>
          )}
        </IconsContainer>
      </StyledHeader>
    </>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(Header);

import React from "react";
import { useSelector, connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  StyledHeader,
  IconsContainer,
  LocationContainer,
  CartItemsQuantity,
} from "./styles";

import Title from "../../components/Title";
import Icon from "../../components/Icon";
import Menu from "../../components/Menu";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart) || [];
  return (
    <>
      <StyledHeader>
        <LocationContainer>
          <Icon icon="map-marker-alt" />
          <span>City</span>
        </LocationContainer>
        <Link to="/">
          <Title title="My Store" />
        </Link>
        <IconsContainer>
          <Icon icon="search" link="/" />
          <Icon icon="shopping-cart" link="/cart" />
          {cart[0] ? (
            <Link to="/cart">
              <CartItemsQuantity>
                <div>
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

        <Menu />
      </StyledHeader>
    </>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(Header);

import React from "react";
import { StyledHeader, IconsContainer, LocationContainer } from "./styles";

import Title from "../../components/Title";
import Icon from "../../components/Icon";
import Menu from "../../components/Menu";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <LocationContainer>
          <Icon icon="map-marker-alt" />
          <span>City</span>
        </LocationContainer>
        <Title title="My Store" />
        <IconsContainer>
          <Icon icon="search" link="/" />
          <Icon icon="shopping-cart" link="/" />
        </IconsContainer>
        <Menu />
      </StyledHeader>
    </>
  );
};

export default Header;

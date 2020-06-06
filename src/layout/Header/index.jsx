import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { StyledHeader, IconsContainer, LocationContainer } from "./styles";

import Title from "../../components/Title";
import Icon from "../../components/Icon";
import Menu from "../../components/Menu";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <LocationContainer>
          <Icon icon={faMapMarkerAlt} />
          <span>City</span>
        </LocationContainer>
        <Title title="My Store" />
        <IconsContainer>
          <Icon icon={faSearch} link="/" />
          <Icon icon={faShoppingCart} link="/" />
        </IconsContainer>
        <Menu />
      </StyledHeader>
    </>
  );
};

export default Header;

import React from "react";
import Socials from "../../components/Socials";
import SiteMap from "./SiteMap";

import { StyledFooter, SocialsContainer, Title } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <SocialsContainer>
        <Title>Socials</Title>
        <Socials />
      </SocialsContainer>
      <SiteMap />
    </StyledFooter>
  );
};

export default Footer;

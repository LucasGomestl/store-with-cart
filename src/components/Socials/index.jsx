import React from "react";
import Icon from "../../components/Icon";

import { StyledSocials, SocialsList } from "./styles";

const Socials = () => {
  return (
    <StyledSocials>
      <SocialsList>
        <li>
          <Icon icon={["fab", "facebook-f"]} link="/" />
        </li>
        <li>
          <Icon icon={["fab", "instagram"]} link="/" />
        </li>
        <li>
          <Icon icon={["fab", "whatsapp"]} link="/" />
        </li>
      </SocialsList>
    </StyledSocials>
  );
};

export default Socials;

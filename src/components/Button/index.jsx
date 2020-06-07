import React from "react";
import { StyledButton } from "./styles";
import Icon from "../Icon";

const Button = ({ label, icon }) => {
  return (
    <StyledButton>
      {label} <Icon icon={icon} />
    </StyledButton>
  );
};

export default Button;

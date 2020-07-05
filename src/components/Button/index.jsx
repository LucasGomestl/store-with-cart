import React from "react";
import { StyledButton } from "./styles";
import Icon from "../Icon";

const Button = ({ label, icon, width, color, onClick }) => {
  return (
    <StyledButton width={width} color={color} onClick={onClick}>
      {label} <Icon icon={icon} />
    </StyledButton>
  );
};

export default Button;

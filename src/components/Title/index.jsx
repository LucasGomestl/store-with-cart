import React from "react";
import { StyledTitle } from "./styles";

const Title = ({ title }) => {
  return <StyledTitle data-testid="title">{title}</StyledTitle>;
};

export default Title;

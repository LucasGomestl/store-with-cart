import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledButton } from "../Button/styles";

export const StyledProductCard = styled.article`
  max-width: 100%;
  border: 1px solid white;
  border-radius: 5px;
  padding: 1px;
  transition: all 0.5s;
  margin: 0 10px;
  &:hover {
    border: 1px solid lightgrey;
  }
`;

export const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 250px;
  justify-self: center;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Price = styled.span`
  margin-bottom: 15px;
`;
export const AddToCartButton = styled(StyledButton)`
  border: 2px solid #595cff;
  background-color: white;
  justify-self: center;
  width: 100%;
  color: #595cff;
  transition: all 0.3s;
  &:hover {
    background-color: #595cff;
    border: 2px solid white;
    color: white;
  }
`;

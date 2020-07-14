import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledButton } from "../Button/styles";

export const StyledProductCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  max-width: 100%;
  height: 402px;
  border: 1px solid white;
  padding: 1px;
  border-radius: 5px;
  transition: all 0.5s;
  margin: 0 10px;
  background-color: white;
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
  border: 2px solid #e6be1f;
  background-color: #e6be1f;
  justify-self: center;
  width: 100%;
  color: white;
  transition: all 0.3s;
  &:hover {
    background-color: #f5d555;
    border: 2px solid #f5d555;
  }
`;

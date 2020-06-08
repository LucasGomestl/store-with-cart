import styled from "styled-components";
import { StyledButton } from "../Button/styles";

export const StyledProductCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 350px;
  justify-items: center;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
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

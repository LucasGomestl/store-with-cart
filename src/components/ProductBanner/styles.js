import styled from "styled-components";

export const StyledProductBanner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-column-start: ${({ start }) => (start ? start : "auto")};
  grid-column-end: ${({ end }) => (end ? end : "auto")};
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 190px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  width: 280px;
  margin-left: 5px;
`;

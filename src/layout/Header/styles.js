import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 50px 90px 50px;
  grid-template-rows: repeat(2, min-content);
  justify-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  padding-top: 20px;
  height: 100px;
  background: #d5d5d5;
  width: calc(100% - 16vw);
  padding-right: 20px;
  z-index: 1;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
  position: relative;
`;

export const CartItemsQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: red;
  width: 14px;
  height: 14px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  color: white;
  font-size: 11px;
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
`;

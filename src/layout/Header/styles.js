import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 80px max-content;
  grid-template-rows: min-content;
  align-content: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  width: calc(100% - 16vw);
  height: 65px;
  background: #040f71;
  color: white;
  padding-right: 20px;
  z-index: 2;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 16px;
  position: relative;
`;

export const CartItemsQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: red;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 7.5px;
  top: 8px;
  color: white;
  font-size: 11px;
`;

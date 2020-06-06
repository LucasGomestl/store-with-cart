import styled from "styled-components";

export const Menu = styled.nav`
  grid-column: 1/-1;
  grid-row: 2;
  justify-self: center;
  margin: 35px 0px;
`;

export const MenuItems = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    margin: 0 2.5vw;
  }
`;

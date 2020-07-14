import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 10px;
  align-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  align-self: flex-end;
  background-color: white;
  background-color: #040f71;
  position: absolute;
  bottom: 0px;
`;

export const SocialsContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

export const Credits = styled.span`
  color: white;
`;

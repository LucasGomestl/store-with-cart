import styled from "styled-components";

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const StyledSiteMap = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-content: space-between;
`;

export const MapColumn = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  font-size: 13px;
  > li:hover {
    cursor: pointer;
  }
`;

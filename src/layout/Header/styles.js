import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 50px 90px 50px;
  grid-template-rows: repeat(2, min-content);
  justify-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
`;

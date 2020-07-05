import styled from "styled-components";

export const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 4vw;
  align-items: end;
  justify-content: space-between;
`;

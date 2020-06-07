import styled from "styled-components";

export const StyledProductGallery = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  grid-gap: 20px;
  grid-row-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

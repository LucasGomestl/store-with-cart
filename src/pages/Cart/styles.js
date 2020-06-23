import styled from "styled-components";
import { MainContent } from "../../App/globalStyle";

export const Main = styled(MainContent)`
  display: grid;
  grid-template-columns: minmax(600px, 1000px) minmax(120px, 200px);
  grid-gap: 50px;
  justify-content: center;
  margin: 250px 0;
  @media (max-width: 890px) {
    grid-template-columns: 1fr;
  }
`;

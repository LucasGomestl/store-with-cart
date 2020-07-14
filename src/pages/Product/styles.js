import styled from "styled-components";
import { MainContent } from "../../App/globalStyle";

export const Main = styled(MainContent)`
  margin: 180px 0;
`;

export const StyledProduct = styled.section`
  display: grid;
  grid-template-columns: minmax(300px, 600px) minmax(200px, 330px);
  grid-gap: 5vw;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-left: 40px;
  margin-bottom: 80px;
  @media (max-width: 890px) {
    grid-template-columns: 1fr;
    margin-left: 0px;
  }
`;

export const ProductImage = styled.img`
  max-height: 600px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Price = styled.span`
  font-size: 20px;
  margin-top: 10px;
`;

export const Description = styled.span`
  color: grey;
`;
export const ProductInfo = styled.div`
  width: 100%;
  height: max-content;
  padding-top: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  margin-bottom: 50px;
  @media (max-width: 370px) {
    flex-direction: column;
    align-items: center;
    height: 120px;
    button {
      width: 100%;
    }
  }
`;

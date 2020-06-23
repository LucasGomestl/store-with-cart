import styled from "styled-components";

export const StyledItem = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  &::after {
    content: "";
    width: 95%;
    border: 1px solid lightgrey;
    position: absolute;
    bottom: 0px;
    left: 2.5%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 180px;
  > div {
    overflow: hidden;

    > div {
      display: flex;
      flex-direction: column;

      > span {
        margin-bottom: 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 14px;
      }
    }
  }
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 130px;
  margin-right: 25px;
`;

export const ProductTitle = styled.h2`
  font-size: 13px;
  margin-bottom: 20px;
`;

export const ProductDescription = styled.span`
  color: grey;
`;
export const Price = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const MultipliedPrice = styled.div`
  width: 80px;
  text-align: center;
`;

export const RemoveFromCart = styled.div`
  cursor: pointer;
`;

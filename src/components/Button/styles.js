import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${({ width }) => (width ? width : "max-content")};
  height: 50px;
  padding: 10px;
  background-color: ${({ color }) => (color ? color : "#595cff")};
  border: 0px;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

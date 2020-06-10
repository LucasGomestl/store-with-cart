import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    font-family: 'Nunito Sans', sans-serif;
    text-decoration: none;
    list-style: none;
  }
  body{
  overflow-x: hidden;
  background-color: white
  }
  .App > *{
    padding-left: 8vw;
    padding-right: 8vw;
   }   
  img{
      max-width: 100%
  }   
  a{
      color: black}
  a:hover{
    color: black
  }
`;

export default GlobalStyle;

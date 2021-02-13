import { createGlobalStyle } from "styled-components"
import "@fontsource/amatic-sc"

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto',sans-serif;
    margin: 0;
    padding: 0;    
  }

  *, *::before, *::after{
    box-sizing: border-box;
  } 



  h1{
    font-weight: 400;
    font-size: clamp(3rem, 6vw, 6rem);
    font-family: "Amatic SC";
  }
`

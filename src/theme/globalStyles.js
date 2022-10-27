import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root{
    
    --black : #4C4452;
    --primary: #8C43CF;
    --primary-dim: rgba(140,67,207,0.40);
    --secondary: #FFE9FF;
    --yellow: #FFC552;

    --semibold:600;
    --medium:500; 

    --fs-1: 40px;
    --fs-2: 25px;
    --fs-3: 18px;
    --fs-4: 14px;

    --transition-time: 0.2s;

    /** Tablet */
    @media (max-width: 820px) {
      --fs-1: 35px;
      --fs-2: 21.87px;
      --fs-3: 15.75px;
      --fs-4: 12.25px;
    }

    /** Mobile */
    @media (max-width: 420px) {
      --fs-1: 30px;
      --fs-2: 18.75px;
      --fs-3: 13.5px;
      --fs-4: 10.5px;
    }
     
  }
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
}

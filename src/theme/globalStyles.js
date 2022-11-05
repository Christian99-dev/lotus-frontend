import React from "react";
import { createGlobalStyle } from "styled-components";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  &.scrollbar1{
    &::-webkit-scrollbar {
    background-color: var(--secondary);
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--secondary);
  }
  }

  :root{
    
    --black : #4C4452;
    --primary: #8C43CF;
    --primary-dim: rgba(140,67,207,0.40);
    --primary-filter: invert(37%) sepia(45%) saturate(6819%) hue-rotate(256deg) brightness(86%) contrast(86%);
    --secondary: #FFE9FF;
    --secondary-filter: invert(100%) sepia(18%) saturate(7496%) hue-rotate(188deg) brightness(106%) contrast(106%);
    --yellow: #FFC552;
    --yellow-filter: invert(94%) sepia(39%) saturate(4595%) hue-rotate(314deg) brightness(100%) contrast(101%);

    --semibold:600;
    --medium:500; 

    --fs-1: 40px;
    --fs-2: 25px;
    --fs-3: 18px;
    --fs-4: 14px;

    --transition-time: 0.2s;

    --border: 250px;

    /** Tablet */
    @media (max-width: 820px) {
      --fs-1: 35px;
      --fs-2: 21.87px;
      --fs-3: 15.75px;
      --fs-4: 12.25px;

      --border: 50px;
    }

    /** Mobile */
    @media (max-width: 420px) {
      --fs-1: 30px;
      --fs-2: 18.75px;
      --fs-3: 13.5px;
      --fs-4: 10.5px;

      --border: 20px;
    }
     
  }
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar/>
      {children}
      <Footer/>
    </React.Fragment>
  );
}

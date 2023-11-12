import { createGlobalStyle } from "styled-components";
import Font from "./font";
import Spacing from "./border";
import Color from "./color";
import Components from "./components";

const GlobalStyle = createGlobalStyle`

  ${Font};
  ${Spacing};
  ${Color};
  ${Components};

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  
  :root{
    --transition-time: 0.2s;
  }
  `;

export default GlobalStyle;

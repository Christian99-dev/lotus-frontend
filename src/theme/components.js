import { css } from "styled-components";
import { responsiveVar } from "../utils/responsive";

const Button_Input = css`
  :root{
    ${responsiveVar("button-padding-top", 15)}
    ${responsiveVar("button-padding-bottom", 15)}
    ${responsiveVar("button-padding-left", 40)}
    ${responsiveVar("button-padding-right", 40)}

    ${responsiveVar("input-padding-top", 15)}
    ${responsiveVar("input-padding-bottom", 15)}
    ${responsiveVar("input-padding-left", 40)}
    ${responsiveVar("input-padding-right", 40)}
  }
`;

const Icon = css`
  ${responsiveVar("icon-s", 20)}
  ${responsiveVar("icon-m", 35)}
  ${responsiveVar("icon-l", 50)}
  ${responsiveVar("stars", 25)}
`;

const Topbar = css`
  --topbar-height: 45px;
`;

const Navbar = css`
  --navbar-inner: 35px;
`;

const Carousel = css`
  --carousel-inner: 200px;
  --carousel-inner-2: 5px;
  --carousel-inner-3: 40px;
  --carousel-gap: 10px;
`;

const Kontakt = css`
  ${responsiveVar("contact-inner", 150)}
`;

const Panel = css`
  --pannel-inner: 150px;
`;

const Team = css`
  --team-gap: 5%;
`;

const Components = css`
  :root {
    ${Topbar}
    ${Navbar}
    ${Carousel}
    ${Kontakt}
    ${Panel}
    ${Team}

    ${Button_Input}
    ${Icon}

    --white-component-inner: 200px;
    --white-component-inner-half: 100px;
  }
`;

export default Components;

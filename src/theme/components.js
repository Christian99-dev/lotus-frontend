import { css } from "styled-components";
import { responsiveVar } from "../utils/responsive";

const Button = css`
  ${responsiveVar("button-padding-top", 15)}
  ${responsiveVar("button-padding-bottom", 15)}
  ${responsiveVar("button-padding-left", 40)}
  ${responsiveVar("button-padding-right", 40)}
`;

const Input = css`
  ${responsiveVar("input-padding-top", 15)}
  ${responsiveVar("input-padding-bottom", 15)}
  ${responsiveVar("input-padding-left", 40)}
  ${responsiveVar("input-padding-right", 40)}
`;

const Icon = css`
  ${responsiveVar("icon-s", 20)}
  ${responsiveVar("icon-m", 35)}
  ${responsiveVar("icon-l", 50)}
  ${responsiveVar("stars", 25)}
`;

const Cards = css`
  ${responsiveVar("cards-inner", 50)}
  ${responsiveVar("cards-gap", 40)}
  ${responsiveVar("cards-max-width", 250)}
`;

const Topbar = css`
  ${responsiveVar("topbar-inner-gap", 20)}
  ${responsiveVar("topbar-inner-padding", 10)}
  ${responsiveVar("topbar-gap-right", 50)}
`;

const Navbar = css`
  ${responsiveVar("navbar-inner", 35)}
  ${responsiveVar("navbar-logo-height", 250)}
  ${responsiveVar("navbar-gap", 50)}
`;

const NavMobile = css`
  ${responsiveVar("navmobile-overlay-gap-links", 50)}
  ${responsiveVar("navmobile-overlay-gap-info", 25)}
  ${responsiveVar("navmobile-overlay-gap-info-inner", 5)}
  ${responsiveVar("navmobile-overlay-gap-big", 100)}
  ${responsiveVar("navmobile-overlay-inner", 15)}
  ${responsiveVar("navmobile-overlay-logo-height", 25, "%")}

  ${responsiveVar("navmobile-bar-icon-height", 25)}
  ${responsiveVar("navmobile-bar-padding", 15)}
`;

const Carousel = css`
  ${responsiveVar("carousel-inner", 200)}
  ${responsiveVar("carousel-inner-2", 5)}
  ${responsiveVar("carousel-inner-3", 40)}
  ${responsiveVar("carousel-gap", 10)}

`;

const Kontakt = css`
  ${responsiveVar("contact-inner", 150)}
`;

const Panel = css`
  ${responsiveVar("pannel-inner", 150)}
`;

const Team = css`
  --team-gap: 5%;
`;

const Components = css`
  :root {
    ${Topbar}
    ${Navbar}
    ${NavMobile}
    ${Carousel}
    ${Kontakt}
    ${Panel}
    ${Team}
    ${Cards}

    ${Button}
    ${Input}
    ${Icon}
    ${responsiveVar("white-component-inner", 200)}
    ${responsiveVar("white-component-inner-half", 100)}
  }
`;

export default Components;

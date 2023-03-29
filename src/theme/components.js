import { css } from "styled-components";
import { responsiveVar } from "../utils/responsive";

/** IMPROVMENT
 * Make a funtktion where you can give an array of [{varname, px}]
 * and add them like this, what happens in this file is unter der haube
 * 
 * for the next project only use, 5 10 15 20 40 60
 */
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
  ${responsiveVar("cards-max-width-tablet", 250)}
`;

const Topbar = css`
  ${responsiveVar("topbar-inner-gap", 20)}
  ${responsiveVar("topbar-inner-padding", 10)}
  ${responsiveVar("topbar-gap-right", 50)}
  ${responsiveVar("topbar-mobile-tb-border", 50)} 
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
  ${responsiveVar("contact-maps-height-tablet", 400)}
`;

const Panel = css`
  ${responsiveVar("pannel-inner", 150)}
  ${responsiveVar("pannel-height-mobile", 900)}
`;

const Team = css`
  ${responsiveVar("team-gap", 20)}
  ${responsiveVar("team-xs-space", 20)}
  ${responsiveVar("team-s-space", 30)}
  ${responsiveVar("team-m-space", 50)}
  ${responsiveVar("team-mobile-height", 500)}
  ${responsiveVar("team-mobile-inner-padding", 30)}
  ${responsiveVar("team-mobile-handle-width", 80)}
  ${responsiveVar("team-person-max-width-tablet", 400)}
`;

const Silder = css`
  ${responsiveVar("slider-pagination-height", 40)}
  ${responsiveVar("slider-pagination-bullet-height", 10)}
`;

const Testimonial = css`
  ${responsiveVar("testimonial-img-height", 200)}
  ${responsiveVar("testimonial-stars-inner", 30)}
  ${responsiveVar("testimonial-text-bottom", 40)}
  ${responsiveVar("testimonial-stars-gap", 20)}
`;

const Footer = css`
  ${responsiveVar("footer-inner-s", 10)}
  ${responsiveVar("footer-inner-m", 20)}
${responsiveVar("footer-inner-l", 30)}
${responsiveVar("footer-tb-border", 60)}
`;

const Loader = css`
  ${responsiveVar("loader-width", 200)}
`;

const Popup = css`
  ${responsiveVar("popup-border", 10, "%")}
  ${responsiveVar("popup-inner", 5, "%")}
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
    ${Silder}
    ${Testimonial}
    ${Footer}
    ${Loader}
    ${Popup}

    ${Button}
    ${Input}
    ${Icon}
    ${responsiveVar("white-component-inner", 200)}
    ${responsiveVar("white-component-inner-half", 100)}
  }
`;

export default Components;

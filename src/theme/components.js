import { css } from "styled-components";
import { device } from "./breakpoints";

const Button_Input = css`
  --button-padding: 15px 40px;
  --input-padding: 15px 40px;

  @media ${device.desktopPlus} {
    --button-padding: 18px 48px;
    --input-padding: 18px 48px;
  }

  @media ${device.laptop} {
    --button-padding: 12px 32px;
    --input-padding: 12px 32px;
  }

  @media ${device.tablet} {
    --button-padding: 9.6px 25.6px;
    --input-padding: 9.6px 25.6px;
  }

  @media ${device.mobile} {
    --button-padding: 8.31px 20.48px;
    --input-padding: 8.31px 20.48px;
  }
`;

const Icon = css`
  --icon-s: 20px;
  --icon-m: 35px;
  --icon-l: 50px;

  --stars: 25px;

  @media ${device.desktopPlus} {
    --icon-s: 24px;
    --icon-m: 42px;
    --icon-l: 60px;

    --stars: 30px;
  }

  @media ${device.laptop} {
    --icon-s: 16px;
    --icon-m: 28px;
    --icon-l: 40px;

    --stars: 20px;
  }

  @media ${device.tablet} {
    --icon-s: 12.8px;
    --icon-m: 29.4px;
    --icon-l: 32px;

    --stars: 16px;
  }

  @media ${device.mobile} {
    --icon-s: 10.24;
    --icon-m: 23.52;
    --icon-l: 25.6;

    --stars: 12.8px;
  }
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
  --contact-inner: 150px;
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

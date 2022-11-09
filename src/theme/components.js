import { css } from "styled-components";

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

const Components = css`
  :root {
    ${Topbar}
    ${Navbar}
    ${Carousel}
    ${Kontakt}
    ${Panel}

    --white-component-inner: 150px;
    --white-component-inner-half: 75px;
  }
`;

export default Components;

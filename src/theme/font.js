import { css } from "styled-components";
import { device } from "./breakpoints";

export const fontbase = {
  mobile: 12,
  tablet: 13,
  laptop: 14,
  desktop: 16,
  desktopPlus: 18,
  scale: 1.333,
};

const Font = css`
  body {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
  }

  :root {
    --semibold: 600;
    --medium: 500;

    --fs-1: 37.9px;
    --fs-2: 21.33px;
    --fs-3: 16px;
    --fs-4: 12px;
    @media ${device.desktopPlus} {
      --fs-1: 42.63px;
      --fs-2: 23.99px;
      --fs-3: 18px;
      --fs-4: 13.5px;
    }
    @media ${device.laptop} {
      --fs-1: 33.16px;
    --fs-2: 18.66px;
    --fs-3: 14.00px;
    --fs-4: 12px;
    }
    @media ${device.tablet} {
      --fs-1: 30.79px;
    --fs-2: 17.33px;
    --fs-3: 13.00px;
    --fs-4: 12px;
    }
    @media ${device.mobile} {
      --fs-1: 28.42px;
    --fs-2: 16.00px;
    --fs-3: 12.00px;
    --fs-4: 12px;
    }
  }
`;

export default Font;

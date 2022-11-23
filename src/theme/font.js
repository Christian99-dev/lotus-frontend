import { css } from "styled-components";
import { device } from "./breakpoints";
import { scaleUp } from "../utils/utils";

export const fontbase = {
  mobile: 12,
  tablet: 13,
  laptop: 14,
  desktop: 16,
  desktopPlus: 20,
  scale: 1.333,
};

/**
 * base = 16
 * scale = 1.25
 *
 * size =   -1  => return "10.24px"
 * size =   0   => return "12.80px"
 * size =   1   => return "16px"    BASE
 * size =   2   => return "20px"
 * size =   3   => return "25px"
 */
const CreateFontSize = (base, scale, size) => {
  let out = base;
  if (size > 0) {
    for (let i = 1; i < size; i++) {
      out += scaleUp(scale, out);
    }
  } else {
    size = size * -1 + 1;
    for (let i = 0; i < size; i++) {
      out += scaleUp(1 / scale, out);
    }
  }

  return out.toFixed(2) + "px";
};

const CreateTypeScale = (base, scale) => {
  return css`
    --fs-1: ${CreateFontSize(base, scale, 4)};
    --fs-2: ${CreateFontSize(base, scale, 2)};
    --fs-3: ${CreateFontSize(base, scale, 1)};
    --fs-4: ${CreateFontSize(base, scale, 0)};
  `;
};

const FontSizeSheet = (scale, desktopPlus, desktop, laptop, tablet, mobile) => {
  return css`
    :root {
      ${CreateTypeScale(desktop, scale)}
      @media ${device.desktopPlus} {
        ${CreateTypeScale(desktopPlus, scale)}
      }
      @media ${device.laptop} {
        ${CreateTypeScale(laptop, scale)}
      }
      @media ${device.tablet} {
        ${CreateTypeScale(tablet, scale)}
      }
      @media ${device.mobile} {
        ${CreateTypeScale(mobile, scale)}
      }
    }
  `;
};

const Font = css`
  body {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
  }

  :root {
    --semibold: 600;
    --medium: 500;
    ${FontSizeSheet(
      fontbase.scale,
      fontbase.desktopPlus,
      fontbase.desktop,
      fontbase.laptop,
      fontbase.tablet,
      fontbase.mobile
    )}
  }
`;

export default Font;

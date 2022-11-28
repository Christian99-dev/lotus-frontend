import { css } from "styled-components";
import { device } from "../theme/breakpoints";
import { fontbase } from "../theme/font";
import { addApercentToB, xPercentFromAtoB } from "./utils";

export const responsiveVar = (varname, base, end = "px") => {
  const toDesktopPlus = xPercentFromAtoB(
    fontbase.desktop,
    fontbase.desktopPlus
  ).toFixed(2);
  const toLaptop = xPercentFromAtoB(fontbase.desktop, fontbase.laptop).toFixed(
    2
  );
  const toTablet = xPercentFromAtoB(fontbase.laptop, fontbase.tablet).toFixed(
    2
  );
  const toMobile = xPercentFromAtoB(fontbase.tablet, fontbase.mobile).toFixed(
    2
  );

  const DesktopPlusValue = addApercentToB(toDesktopPlus, base).toFixed(2);
  const LaptopValue = addApercentToB(toLaptop, base, true).toFixed(2);
  const TabletValue = addApercentToB(toTablet, LaptopValue, true).toFixed(2);
  const MobileValue = addApercentToB(toMobile, TabletValue, true).toFixed(2);

  return css`

    ${"--" + varname + " : " + base + end + ";"}
    @media ${device.desktopPlus} {
      ${"--" + varname + " : " + DesktopPlusValue + end + ";"}
    }

    @media ${device.laptop} {
      ${"--" + varname + " : " + LaptopValue + end + ";"}
    }

    @media ${device.tablet} {
      ${"--" + varname + " : " + TabletValue + end + ";"}
    }

    @media ${device.mobile} {
      ${"--" + varname + " : " + MobileValue + end + ";"}
    } ;
  `;
};

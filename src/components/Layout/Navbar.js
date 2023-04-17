import React from "react";
import { size } from "../../theme/breakpoints";
import useWindowDimensions from "../../utils/useWindowDimensions";
import NavbarDekstop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = ({fetchData, fetchNavigationData}) => {
  return useWindowDimensions().width > size.tablet ? (
    <NavbarDekstop fetchData={fetchData} fetchNavigationData={fetchNavigationData} />
  ) : (
    <NavbarMobile fetchData={fetchData} fetchNavigationData={fetchNavigationData} />
  );
};
export default Navbar;

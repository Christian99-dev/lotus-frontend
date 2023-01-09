import React from "react";
import { size } from "../../theme/breakpoints";
import useWindowDimensions from "../../utils/useWindowDimensions";
import NavbarDekstop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = ({fetchData}) => {
  return useWindowDimensions().width > size.tablet ? (
    <NavbarDekstop fetchData={fetchData} />
  ) : (
    <NavbarMobile fetchData={fetchData} />
  );
};
export default Navbar;

import React from "react";
import { size } from "../../theme/breakpoints";
import useWindowDimensions from "../../utils/useWindowDimensions";
import NavbarDekstop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = ({fetchData, fetchNavigationData, fetchUnternehmenData}) => {
  return useWindowDimensions().width > size.tablet ? (
    <NavbarDekstop fetchData={fetchData} fetchNavigationData={fetchNavigationData} fetchUnternehmenData={fetchUnternehmenData} />
  ) : (
    <NavbarMobile fetchData={fetchData} fetchNavigationData={fetchNavigationData} fetchUnternehmenData={fetchUnternehmenData}  />
  );
};
export default Navbar;

import React from "react";
import { size } from "../../theme/breakpoints";
import useWindowDimensions from "../../utils/useWindowDimensions";
import NavbarDekstop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = ({fetchData, fetchDataWelcome, fetchDataUnternehmen}) => {
  return useWindowDimensions().width > size.tablet ? (
    <NavbarDekstop fetchData={fetchData} fetchDataWelcome={fetchDataWelcome} fetchDataUnternehmen={fetchDataUnternehmen} />
  ) : (
    <NavbarMobile fetchData={fetchData} fetchDataUnternehmen={fetchDataUnternehmen} />
  );
};
export default Navbar;

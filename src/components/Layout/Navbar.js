import React from "react";
import { size } from "../../theme/breakpoints";
import useWindowDimensions from "../../utils/useWindowDimensions";
import NavbarDekstop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => useWindowDimensions().width > size.tablet ? <NavbarDekstop /> : <NavbarMobile />
export default Navbar;


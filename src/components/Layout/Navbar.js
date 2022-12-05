import React from "react";
import styled from "styled-components";
import { device } from "../../theme/breakpoints";
import NavbarDekstop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarDekstop className="desktop" />
      <NavbarMobile className="mobile" />
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  .mobile {
    display: none;
  }
  @media ${device.tablet} {
    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import Icon from "../Global/Icon";
import NavButton from "../Global/NavButton";

const NavbarMobile = ({ ...props }) => {
  return (
    <NavbarWrapper {...props}>
      <Icon name="close" height="icon-l" className="icon" />
      <div className="nav">
        <NavButton text="home" to="cards" className="navbutton" />
        <NavButton text="home" to="cards" className="navbutton" />
        <NavButton text="home" to="cards" className="navbutton" />
      </div>
    </NavbarWrapper>
  );
};

export default NavbarMobile;

const NavbarWrapper = styled.div`
  z-index: 999999;
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100vh;
  padding: var(--border);
  text-align: center;
  background-color: var(--primary);

  .nav {
    display: flex;
    flex-direction: column;
    gap: 50px;
    .navbutton {
      color: var(--secondary);
      font-size: var(--fs-2);
    }
  }
`;

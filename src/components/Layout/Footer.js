import React from "react";
import styled from "styled-components";
import Icon from "../Global/Icon";
import SpaceWrapper from "../../utils/SpaceWrapper";
export default function Footer() {
  return (
    <FooterWrapper
      spacing={{ top: 50, bottom: 50, left: "border", right: "border" }}
    >
      <div className="col">
        <div className="head">Social Media</div>
        <div className="row icons">
          <Icon name="facebook" height="icon-s" />
          <Icon name="instagram" height="icon-s" />
          <Icon name="whatsapp" height="icon-s" />
        </div>
      </div>

      <div className="col">
        <div className="head"> Kontakt</div>
        <div className="row icon">
          <Icon name="mail" height="icon-s" />
          max.mustermann@gmail.de
        </div>
        <div className="row icon">
          <Icon name="phone" height="icon-s" />
          01237 / 32874
        </div>
      </div>

      <div className="col">
        <div className="head">Adresse</div>
        <div className="row">Neue Roßstr. 15</div>
        <div className="row">66128 Saarbrücken</div>
      </div>

      <div className="col">
        <div className="head"> Rechtliches</div>
        <div className="row">Impressum</div>
        <div className="row">AGB</div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled(SpaceWrapper)`
  color: var(--secondary);
  background-color: var(--primary);
  display: flex;
  justify-content: space-between;

  .head {
    font-size: var(--fs-3);
    font-weight: var(--semibold);
    margin-bottom: 20px;
  }

  .row {
    &.icons {
      display: flex;
      justify-content: space-between;
    }

    &.icon {
      display: flex;
      gap: 10px;
    }
    font-size: var(--fs-4);
    font-weight: var(--medium);
    margin-top: 10px;
  }
`;

import React from "react";
import styled from "styled-components";
import Icon from "../Global/Icon";
export default function Footer() {
  return (
    <FooterWrapper>
      <div className="col">
        <div className="head">Social Media</div>
        <div className="row icons">
          <Icon name="facebook" height="20px" />
          <Icon name="instagram" height="20px" />
          <Icon name="whatsapp" height="20px" />
        </div>
      </div>

      <div className="col">
        <div className="head"> Kontakt</div>
        <div className="row icon">
          <Icon name="mail" height="20px" />
          max.mustermann@gmail.de
        </div>
        <div className="row icon">
          <Icon name="phone" height="20px" />
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

const FooterWrapper = styled.div`
  color: var(--secondary);
  background-color: var(--primary);
  padding: 50px var(--border);

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

    &.icon{
      display: flex;
      gap: 10px;
    }
    font-size: var(--fs-4);
    font-weight: var(--medium);
    margin-top: 10px;
  }
`;

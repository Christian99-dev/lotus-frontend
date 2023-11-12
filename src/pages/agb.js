import React from "react";
import Footer from "../components/Layout/Footer";
import Layout from "../theme/layout";
import Title from "../components/Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import { device } from "../theme/breakpoints";
import Button from "../components/Global/Button";
import { Parser } from "../utils/utils";
import { graphql, useStaticQuery } from "gatsby";
import { SeoHeader } from "../components/Global/SeoHeader";

const AgbPage = () => {
  const { agb, ueberschrift } = useStaticQuery(graphql`
    {
      strapiAgb {
        agb: AGB
        ueberschrift: Ueberschrift
      }
    }
  `).strapiAgb;

  return (
    <Layout>
      <AgbPageWrapper>
        <SpaceWrapper
          spacing={{
            left: "border",
            right: "border",
            top: "white-component-inner-half",
          }}
        >
          <Title
            className="title"
            text={ueberschrift}
            color="purple"
            spacing={{ bottom: "white-component-inner-half" }}
          />
          <SpaceWrapper
            className="button-container"
            spacing={{
              bottom: "white-component-inner-half",
              top: "white-component-inner-half",
            }}
          >
            <Button className="button" text="Zurück zur Homepage" link="../" />
          </SpaceWrapper>

          <div className="main-text">{Parser(agb)}</div>
          <SpaceWrapper
            className="button-container"
            spacing={{
              bottom: "white-component-inner-half",
              top: "white-component-inner-half",
            }}
          >
            <Button className="button" text="Zurück zur Homepage" link="../" />
          </SpaceWrapper>
        </SpaceWrapper>
        <Footer />
      </AgbPageWrapper>
    </Layout>
  );
};

export default AgbPage;

const AgbPageWrapper = styled.div`
  

  .main-text {
    all: revert;
    font-size: var(--fs-3);
  }

  .button-container {
    display: flex;
  }

  @media ${device.tablet} {
    text-align: center;
    .button-container {
      justify-content: center;
    }
  }
`;

export const Head = () => <SeoHeader endung="agb" />;

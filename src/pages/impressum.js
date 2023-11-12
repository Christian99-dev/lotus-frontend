import React from "react";
import Footer from "../components/Layout/Footer";
import Layout from "../theme/layout";
import Title from "../components/Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import { device } from "../theme/breakpoints";
import Button from "../components/Global/Button";
import { Parser } from "../utils/utils";
import { SeoHeader } from "../components/Global/SeoHeader";
import { graphql, useStaticQuery } from "gatsby";

const ImpressumPage = () => {
  const { datenschutzerklaerung, impressum, ueberschrift } =
    useStaticQuery(graphql`
      {
        strapiRechtliches {
          datenschutzerklaerung: Datenschutzerklaerung
          impressum: Impressum
          ueberschrift: Ueberschrift
        }
      }
    `).strapiRechtliches;

  return (
    <Layout>
      <ImpressumPageWrapper>
        {/* <Top /> */}
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

          <div className="main-text">
            {Parser(datenschutzerklaerung + impressum)}
          </div>
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
      </ImpressumPageWrapper>
    </Layout>
  );
};

export default ImpressumPage;

const ImpressumPageWrapper = styled.div`
  .main-text {
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

export const Head = () => <SeoHeader endung="impressumUndDatenschutz" />;

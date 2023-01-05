import React from "react";
import Footer from "../components/Layout/Footer";
import { Top } from "../components/Layout/NavbarDesktop";
import Layout from "../theme/layout";
import Title from "../components/Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import { device } from "../theme/breakpoints";
import Button from "../components/Global/Button";

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundPageWrapper>
        <Top />
        <SpaceWrapper
          spacing={{
            left: "border",
            right: "border",
            top: "white-component-inner-half",
            bottom: "white-component-inner-half",
          }}
        >
          <Title
            className="title"
            text="Seite existiert nicht."
            color="purple"
            spacing={{ bottom: "white-component-inner-half" }}
          />
          <SpaceWrapper
            className="button-container"
            spacing={{
              top: "white-component-inner-half",
            }}
          >
            <Button className="button" text="Zurück zur Homepage" link="../" />
          </SpaceWrapper>
        </SpaceWrapper>
        <div className="footer-container">
          <Footer />
        </div>
      </NotFoundPageWrapper>
    </Layout>
  );
};

export default NotFoundPage;

const NotFoundPageWrapper = styled.div`
  .text {
    font-size: var(--fs-3);
  }

  .button-container {
    display: flex;
  }

  .footer-container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media ${device.tablet} {
    text-align: center;
    .button-container {
      justify-content: center;
    }

    .footer-container {
      position: unset;
    }
  }
`;

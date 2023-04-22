import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import { Top } from "../components/Layout/NavbarDesktop";
import Layout from "../theme/layout";
import Title from "../components/Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import { device } from "../theme/breakpoints";
import Button from "../components/Global/Button";
import {
  getFooterModified,
  getHeadModified,
  getPageNotFound,
  getUnternehmen
} from "../_api/axios";
import Loader from "../components/Global/Loader";

const NotFoundPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPageNotFound().then((res) => {
      setData(res.data.attributes);
    });
  }, []);

  return (
    <Layout fetchData={getUnternehmen}>
      <NotFoundPageWrapper>
        <Top fetchData={getHeadModified} fetchUnternehmenData={getUnternehmen} />
        <SpaceWrapper
          spacing={{
            left: "border",
            right: "border",
            top: "white-component-inner-half",
            bottom: "white-component-inner-half",
          }}
        >
          {data ? (
            <Title
              className="title"
              text={data.text}
              color="purple"
              spacing={{ bottom: "white-component-inner-half" }}
            />
          ) : (
            <Loader title color="primary" />
          )}
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
          <Footer fetchData={getFooterModified} fetchUnternehmenData={getUnternehmen} />
        </div>
      </NotFoundPageWrapper>
    </Layout>
  );
};

export default NotFoundPage;

const NotFoundPageWrapper = styled.div`

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

import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import { Top } from "../components/Layout/NavbarDesktop";
import Layout from "../theme/layout";
import Title from "../components/Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import { device } from "../theme/breakpoints";
import Button from "../components/Global/Button";
import { getFooterModified, getHeadModified, getImpressum } from "../api/axios";
import Loader from "../components/Global/Loader";

const ImpressumPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getImpressum().then((res) => {
      setData(res.data.attributes);
    });
  }, []);

  return (
    <Layout>
      <ImpressumPageWrapper>
        <Top fetchData={getHeadModified} />
        <SpaceWrapper
          spacing={{
            left: "border",
            right: "border",
            top: "white-component-inner-half",
          }}
        >
          {data ? (
            <Title
              className="title"
              text={data.ueberschrift}
              color="purple"
              spacing={{ bottom: "white-component-inner-half" }}
            />
          ) : (
            <Loader
              title
              color="primary"
              spacing={{ bottom: "white-component-inner-half" }}
            />
          )}

          <div className="text">{data ? data.text : <Loader dots />}</div>
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
        <Footer fetchData={getFooterModified} />
      </ImpressumPageWrapper>
    </Layout>
  );
};

export default ImpressumPage;

const ImpressumPageWrapper = styled.div`
  .text {
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

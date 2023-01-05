import React from "react";
import Footer from "../components/Layout/Footer";
import { Top } from "../components/Layout/NavbarDesktop";
import Layout from "../theme/layout";
import Title from "../components/Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import { device } from "../theme/breakpoints";
import Button from "../components/Global/Button";

const ImpressumPage = () => {
  return (
    <Layout>
      <ImpressumPageWrapper>
        <Top />
        <SpaceWrapper
          spacing={{
            left: "border",
            right: "border",
            top: "white-component-inner-half",
          }}
        >
          <Title
            className="title"
            text="Impressum"
            color="purple"
            spacing={{ bottom: "white-component-inner-half" }}
          />

          <div className="text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, At accusam aliquyam diam diam dolore
            dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt
            justo labore Stet clita ea et gubergren, kasd magna no rebum.
            sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur
          </div>
          <SpaceWrapper
            className="button-container"
            spacing={{
              bottom: "white-component-inner-half",
              top: "white-component-inner-half",
            }}
          >
            <Button
              className="button"
              text="Zurück zur Homepage"
              link="../"
            />
          </SpaceWrapper>
        </SpaceWrapper>
        <Footer />
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

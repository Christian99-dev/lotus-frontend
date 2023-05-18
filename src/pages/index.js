import * as React from "react";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";
import Kontakt from "../components/Kontakt";
import Panel from "../components/Panel";
import Team from "../components/Team";
import Layout from "../theme/layout";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import {
  getArbeitModified,
  getFooterModified,
  getHeadModified,
  getKontaktModified,
  getLeistungen,
  getRezensionen,
  getTeam,
  getWilkommenModified,
  getUnternehmen,
  getNavigation
} from "../_api/axios";
import Cookie from "../components/Global/Cookie";

const IndexPage = () => {
  return (
    <Layout fetchData={getUnternehmen} >
      <Cookie/>
      <Navbar fetchData={getHeadModified} fetchNavigationData={getNavigation} fetchUnternehmenData={getUnternehmen} />
      <Carousel fetchData={getWilkommenModified} fetchUnternehmenData={getUnternehmen}/>
      <Cards fetchData={getLeistungen} />
      <Panel fetchData={getArbeitModified} />
      <Team fetchData={getTeam} />
      <Kontakt fetchData={getKontaktModified} fetchUnternehmenData={getUnternehmen} />
      <Testimonial fetchData={getRezensionen} />
      <Footer fetchData={getFooterModified} fetchUnternehmenData={getUnternehmen} />
    </Layout>
  );
};

export default IndexPage;

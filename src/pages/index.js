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
  getWilkommen,
} from "../_api/axios";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar fetchData={getHeadModified} />
      <Carousel fetchData={getWilkommen} />
      <Cards fetchData={getLeistungen} />
      <Panel fetchData={getArbeitModified} />
      <Team fetchData={getTeam} />
      <Kontakt fetchData={getKontaktModified} />
      <Testimonial fetchData={getRezensionen} />
      <Footer fetchData={getFooterModified} />
    </Layout>
  );
};

export default IndexPage;

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
  getArbeit,
  getFooter,
  getHead,
  getKontakt,
  getLeistungen,
  getRezensionen,
  getTeam,
  getUnternehmen,
  getWilkommen,
} from "../api/axios";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar fetchData={getHead} fetchDataWelcome={getWilkommen} fetchDataUnternehmen={getUnternehmen} />
      <Carousel fetchData={getWilkommen} />
      <Cards fetchData={getLeistungen} />
      <Panel fetchData={getArbeit} />
      {/* <Team fetchData={getTeam} /> */}
      {/* <Kontakt fetchData={getKontakt} /> */}
      {/* <Testimonial fetchData={getRezensionen} /> */}
      {/* <Footer fetchData={getFooter} /> */}
    </Layout>
  );
};

export default IndexPage;

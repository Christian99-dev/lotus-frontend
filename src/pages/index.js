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
import { getWelcome } from "../api/axios";

const IndexPage = () => {

  getWelcome().then(res => {
    console.log(res.data.attributes.subtext);
  })

  return (
    <Layout>
      <Navbar/>
      <Carousel />
      <Cards />
      <Panel />
      <Team />
      <Kontakt />
      <Testimonial />
      <Footer/>
    </Layout>
  );
};

export default IndexPage;

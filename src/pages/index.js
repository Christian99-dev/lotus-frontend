import * as React from "react";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";
import Kontakt from "../components/Kontakt";
import Panel from "../components/Panel";
import Team from "../components/Team";
import Layout from "../theme/layout";

const IndexPage = () => {  
  return (
    <Layout>
      {/* <ResponsiveDebug/> */}
      {/* <FontsDebug/> */}
      <Carousel id="carousel"/>
      <Cards id="cards"/>
      <Panel id="panel"/>
      <Team id="team"/>
      <Kontakt id="contact"/>
      <Testimonial id="testimonial"/>
    </Layout>
  );
};

export default IndexPage;

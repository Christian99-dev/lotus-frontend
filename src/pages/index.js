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
      <Carousel/>
      <Cards/>
      <Panel/>
      <Team/>
      <Kontakt/>
      <Testimonial/>
    </Layout>
  );
};

export default IndexPage;

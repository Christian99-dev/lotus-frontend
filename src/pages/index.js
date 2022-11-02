import * as React from "react";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import Navbar from "../components/Global/Navbar";
import Panel from "../components/Panel";
import Team from "../components/Team";
import Layout from "../theme/globalStyles";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar/>
      <Carousel/>
      <Cards/>
      <Panel/>
      <Team/>
    </Layout>
  );
};

export default IndexPage;

import * as React from "react";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import Navbar from "../components/Global/Navbar";
import Layout from "../theme/globalStyles";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar/>
      <Carousel/>
      <Cards/>
    </Layout>
  );
};

export default IndexPage;

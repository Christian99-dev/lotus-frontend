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
import { SeoHeader } from "../components/Global/SeoHeader";

const IndexPage = () => {
  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />
        <Cards />
        <Panel />
        <Team />
      </main>
      <Kontakt />
      <Testimonial />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SeoHeader endung="index" />;

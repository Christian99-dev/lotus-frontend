import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import GlobalStyle from "./global";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import { GlobalStateProvider } from "../utils/globalState";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStateProvider>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
            integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
            crossorigin=""
          />
          <script src={withPrefix("/script.js")} type="text/javascript" />
        </Helmet>
        <GlobalStyle />
        <Navbar />
        {children}
        <Footer />
      </GlobalStateProvider>
    </>
  );
}

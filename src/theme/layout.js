import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import GlobalStyle from "./global";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import { GlobalStateProvider } from "../utils/globalState";
import styled from "styled-components";

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
          {/* https://stackoverflow.com/questions/44679794/position-fixed-on-chrome-mobile-causing-element-to-move-on-scroll-up-down */}
          <meta
            name="viewport"
            content="height=device-height, 
                      width=device-width, initial-scale=1.0, 
                      minimum-scale=1.0, maximum-scale=1.0, 
                      user-scalable=no"
            // target-densitydpi=device-dpi
          />
        </Helmet>
        <GlobalStyle />
        <Navbar />
        {children}
        <Footer />
      </GlobalStateProvider>
    </>
  );
}

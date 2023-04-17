import React, { useEffect, useState } from "react";
import GlobalStyle from "./global";
import { Helmet } from "react-helmet";
import { GlobalStateProvider } from "../utils/globalState";
import { createImgUrl } from "../utils/utils";

export default function Layout({ children, fetchData }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data.attributes);
      console.log(res.data.attributes);
    });
  }, [fetchData]);
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
          <meta
            name="viewport"
            content="height=device-height, 
            width=device-width, initial-scale=1.0, 
            minimum-scale=1.0, maximum-scale=1.0, 
            user-scalable=no"
            // target-densitydpi=device-dpi
          />
          {data && <title>{data.name}</title>}
          {data && <link rel="icon" href={createImgUrl(data.favicon.data.attributes.url)} />}

          {/* <script src={withPrefix("/script.js")} type="text/javascript" /> */}
          {/* https://stackoverflow.com/questions/44679794/position-fixed-on-chrome-mobile-causing-element-to-move-on-scroll-up-down */}
          {/* <meta name="icon" href="../assets/logo.png" /> */}

        </Helmet>
        <GlobalStyle />
        {children}
      </GlobalStateProvider>
    </>
  );
}

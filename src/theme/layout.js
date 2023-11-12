import React from "react";
import GlobalStyle from "./global";
import { Helmet } from "react-helmet";
import { GlobalStateProvider } from "../utils/globalState";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStateProvider>
        <Helmet>
          <script
            id="usercentrics-cmp"
            async
            data-eu-mode="true"
            data-settings-id="kQjO-dCNKLdpsJ"
            src="https://app.eu.usercentrics.eu/browser-ui/latest/loader.js"
          ></script>
          <script type="application/javascript" src="https://sdp.eu.usercentrics.eu/latest/uc-block.bundle.js"></script>
        </Helmet>
        <GlobalStyle />
        {children}
      </GlobalStateProvider>
    </>
  );
}

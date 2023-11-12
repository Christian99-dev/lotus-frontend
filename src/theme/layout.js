import React from "react";
import GlobalStyle from "./global";
import { GlobalStateProvider } from "../utils/globalState";

export default function Layout({ children }) {
  return (
    <GlobalStateProvider>
      <GlobalStyle />
      {children}
    </GlobalStateProvider>
  );
}

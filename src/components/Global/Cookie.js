import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonStyle={{
        paddingTop: "var(--button-padding-top)",
        paddingBottom: "var(--button-padding-bottom)",
        paddingLeft: "var(--button-padding-left)",
        paddingRight: "var(--button-padding-right)",
        fontSize: "var(--fs-3)",
        fontWeight: "var(--semibold)",
        borderRadius: "10px",
        border: "none",
        width: "100%",
        background: "var(--secondary)",
        color: "var(--primary)",
        margin:"0"
      }}
      style={{
        paddingTop: "var(--button-padding-top)",
        paddingBottom: "var(--button-padding-bottom)",
        paddingLeft: "var(--border)",
        paddingRight: "var(--border)",
        fontSize: "var(--fs-4)",
        background: "var(--primary-hard-transparent)",
        right: "0",
        left: "0",
        bottom: "0",
        width: "unset",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "stretch"
      }}
      contentStyle={{
        flex: "unset",
        marginTop:0,
        marginLeft:0,
        marginRight:0
      }} 
      buttonText="Zustimmen"
    >
      Wir und ausgewählte Dritte setzen Cookies oder ähnliche Technologien für
      technische Zwecke ein und - mit Ihrer Einwilligung - für andere Zwecke,
      wie in der Cookie-Richtlinie beschrieben. Im Fall der Ablehnung könnten
      bestimmte Funktionen nicht verfügbar sein. Ihre Einwilligung können Sie
      jederzeit erteilen, verweigern oder widerrufen. Verwenden Sie den
      „Zustimmen“-Button, um dem Einsatz solcher Technologien zuzustimmen.
    </CookieConsent>
  );
};

export default CookieBanner;

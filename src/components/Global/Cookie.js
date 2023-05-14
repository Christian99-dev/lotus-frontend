import React from "react";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";

const CookieBanner = () => {
  return (
    <CookieConsent
      enableDeclineButton
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
        margin: "0",
      }}
      declineButtonStyle={{
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
        margin: "0",
        marginBottom: "10px",
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
        alignItems: "stretch",
      }}
      contentStyle={{
        flex: "unset",
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
      }}
      buttonText="Zustimmen"
      // declineButtonText="Ablehnen"
      onDecline={() => {
      }}
    >
      Diese Webseite verwendet Cookies und ähnliche Technologien, um Ihre
      Browser-Erfahrung zu verbessern und zu personalisieren sowie um Analysen
      und Messungen über unsere Besucher zu sammeln. Wir nutzen Cookies auch, um
      sicherzustellen, dass unsere Webseite sicher und effektiv funktioniert.
      Sie haben das Recht, jederzeit Ihre Cookie-Einstellungen zu ändern oder
      Ihre Einwilligung zu widerrufen. Bitte beachten Sie, dass einige Teile der
      Webseite möglicherweise nicht richtig funktionieren, wenn Sie bestimmte
      Cookies deaktivieren. Durch Klicken auf "Zustimmen" stimmen Sie der
      Verwendung von Cookies zu, wie in unserer Datenschutzerklärung
      beschrieben.
    </CookieConsent>
  );
};

export default CookieBanner;

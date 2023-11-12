// import ReactHtmlParser from "react-html-Parser"
import React from "react";
export const scaleUp = (percent, from) => from * percent - from;
export const xPercentFromAtoB = (a, b) => Math.abs((b / a - 1) * 100);
export const addApercentToB = (a, b, minus) => {
  b = Number(b);
  return !minus
    ? b + (b + scaleUp((a + 100) / 100, b))
    : b - (b + scaleUp((a + 100) / 100, b));
};
export const offset = (el) => {
  if (window === "undefined") return 0;
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};

export const createImgUrl = (imgUrl) => {
  return process.env.GATSBY_API_SERVER_URL + imgUrl;
};

export const Parser = (text, tag = "div") => {
  const Tag = tag || "div"; // Verwende 'div' als Standardwert, falls kein Tag angegeben ist
  return <Tag dangerouslySetInnerHTML={{ __html: text }} />;
};

export const getNavigationNameFromKey = (navigationData, key) => {
  // switch case(key) case "1" return navigationData[First]
  // switch case(key) case "2" return navigationData[Secound]
};

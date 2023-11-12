import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const Maps = () => {
  const { googleMapsLink } = useStaticQuery(graphql`
    {
      strapiKontakt {
        googleMapsLink: GoogleMapsLink
      }
    }
  `).strapiKontakt;

  return (
    <MapsWrapper
      src={googleMapsLink}
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></MapsWrapper>
  );
};

export default Maps;

const MapsWrapper = styled.iframe`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  border: none;
`;

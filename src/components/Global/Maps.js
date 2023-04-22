import React from "react";
import styled from "styled-components";

const Maps = () => {
  return (
    <MapsWrapper
      src={process.env.GATSBY_GOOGLE_MAPS_LINK}
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

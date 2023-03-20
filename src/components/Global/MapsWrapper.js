import React, { lazy, Suspense } from "react";

const MapsWrapper = ({location, speechBubbleText}) => {
  if (typeof window !== "undefined") {
    const Map = lazy(() => import("./Maps"));
    return (
      <Suspense>
        <Map location={location} speechBubbleText={speechBubbleText} />
      </Suspense>
    );
  }
};

export default MapsWrapper;

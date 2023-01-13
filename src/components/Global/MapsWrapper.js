import React, { lazy, Suspense } from "react";

const MapsWrapper = ({location}) => {
  if (typeof window !== "undefined") {
    const Map = lazy(() => import("./Maps"));
    return (
      <Suspense>
        <Map location={location} />
      </Suspense>
    );
  }
};

export default MapsWrapper;

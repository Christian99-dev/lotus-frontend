import React, { lazy, Suspense } from "react";

const MapsWrapper = () => {
  if (typeof window !== "undefined") {
    const Map = lazy(() => import("./Maps"));
    return (
      <Suspense>
        <Map />
      </Suspense>
    );
  }
};

export default MapsWrapper;

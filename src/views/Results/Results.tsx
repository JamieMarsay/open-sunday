import React, { FunctionComponent } from "react";
import TestMap from "@Components/TestMap/TestMap";
import { useParams } from "react-router-dom";
// import Map from "@Components/Map/Map";

const Results: FunctionComponent = () => {
  const { type, location } = useParams();

  return type && location ? (
    // <Map searchLocation={location} businessType={type} />
    <TestMap searchLocation={location} businessType={type} />
  ) : null;
};

export default Results;

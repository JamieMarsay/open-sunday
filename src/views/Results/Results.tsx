import React from "react";
import { useParams } from "react-router-dom";
import TestMap from "@Components/TestMap/TestMap";

const Results = () => {
  const { type, location } = useParams();
  return (
    // <Map businessType={type} searchLocation={location} />
    <TestMap businessType={type} searchLocation={location} />
  );
};

export default Results;

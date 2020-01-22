import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import TestMap from "@Components/TestMap/TestMap";

const Results: FunctionComponent = () => {
  const { type, location } = useParams();
  return type && location ? (
    <TestMap
      searchLocation={location as string}
      businessType={type as string}
    />
  ) : null;
};

export default Results;

import React, { FunctionComponent, Fragment } from "react";
import Typography from "@Components/Typography/Typography";
import GridV2 from "@Components/Grid/Grid";
import { IHeading } from "./IHeading";

const Heading: FunctionComponent<IHeading> = ({ title, controls }) => (
  <GridV2
    cols={2}
    children={
      <Fragment>
        <Typography text={title} variant="h1" />
        {controls ? <span className="flex flex--end">{controls}</span> : null}
      </Fragment>
    }
  />
);

export default Heading;

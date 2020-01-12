import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import { IPaper } from "./IPaper";
import "./Paper.scss";

const Paper: FunctionComponent<IPaper> = ({ children, title }) => (
  <div className="paper">
    <div className="m--bottom-lg">
      <Typography variant="h2" text={title} />
    </div>

    {children}
  </div>
);

export default Paper;

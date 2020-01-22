import React, { FunctionComponent } from "react";
import { IGrid } from "./IGrid";
import clsx from "clsx";
import "./Grid.scss";

const Grid: FunctionComponent<IGrid> = ({ cols, children, vCentre }) => (
  <div
    className={clsx("grid", {
      "flex--v-centre": vCentre
    })}
    style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
  >
    {children}
  </div>
);

export default Grid;
